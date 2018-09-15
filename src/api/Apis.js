module.exports = {
    regist: {
        url: '/api/user/register',
        method: 'post'
    },
    login: {
        url: '/api/user/login',
        method: 'post'
    },
    recoveryEmail: {
        url: '/api/user/passwordreset/recover',
        method: 'post'
    },
    resetPasswordCode: {
        url: '/api/user/passwordreset/code',
        method: 'post'
    },
    getAnnouncements: {
        url: '/api/announcements',
        method: 'get'
    },
    getActivities: {
        url: '/api/activities',
        method: 'get'
    },
    getGeetest:{
        url: '/api/user/humanchallenge',
        method: 'get'
    },
    postGeetest:{
        url: '/api/user/humanchallenge',
        method: 'post'
    },
    bindGoogleAuth:{
        url:'/api/user/twofactorauth/verify',
        method: 'post'
    },
    getMarkets:{
        url:'/api/market/mobile',
        method: 'post'
    },
    verifyClientEmail: {
        url: '/api/user/verifyemail',
        method: 'get'
    },
    sendVerificationEmail: {
        url: '/api/user/sendverification',
        method: 'get'
    },
    getAllBalance: {
        url:'/api/balances',
        method: 'post'
    }
}
