<template>
    <div class="regist-page">
        <v-header class="regist-page-header" :show-regist="false" />
        <div class="regist-page-content">
            <div class="regist-page-content-title">{{ $t('message.title.resetpassword') }}</div>
            <div class="regist-page-content-form">
                <b-input
                    v-model="resetData.passd"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="password_icon"
                    type="password"
                    :placeholder="$t('message.placeholder.registPassd')"
                    :verify="passdVerify"/>
                <b-input
                    v-model="resetData.passdConf"
                    class="regist-page-content-form-input regist-page-gap-top_20"
                    icon="password_icon"
                    type="password"
                    ref = 'child1'
                    :placeholder="$t('message.placeholder.registPassdConf')"
                    :verify="passdConfVerify"/>
            </div>
            <b-button
                class="regist-page-content-btn"
                :class="{'enabled': resetEnabled}"
                active="regist-page-content-btn-active"
                id="geeTestButton"
                :disabled="!resetEnabled">{{ $t('message.btn.sure') }}</b-button>
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
      resetEnabled: false,
      userid: Math.random().toFixed(8),
      submiting: false,
      resetData: {
        passd: "",
        passdConf: "",
        code: ""
      },
      resetValidata: {
        passd: false,
        passdConf: false
      }
    };
  },
  computed: {
    submitFormData: function() {
      return {
        code: this.resetData.code,
        newPassword: this.resetData.passd
      };
    }
  },
  mounted() {
    this.resetData.code = this.$route.params.code;
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
                if (that.resetEnabled) {
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
    check() {
      if (this.resetValidata.passdConf && this.resetValidata.passd) {
        this.resetEnabled = true;
      }
    },
    passdVerify(data) {
      this.resetValidata.passd = false;
      this.resetEnabled = false;
      if (!data) {
        return this.$t("message.verify.notEmpty", {
          key: this.$t("message.placeholder.registPassd")
        });
      }
      if ((data + "").length < 8) {
        return this.$t("message.verify.emailMinLength");
      }
      if (this.resetData.passdConf.length) {
        this.$refs.child1.outVerify(this.resetData.passdConf);
      }
      this.resetValidata.passd = true;
      this.check();
    },
    passdConfVerify(data) {
      this.resetValidata.passdConf = false;
      this.resetEnabled = false;
      if (!data) {
        return this.$t("message.verify.notEmpty", {
          key: this.$t("message.placeholder.registPassdConf")
        });
      }
      if (data !== this.resetData.passd) {
        return this.$t("message.verify.passdNotUnify");
      }
      this.resetValidata.passdConf = true;
      this.check();
      return false;
    },
    submit() {
      if (!this.resetEnabled || this.submiting) {
        return;
      }
      this.resetEnabled = false;
      this.submiting = true;
      let that = this;
      HTTP.resetPasswordCode(this.submitFormData).then(
        function(res) {
          that.$Toast.success({
            text: "密码重置成功",
            autoClose: true,
            duration: 1500
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
          that.resetEnabled = true;
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
    &-form {
      margin: px2rem(30px) 0 px2rem(20px);
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
    &-footer {
      @include font-dpr(12px);
      color: #a8acb9;
      &-login {
        color: #006ce1;
      }
    }
  }

  &-gap-top_10 {
    margin-top: px2rem(10px);
  }
  &-gap-top_20 {
    margin-top: px2rem(20px);
  }
}
</style>
