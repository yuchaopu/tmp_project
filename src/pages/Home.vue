<template>
    <div id="homePage">
        <div class="toptips" v-if="announcements.length > 0">
            <icon-svg class="icon-gonggao_icon" icon-class="gonggao_icon" />
            <div class="news-list">
                <transition name="slide" mode="out-in">
                    <a class="news-item" :key="_setAnnouncements().index" :href="_setAnnouncements().url" target="_blank">
                        <p>{{_setAnnouncements().text}}</p>
                        <span>({{$moment(_setAnnouncements().time).format('MM-DD')}})</span>
                    </a>
                </transition>
            </div>
            
        </div>
        <v-header class="header"></v-header>
        <div class="banner">
            <p class="slogan">
                BitMax<br>We Know Exchange
            </p>
            <v-quickRegist>
            </v-quickRegist>
            <div class="swiper-wrapper">
                <div class="swiper-content" :class="{'move': swiperIndex == 2}">
                    <div class="swiper-tab">
                        <a class = "swiper-item" v-for="(item, index) in activities" :key="item.index" :href="item.url" v-if="index < 4" target="_blank" :style="{'background-image': 'url('+ item.bgUrl +')'}">
                            <h2>{{item.title}}</h2>
                            <p>{{item.content}}</p>
                        </a>
                    </div>
                    <div class="swiper-tab" v-if="activities.length > 4">
                        <a class="swiper-item" v-for="(item, index) in activities" :key="item.index" :href="item.url" v-if="index > 3" target="_blank">
                            <h2>{{item.title}}</h2>
                            <p>{{item.content}}</p>
                        </a>
                    </div>
                </div>
                <div class="control-line" v-if="activities.length > 4 && activities.length <= 8">
                    <span class="line" :class="{'active': swiperIndex == 1}" @click="swiperChange(1)"></span>
                    <span class="line" :class="{'active': swiperIndex == 2}" @click="swiperChange(2)"></span>
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
        <div class="advantage">
            <h2>{{$t('message.introduce.title')}}</h2>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-gongkaitouming_icon" icon-class="gongkaitouming_icon" />
                <h3>{{$t('message.introduce.first.title')}}</h3>
                <p>{{$t('message.introduce.first.content')}} </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-gaoxingnengzhichi_icon" icon-class="gaoxingnengzhichi_icon" />
                <h3>{{$t('message.introduce.second.title')}}</h3>
                <p>{{$t('message.introduce.second.content')}} </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-anquanwuqin_icon" icon-class="anquanwuqin_icon" />
                <h3>{{$t('message.introduce.third.title')}}</h3>
                <p>{{$t('message.introduce.third.content')}} </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-liudongxingzhichi_icon" icon-class="liudongxingzhichi_icon" />
                <h3>{{$t('message.introduce.fourth.title')}}</h3>
                <p>{{$t('message.introduce.fourth.content')}} </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-tuanduiliangdian_icon" icon-class="tuanduiliangdian_icon" />
                <h3>{{$t('message.introduce.fifth.title')}}</h3>
                <p>{{$t('message.introduce.fifth.content')}} </p>
            </div>
        </div>
        <div class="middle-regist">
            <p class="slogan">
                {{ $t('message.btn.regist') }}<br>{{ $t('message.text1') }}
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
        <v-footer></v-footer>
        <v-fixedTools></v-fixedTools>

    </div>
    
