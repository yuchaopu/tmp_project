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
    }
    
}