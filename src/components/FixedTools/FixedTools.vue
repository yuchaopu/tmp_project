<template>
    <div id="FixedTools">
        <div class="card telegraph">
            <icon-svg icon-class="dianbao_btn" class="card-icon icon-dianbao_btn"></icon-svg>
        </div>
        <div class="card wx">
            <icon-svg icon-class="weixin_btn" class="card-icon icon-weixin_btn"></icon-svg>
        </div>
        <div class="card backup"  v-show="showTop" @click="scrollToTop">
            <icon-svg icon-class="zhiding_btn" class="card-icon icon-zhiding_btn"></icon-svg>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                scrollTop: 0,
                time: 0,
                dParams: 20,
                scrollState: 0
            }
        },
        computed:{
            showTop: function(){
                let value = this.scrollTop>200?true:false;
                return value;
            },
        },
        mounted() {
            window.addEventListener('scroll', this.getScrollTop);
        },
        methods: {
            scrollToTop (e){
                if(!!this.scrollState){
                    return;
                }
                this.scrollState = 1;
                e.preventDefault();
                let distance = document.documentElement.scrollTop || document.body.scrollTop;
                let _this = this;
                this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 20);
            },
            gotoTop(distance){
                this.dParams += 20;
                distance = distance>0 ? distance : 0;
                document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
                if(this.scrollTop < 10){
                clearInterval(this.time);
                this.dParams = 20;
                this.scrollState = 0;
                }
            },
            getScrollTop() {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/base';
@import '../../style/commom';
#FixedTools{
    width: px2rem(40px);
    height: px2rem(138px);
    position: fixed;
    right: 0;
    top: 70%;
    z-index: 99;
    .card{
        width: px2rem(40px);
        height: px2rem(40px);
        border: 1px solid #006CE1;
        background: #FFFFFF;
        box-shadow: 0 px2rem(4px) px2rem(4px) px2rem(-1px) rgba(0,88,171,0.21);
        @include ta_c;
        line-height: px2rem(40px);
        &.telegraph{
           box-shadow: none; 
           border-bottom: none;
        }
        &.wx{
            margin-bottom: px2rem(29px);
        }
        .card-icon{
            width: px2rem(18px);
            height: px2rem(18px);
            margin-top: px2rem(11px);
            color: #006CE1;
            &.icon-weixin_btn{
                height: px2rem(15px);
            }
        }
    }
}
</style>