</template>
<script>
    import header from '@/components/Header/Header';
    import footer from '@/components/Footer/Footer';
    import fixedTools from '@/components/FixedTools/FixedTools';
    import quickRegist from '@/components/QuickRegist/QuickRegist';
    import HTTP from '@/api/HttpRequest';
    export default {
        name: 'Home',
        data (){
            return {
                swiperIndex: 1,
                number: 0,
                announcements:[], // 小喇叭公告
                activities: [] // 近期活动
            };
        },
        computed: {
            
        },
        mounted() {
            this.startMove();
            // 公告
            HTTP.getAnnouncements().then(res => {
                if(res.status === 200){
                    this.$nextTick(()=>{
                        this.announcements = res.data;
                        this._setAnnouncements();
                    })
                }
                
            }, err => {
                console.log(err);
            });
            // 活动
            HTTP.getActivities().then(res => {
                if(res.status === 200){
                    this.$nextTick(()=>{
                        this.activities = res.data;
                    })
                }
            }, err => {

            });
            // 市场行情
            HTTP.getMarkets().then(res => {
                if(res.status === 200){
                    this.$nextTick(()=>{
                        this.activities = res.data;
                    })
                }
            }, err => {

            });
        },
        components: {
            'v-header': header,
            'v-quickRegist': quickRegist,
            'v-footer': footer,
            'v-fixedTools': fixedTools
        },
        methods: {
            swiperChange (index){
                this.swiperIndex = index;
            },
            startMove() {
                let timer = setTimeout(() => {
                    if (this.number === this.announcements.length - 1) {
                        this.number = 0;
                    } else {
                        this.number += 1;
                    }
                    this.startMove();
                }, 5000)
            },
            _setAnnouncements() {
                return {
                    index: this.number,
                    text: this.announcements[this.number].msg,
                    time: this.announcements[this.number].publishTime,
                    url: this.announcements[this.number].url
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../style/base';
    @import '../style/commom';
#homePage{
    position: relative;
    .toptips{
        height: px2rem(30px);
        background: #004FA4;
        display: flex;
        justify-content: space-between;
        color: #fff;
        line-height: px2rem(30px);
        @include font-dpr(12px);
        position: relative;
        z-index: 2;
        .icon-gonggao_icon {
            width: px2rem(16px);
            height: px2rem(14px);
            margin: px2rem(8px) px2rem(16px) 0 px2rem(16px);
        }
        .news-list{
            flex: 1;
            overflow: hidden;
            .news-item{
                display: flex;
                justify-content: space-between;
                color: #fff;
                &:hover{
                    text-decoration: none;
                }
                p {
                    // width: px2rem(248px);
                    flex: 1;
                    @include overflow-ellipsis;
                }
                span {
                    margin: 0 px2rem(16px);
                }
            }
            .slide-enter-active, .slide-leave-active {
                transition: all 0.5s linear;
            }
            .slide-leave-to {
                transform: translateY(px2rem(-15px));
            }
            .slide-enter{
                transform: translateY(px2rem(15px));
            }
        }
       
    }
    #header.header{
        top: px2rem(30px);
        // z-index: 3;
        &.fixed{
            top: 0;
        }
    }
    .banner{
        background-color: $base-color; 
        height: px2rem(642px);
        border-radius: 0 0 200px 200px/0 0 50px 50px;
        position: relative;
        margin-top: px2rem(-30px);
        .slogan{
            @include ta_c;
            font-size: px2rem(32px);
            // @include font-dpr(32px);
            color: #fff;
            padding: px2rem(160px) 0 px2rem(80px);
        }
        .swiper-wrapper{
            width: px2rem(375px);
            height: px2rem(230px);
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            bottom: px2rem(-70px);
            overflow: hidden;
            .swiper-content{
                position: relative;
                height: px2rem(210px);
                transition: all 0.5s ease;
                &.move{
                    transform: translate(px2rem(-375px), 0);
                }
                .swiper-tab{
                    width: px2rem(375px);
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    position: absolute;
                    left: 0;
                    top: 0;
                    &:nth-child(2n){
                        left: px2rem(375px);
                    }
                    .swiper-item{
                        width: px2rem(165px);
                        height: px2rem(94px);
                        background-color: #fff;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: right bottom;
                        margin-bottom: px2rem(10px);
                        padding: px2rem(10px);
                        &:nth-child(2n){
                            margin-left: px2rem(10px);
                        }
                        h2{
                            font-weight: normal;
                            color: $black-color;
                            @include font-dpr(14px);
                            @include overflow-ellipsis;
                        }
                        p{
                            line-height: px2rem(18px);
                            max-height: px2rem(36px);
                            @include font-dpr(12px);
                            @include multi-line-ellipsis(2);
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
                    margin: 0 px2rem(10px);
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
}
</style>

