<template>
    <div id="homePage">
        <div class="toptips">
            <icon-svg class="icon-gonggao_icon" icon-class="gonggao_icon" />
            <p>公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符公告文字内容限制同网站英文英文字符字符</p>
            <span>(8-24)</span>
        </div>
        <v-header class="header"></v-header>
        <div class="banner">
            <p class="slogan">
                BitMax<br>We Know Exchange
            </p>
            <v-quickRegist>
            </v-quickRegist>
            <div class="swiper-wrapper">
                <div class="swiper-content">
                    <div class="swiper-tab">
                        <div class="swiper-item">
                            <h2>挖矿赚钱</h2>
                            <p>据官方数据统计，平台开放注册24小时开放</p>
                        </div>
                        <div class="swiper-item">

                        </div>
                        <div class="swiper-item">

                        </div>
                        <div class="swiper-item">

                        </div>
                    </div>
                </div>
                <div class="control-line">
                    <span class="line active"></span>
                    <span class="line"></span>
                </div>
            </div>
        </div>
        <div class="quotation">
            <div class="quotation-item">
                <div class="digital">
                    <span class="digital-name">EOS/BTC</span>
                    <span class="digital-change up">+123.00%</span>
                </div>
                <div class="price-wrapper">
                    <p class="price up">0.12345678</p>
                    <p class="CNY">￥15.78</p>
                </div>
                <div class="latest-24">
                    <p>{{$t('message.volume')}}：<span>7,891.12345678</span><span>EOS</span> </p>
                </div>
            </div>
            <div class="quotation-item">
                <div class="digital">
                    <span class="digital-name">EOS/BTC</span>
                    <span class="digital-change down">-123.00%</span>
                </div>
                <div class="price-wrapper">
                    <p class="price down">0.12345678</p>
                    <p class="CNY">￥15.78</p>
                </div>
                <div class="latest-24">
                    <p>{{$t('message.volume')}}：<span>7,891.12345678</span><span>EOS</span> </p>
                </div>
            </div>
            <div class="quotation-item">
                <div class="digital">
                    <span class="digital-name">EOS/BTC</span>
                    <span class="digital-change up">+123.00%</span>
                </div>
                <div class="price-wrapper">
                    <p class="price up">0.12345678</p>
                    <p class="CNY">￥15.78</p>
                </div>
                <div class="latest-24">
                    <p>{{$t('message.volume')}}：<span>7,891.12345678</span><span>EOS</span> </p>
                </div>
            </div>
        </div>
        <div class="introduce">
            
        </div>
    </div>
    
</template>
<script>
    import header from '@/components/Header/Header';
    import quickRegist from '@/components/QuickRegist/QuickRegist';
    export default {
        name: 'Home',
        components: {
            'v-header': header,
            'v-quickRegist': quickRegist
        }
    }
</script>
<style lang="scss" scoped>
    @import '../style/base';
    @import '../style/commom';
    .toptips{
        height: px2rem(30px);
        background: #004FA4;
        display: flex;
        justify-content: space-between;
        color: #fff;
        line-height: px2rem(30px);
        @include font-dpr(12px);
        .icon-gonggao_icon {
            width: px2rem(16px);
            height: px2rem(14px);
            margin: px2rem(8px) px2rem(16px) 0 px2rem(16px);
        }
        p {
            width: px2rem(248px);
            flex: 1;
            @include overflow-ellipsis;
        }
        span {
            margin: 0 px2rem(16px);
        }
    }
    .header{
        z-index: 2;
    }
    .banner{
        background-color: $base-color; 
        height: px2rem(642px);
        border-radius: 0 0 200px 200px/0 0 50px 50px;
        position: relative;
        .slogan{
            @include ta_c;
            font-size: px2rem(32px);
            // @include font-dpr(32px);
            color: #fff;
            padding: px2rem(80px) 0;
        }
        .swiper-wrapper{
            width: 100%;
            height: px2rem(230px);;
            position: absolute;
            left: 0;
            bottom: px2rem(-70px);
            .swiper-content{
                .swiper-tab{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    .swiper-item{
                        width: px2rem(165px);
                        height: px2rem(94px);
                        background-color: #fff;
                        margin-bottom: px2rem(10px);
                        padding: px2rem(10px);
                        &:nth-child(2n){
                            margin-left: px2rem(10px);
                        }
                        h2{
                            font-weight: normal;
                            color: $black-color;
                            @include font-dpr(14px);
                        }
                        p{
                            line-height: px2rem(18px);
                            @include font-dpr(11px);
                            margin-top: px2rem(8px);
                            color: #6B798E;
                        }
                    }
                }
            }
            .control-line{
                display: flex;
                justify-content: center;
                margin-top: px2rem(10px);
                .line{
                    width: px2rem(40px);
                    height: px2rem(3px);
                    background-color: rgba($color: #6B798E, $alpha: 0.2);
                    &:last-child{
                        margin-left: px2rem(20px);
                    }
                    &.active{
                        background-color: $base-color;
                    }
                    
                }
            }
        }
    }
    .quotation{
        margin-top: px2rem(100px);
        padding-top: px2rem(10px);
        .quotation-item{
            width: px2rem(345px);
            background: #FFFFFF;
            padding: px2rem(20px);
            border: 1px solid #E5E5E5;
            @include rounded-corners-2;
            margin: 0 auto px2rem(10px);
            .digital{
                .digital-name{
                    color: $black-color;
                    @include font-dpr(16px);
                }
                .digital-change{
                    @include font-dpr(14px);
                    color: $black-color;
                    margin-left: px2rem(8px);
                    &.up{
                        color: #24B864;
                    }
                    &.down{
                        color: #F05253;
                    }
                }
            }
            .price-wrapper{
                margin-top: px2rem(10px);
                .price{
                    font-weight: 600;
                    color: $black-color;
                    @include font-dpr(36px);
                    &.up{
                        color: #24B864;
                    }
                    &.down{
                        color: #F05253;
                    }
                }
                .CNY{
                    margin-top: px2rem(10px);
                    @include font-dpr(12px);
                    color: #6B798E;
                }
            }
            .latest-24{
                @include font-dpr(14px);
                color: #6B798E;
                span{
                    color: $black-color;
                    margin-right: px2rem(10px);
                }
            }
        }
    }
</style>

