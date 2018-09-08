<template>
    <div class="verify-page">
        <v-header class="verify-page-header" :show-regist="false" />
        <div class="verify-page-content">
            <div class="verify-page-content-title">{{ $t('message.title.googleAuthenticator') }}</div>
            <div class="verify-page-content-form">
                <b-input
                    v-model="verifyData.twoFacToken"
                    class="verify-page-content-form-input"
                    :verify="googlelVerify"/>
            </div>
            <b-button
                class="verify-page-content-btn"
                :class="{'enabled': verifyEnabled}"
                active="verify-page-content-btn-active"
                @click="submit"
                :disabled="!verifyEnabled">{{ $t('message.btn.sure') }}</b-button>
            <div class="verify-page-content-footer verify-page-gap-top_20">
                <div class="">
                    <router-link class="verify-page-content-footer-login" to="/resetgoogleauthenticator">{{ $t('message.content.verifyText1') }}</router-link>
                </div>
            </div>
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
      verifyEnabled: false,
      verifyData: {
        twoFacToken: ""
      }
    };
  },
  methods: {
    check() {
      if (this.verifyData.twoFacToken) {
        this.verifyEnabled = true;
      }
    },
    googlelVerify(data) {
      if (!data) {
        return this.$t("message.verify.notEmpty", {
          key: this.$t("message.placeholder.registMail")
        });
      }
      this.check();
      return false;
    },
    submit() {
      var that = this;
      HTTP.bindGoogleAuth(this.verifyData).then(
        res => {
          res = res.data;
          if (res.status === "success") {
            res = JSON.parse(this.$route.query.res);
            localStorage.setItem("authorization", res.authorization);
            localStorage.setItem("accountGroup", res.accountGroup);
            this.$router.push(this.$route.query.redirect || "/home");
          }
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
.verify-page {
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
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      &-login {
        color: #006ce1;
      }
    }
  }
  &-gap-top_20 {
    margin-top: px2rem(20px);
  }
}
</style>
