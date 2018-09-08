<template>
    <div class="regist-page">
        <v-header class="regist-page-header" :show-regist="false" />
        <div class="regist-page-content">
            <div class="regist-page-content-title">{{ $t('message.title.requestPassword') }}</div>
            <div class="regist-page-content-warning">
                <icon-svg icon-class="jinggao" class="regist-page-content-warning-jinggao"></icon-svg>
                {{ $t('message.content.forgetText1') }}
            </div>
            <div class="regist-page-content-form">
                <b-input
                    v-model="forgetData.email"
                    class="regist-page-content-form-input"
                    icon="email_icon"
                    :placeholder="$t('message.placeholder.registMail')"
                    :verify="emailVerify"/>
            </div>
            <b-button
                class="regist-page-content-btn"
                :class="{'enabled': forgetEnabled}"
                id="geeTestButton"
                active="regist-page-content-btn-active"
                :disabled="!forgetEnabled">{{ $t('message.btn.sendEmail') }}</b-button>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import HTTP from "@/api/HttpRequest";
export default {
  data() {
    return {
      forgetEnabled: false,
      userid: Math.random().toFixed(8),
      submiting: false,
      forgetData: {
        email: ""
      },
      forgetValidata: {
        email: false
      }
    };
  },
  computed: {
    submitFormData: function() {
      return {
        email: this.forgetData.email
      };
    }
  },
  mounted() {
    var that = this;
    HTTP.getGeetest(
      {},
      {
        params: {
          userid: this.userid
        }
      }
    ).then(res => {
      var language = localStorage.getItem("lang") || "zh";
      res = res.data;
      if (res.success === 1) {
        initGeetest(
          {
            gt: res.gt,
            challenge: res.challenge,
            offline: !(res.success === 1),
            new_captcha: true,
            product: "bind",
            lang: language == "zh" ? "zh-cn" : "en"
          },
          function(captchaObj) {
            that.captchaObj = captchaObj;
            document
              .getElementById("geeTestButton")
              .addEventListener("click", function() {
                if (that.forgetEnabled) {
                  captchaObj.verify();
                }
              });
            captchaObj.onSuccess(function() {
              var result = captchaObj.getValidate();
              HTTP.postGeetest({
                geetest_challenge: result.geetest_challenge,
                geetest_validate: result.geetest_validate,
                geetest_seccode: result.geetest_seccode
              }).then(res => {
                res = res.data;
                if (res.status === "success") {
                  that.submit();
                }
              });
            });
          }
        );
      }
    });
  },
  methods: {
    emailVerify(data) {
      this.forgetValidata.email = false;
      this.forgetEnabled = false;
      if (!data) {
        return this.$t("message.verify.notEmpty", {
          key: this.$t("message.placeholder.registMail")
        });
      }
      if (
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          data
        )
      ) {
        return this.$t("message.verify.registEmail");
      }
      this.forgetValidata.email = true;
      this.forgetEnabled = true;
      return false;
    },
    submit() {
      if (!this.forgetEnabled || this.submiting) {
        return;
      }
      this.forgetEnabled = false;
      this.submiting = true;
      let that = this;
      HTTP.recoveryEmail(this.submitFormData).then(
        function(res) {
          that.$router.push({
            name: "CheckMail",
            params: {
              data: {
                url: "recoveryEmail",
                submitData: that.submitFormData,
                email: that.submitFormData.email
              }
            }
          });
        },
        function(errMessage) {
          that.$Toast.error({
            text:
              (errMessage &&
                errMessage.response &&
                errMessage.response.data &&
                errMessage.response.data.msg) ||
              that.$t("message.err.err"),
            duration: 1500
          });
          that.forgetEnabled = true;
          that.submiting = false;
        }
      );
    }
  },
  components: {
    "v-header": Header,
    "b-input": Input,
    "b-button": Button
  }
};
</script>

<style lang="scss" scoped>
@import "../style/base";
@import "../style/commom";
.regist-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-header {
    width: 100%;
    flex-grow: 0;
    z-index: 2;
  }

  &-content {
    width: 100%;
    flex-grow: 1;
    background-color: $white-color;
    padding: px2rem(30px) px2rem(20px);
    margin-top: px2rem(50px);
    &-title {
      @include font-dpr(30px);
      font-weight: 300;
    }
    &-warning {
      color: #f5a623;
      margin-top: px2rem(20px);
      @include font-dpr(12px);
      &-jinggao {
        width: px2rem(12px) !important;
        height: px2rem(12px) !important;
      }
    }
    &-form {
      margin: px2rem(10px) 0 px2rem(20px);
      &-input {
        @include font-dpr(14px);
      }
    }
    &-btn {
      @include ta_c;
      @include font-dpr(16px);
      color: $white-color;
      width: 100%;
      height: px2rem(42px);
      line-height: px2rem(42px);
      background-color: #172b4d;
      opacity: 0.2;
      &-active {
        opacity: 0.7 !important;
      }
      &.enabled {
        opacity: 1;
        background-color: #006ce1;
      }
    }
  }
}
</style>
