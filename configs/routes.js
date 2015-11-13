export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home')
    },
        result: {
        path: '/result',
        method: 'get',
        page: 'result',
        title: 'Result',
        handler: require('../components/Result')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    }
};
