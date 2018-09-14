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
            <div class="banner-main">
                <p class="slogan">
                    BitMax<br>We know exchange
                </p>
                <v-quickRegist v-if="!isLogin" class="banner-main-regist" />
                <div class="swiper-wrapper">
                    <div class="swiper-content">
                        <div class="swiper-tab" v-for="(swiper,i) in activities" :key="i" v-show="activeIndex == i">
                            {{swiper.index}}
                            <a class = "swiper-item" v-for="(item, index) in swiper" :key="index" :href="item.url" target="_blank" :style="{'background-image': 'url('+ item.bgUrl +')'}" :class="{'hidden': !item}">
                                <h2>{{item.title}}</h2>
                                <p>{{item.content}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="control-line">
                        <span class="line" v-for="(line,index) in activities" :key="index" :class="{'active': activeIndex == index}" @click="swiperChange(index)"></span>
                    </div>
                </div>
            </div>
            <div class="banner-radius">
                <div class="banner-radius-color"></div>
            </div>
        </div>
        <div class="quotation">
            <div class="quotation-item" v-for="market in markets" :key="market.index">
                <div class="digital">
                    <span class="digital-name">{{market.s}}</span>
                    <span class="digital-change" :class="market.price_status" >{{market.symbol}}{{market.change}}%</span>
                </div>
                <div class="price-wrapper">
                    <p class="price" :class="market.price_status">{{market.c}}</p>
                    <!-- <p class="CNY">￥15.78</p> -->
                </div>
                <div class="latest-24">
                    <p>{{$t('message.volume')}}：<span>{{market.v}}</span><span>{{market.qa}}</span> </p>
                </div>
            </div>
        </div>
        <div class="advantage">
            <h2>{{$t('message.introduce.title')}}</h2>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-gongkaitouming_icon" icon-class="gongkaitouming_icon" />
                <h3>{{$t('message.introduce.first.title')}}</h3>
                <p v-html = "$t('message.introduce.first.content')"> </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-gaoxingnengzhichi_icon" icon-class="gaoxingnengzhichi_icon" />
                <h3>{{$t('message.introduce.second.title')}}</h3>
                <p v-html = "$t('message.introduce.second.content')"> </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-anquanwuqin_icon" icon-class="anquanwuqin_icon" />
                <h3>{{$t('message.introduce.third.title')}}</h3>
                <p v-html = "$t('message.introduce.third.content')"> </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-liudongxingzhichi_icon" icon-class="liudongxingzhichi_icon" />
                <h3>{{$t('message.introduce.fourth.title')}}</h3>
                <p v-html = "$t('message.introduce.fourth.content')"> </p>
            </div>
            <div class="advantage-item">
                <icon-svg class="advantage-icon icon-tuanduiliangdian_icon" icon-class="tuanduiliangdian_icon" />
                <h3>{{$t('message.introduce.fifth.title')}}</h3>
                <p v-html = "$t('message.introduce.fifth.content')"></p>
            </div>
        </div>
        <div v-if="!isLogin" class="middle-regist">
            <p class="slogan">
                {{ $t('message.btn.regist') }}<br>{{ $t('message.text1') }}
            </p>
            <v-quickRegist />
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
                isLogin: false,
                activeIndex: 0,
                number: 0,
                announcements:[], // 小喇叭公告
                activities: [],   // 近期活动
                markets: [],    // 行情
                timer: null,
                activeTimer: null
            };
        },
        computed: {
            
        },
        mounted() {
            this.checkStatus();
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
                        let original = res.data;
                        original = original.concat(original.concat(original.concat(original.concat(original))));
                        // 转成二维数组
                        let num = 2;
                        this.activities = new Array(Math.ceil(original.length/num));
                        for(let i = 0; i<this.activities.length;i++){
                            this.activities[i] = new Array();
                            for(let j = 0; j<num; j++){
                                this.activities[i][j] = '';
                            }
                        }
                        for(let i = 0; i<original.length;i++){
                            this.activities[parseInt(i/num)][i%num] = original[i]; 
                        }
                    })
                }
            }, err => {

            });
            // 市场行情
            this.getMarkets();
            this.marketsTimer();
            this.autoActive();
            
            
        },
        components: {
            'v-header': header,
            'v-quickRegist': quickRegist,
            'v-footer': footer,
            'v-fixedTools': fixedTools
        },
        methods: {
            swiperChange (index){
                this.activeIndex = index;
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
            },
            marketsTimer() {
                this.timer = setInterval(()=>{this.getMarkets()},5000)
            },
            getMarkets(){
                HTTP.getMarkets().then(res => {
                    if(res.status === 200){
                        this.$nextTick(()=>{
                            this.markets = res.data.data;
                            this.markets.forEach((item)=>{
                                if(item.c == item.o){
                                    item.price_status = 'hold';
                                    item.symbol = '';
                                } else if (item.c > item.o){
                                    item.price_status = 'rise';
                                    item.symbol = '+';
                                } else {
                                    item.price_status = 'lower';
                                    item.symbol = '-';
                                }
                                item.change = item.o == 0? 0 :this.getFloat(Math.abs(item.c - item.o)*100/item.o);
                            })
                        })
                    }
                }, err => {

                }); 
            },
            getFloat(num) {
                var a = num.toString();
                var aNew;
                var re = /([0-9]+\.[0-9]{2})[0-9]*/;
                aNew = parseFloat(a.replace(re,"$1"));
                return aNew;
            },
            checkStatus() {
                if (localStorage.getItem('authorization')) {
                    this.isLogin = true;
                } else {
                    this.isLogin = false;
                }
            },
            autoActive() {
                this.activeTimer = setInterval(() => {
                    if (this.activeIndex === this.activities.length - 1) {
                        this.activeIndex = 0;
                    } else {
                        this.activeIndex += 1;
                    }
                    this.swiperChange(this.activeIndex);
                }, 8000)
            }
        },
        destroyed(){
            clearInterval(this.timer);
            clearInterval(this.activeTimer);
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
        background: #172B4D;
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
            color: rgba($color: #fff, $alpha: 0.5)
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
        margin-top: px2rem(-30px);
        position: relative;
        z-index: 1;
        &-main{
            background-color: $base-color; 
            // height: px2rem(642px);
            // border-radius: 0 0 200px 200px/0 0 50px 50px;
            position: relative;
            z-index: 10;
            padding-bottom: px2rem(45px);
            &-regist{
                margin-bottom: px2rem(60px);
            }
            .slogan{
                @include ta_c;
                font-size: px2rem(32px);
                // @include font-dpr(32px);
                color: #fff;
                padding: px2rem(160px) 0 px2rem(80px);
            }
            .swiper-wrapper{
                width: px2rem(375px);
                height: px2rem(125px);
                position: absolute;
                left: 50%;
                transform: translate(-50%, 0);
                bottom: px2rem(-70px);
                overflow: hidden;
                .swiper-content{
                    position: relative;
                    height: px2rem(105px);
                    .swiper-tab{
                        width: px2rem(375px);
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        position: absolute;
                        left: 0;
                        top: 0;
                        .swiper-item{
                            width: px2rem(165px);
                            height: px2rem(94px);
                            background-color: #fff;
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: right bottom;
                            margin-bottom: px2rem(10px);
                            padding: px2rem(10px);
                            &.hidden{
                                visibility: hidden;
                            }
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
        &-radius{
            height: px2rem(100px);
            position: relative;
            margin-top: px2rem(-80px);
            z-index: 9;
            width: 100%;
            overflow: hidden;
            &-color{
                width: 200%;
                height: px2rem(100px);
                left: -50%;
                position: relative;
                background-color: $base-color; 
                border-radius: 0 0 100% 100%;
            }
        }
    }
    .quotation{
        margin-top: px2rem(50px);
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
                    &.rise{
                        color: #24B864;
                    }
                    &.lower{
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
                    &.rise{
                        color: #24B864;
                    }
                    &.lower{
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
                word-break: break-all;
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

