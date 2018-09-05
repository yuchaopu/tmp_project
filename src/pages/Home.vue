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
                    <p>24h成交量：<span>7,891.12345678</span><span>EOS</span> </p>
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
                    <p>24h成交量：<span>7,891.12345678</span><span>EOS</span> </p>
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
                    <p>24h成交量：<span>7,891.12345678</span><span>EOS</span> </p>
                </div>
            </div>
        </div>
        <div class="advantage">
            <h2>我们的优势</h2>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-gongkaitouming_icon" icon-class="gongkaitouming_icon" />
                <h3>公开透明</h3>
                <p>实时的资产与交易数据查询验证机制，可为用户提供24小时实时全交易记录，以达到高度公开透明。 </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-gaoxingnengzhichi_icon" icon-class="gaoxingnengzhichi_icon" />
                <h3>高性能支持</h3>
                <p>面向大型金融机构服务的系统架构设计，采用先进的内存算法、快速读写、分布式信息传输框架，能够实时处理大规模交易。 </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-anquanwuqin_icon" icon-class="anquanwuqin_icon" />
                <h3>安全稳定</h3>
                <p>多级防⽕墙，多重签名，冷热隔离钱包，多维度降低用户资产风险。 </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-liudongxingzhichi_icon" icon-class="liudongxingzhichi_icon" />
                <h3>流动性支持</h3>
                <p>丰富的行业资源和优质的战略合作伙伴，活跃的社区参与度，为交易提供更好的流动性。 </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-tuanduiliangdian_icon" icon-class="tuanduiliangdian_icon" />
                <h3>团队亮点</h3>
                <p>结合传统金融行业的大规模交易技术、互联网企业的高效运营体系和数字资产系统的研发经验，致力于打造和完善为全球用户服务的新型数字资产交易平台。 </p>
            </div>
        </div>
        <div class="middle-regist">
            <p class="slogan">
                免费注册<br>即可马上交易
            </p>
            <v-quickRegist>
            </v-quickRegist>
        </div>
        <div class="investors">
            <div class="investors-item">
                <img src="../assets/images/investors-1@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-2@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-3@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-4@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-5@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-6@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-7@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-8@2x.png" alt="">
            </div>
            <div class="investors-item">
                <img src="../assets/images/investors-9@2x.png" alt="">
            </div>
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
                            color: $grey-color;
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
                    background-color: rgba($color: $grey-color, $alpha: 0.2);
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
        padding: px2rem(10px) 0;
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
                    color: $grey-color;
                }
            }
            .latest-24{
                @include font-dpr(14px);
                color: $grey-color;
                span{
                    color: $black-color;
                    margin-right: px2rem(10px);
                }
            }
        }
    }
    .advantage{
        margin: px2rem(40px) 0;
            color: $black-color;
        @include ta_c;
        h2{
            font-weight: normal;
            @include font-dpr(24px);
        }
        .advantage-item{
            margin-top: px2rem(30px);
            h3{
                font-weight: normal;
                margin: px2rem(15px) 0 px2rem(10px) 0;
                @include font-dpr(16px);
            }
            p{
                color: $grey-color;
                @include font-dpr(12px);
                padding: 0 px2rem(20px);
            }
            .advantage-icon{
                color: $base-color;
                &.icon-gongkaitouming_icon{
                    width: px2rem(42px);
                    height: px2rem(44px);
                }
                &.icon-gaoxingnengzhichi_icon{
                    width: px2rem(44px);
                    height: px2rem(42px);
                }
                &.icon-anquanwuqin_icon{
                    width: px2rem(44px);
                    height: px2rem(38px);
                }
                &.icon-tuanduiliangdian_icon{
                    width: px2rem(40px);
                    height: px2rem(44px);
                }
                &.icon-liudongxingzhichi_icon{
                    width: px2rem(44px);
                    height: px2rem(44px);
                }
            }
            
        }
    }
    .middle-regist{
        height: px2rem(487px);
        background-color: $base-color;
        position: relative;
        &:before{
            content: '';
            width: px2rem(125px);
            height: px2rem(142px);
            position: absolute;
            top: px2rem(29px);
            left: 0;
            background: url(../assets/images/regist-left@2x.png) center center/px2rem(125px) px2rem(142px) no-repeat;
        }
        &:after{
            content: '';
            width: px2rem(138px);
            height: px2rem(128px);
            position: absolute;
            bottom: 0;
            right: 0;
            background: url(../assets/images/regist-right@2x.png) center center/px2rem(138px) px2rem(128px) no-repeat;
        }
        .slogan{
            @include ta_c;
            font-size: px2rem(24px);
            color: #fff;
            padding: px2rem(144px) 0 px2rem(18px);
        }
    }
    .investors{
        display: flex;
        // justify-content: center;
        flex-wrap: wrap;
        background-color: #fff;
        padding: px2rem(40px) 0 0;
        .investors-item{
            width: px2rem(185px);
            height: px2rem(46px);
            margin-bottom: px2rem(30px);
            &:nth-child(2n+1){
                margin-left: px2rem(3px);
            }
            img{
                width: 100%;
                height: auto;
                display: block;
            }
        }
    }
</style>

