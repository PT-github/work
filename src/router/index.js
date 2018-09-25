import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '../views/layout/Layout'

const router =  new Router({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: 'home',
            children: [
                {
                    path: '/members',
                    component: _import('layout/MemberCenterComp'),
                    redirect: '/members/baseInfo',
                    children: [
                        {
                            path: '/members/baseInfo',
                            component: _import('members/baseInfo'),
                            name: 'sBaseInfo',
                            meta: {title: '基本信息', keepAlive: false, needLogin: true}
                        },{
                            path: '/members/resume',
                            component: _import('members/resume'),
                            name: 'sResume',
                            meta: {title: '我的简历', keepAlive: false, needLogin: true}
                        },{
                            path: '/members/income',
                            component: _import('members/income'),
                            name: 'sIncome',
                            meta: {title: '我的收益', keepAlive: false, needLogin: true}
                        },{
                            path: '/members/score',
                            component: _import('members/score'),
                            name: 'sScore',
                            meta: {title: '我的积分', keepAlive: false, needLogin: true}
                        },{
                            path: '/members/myjob',
                            component: _import('members/myjob'),
                            name: 'sMyjob',
                            meta: {title: '我的工作', keepAlive: false, needLogin: true}
                        },{
                            path: '/members/myvideo',
                            component: _import('members/myvideo'),
                            name: 'sMyvideo',
                            meta: {title: '我的视频', keepAlive: false, needLogin: true}
                        },{
                            path: '/members/myorder',
                            component: _import('members/myorder'),
                            name: 'sMyorder',
                            meta: {title: '我的订单', keepAlive: false, needLogin: true}
                        },{
                            path: '/company/company-baseInfo',
                            component: _import('company/company-baseInfo'),
                            name: 'sCompanyBaseInfo',
                            meta: {title: '基本信息', keepAlive: false, needLogin: true}
                        },{
                            path: '/company/job-control',
                            component: _import('company/job-control'),
                            name: 'sJobControl',
                            meta: {title: '职位管理', keepAlive: false, needLogin: true}
                        },{
                            path: '/company/interview-mana',
                            component: _import('company/interview-mana'),
                            name: 'sInterviewMana',
                            meta: {title: '面试管理', keepAlive: false, needLogin: true}
                        },{
                            path: '/company/talent-pool',
                            component: _import('company/talent-pool'),
                            name: 'sTalentPool',
                            meta: {title: '企业人才库', keepAlive: false, needLogin: true}
                        },
                    ]
                }, {
                    path: 'home',
                    component: _import('home/home'),
                    name: 'home',
                    meta: {title: '首页', keepAlive: true}
                },{
                    path: '/company-detail',
                    component: _import('company/company-baseInfo'),
                    name: 'companyDetail',
                    meta: {title: '基本信息', keepAlive: false}
                },{
                    path: '/mail',
                    component: _import('home/mail'),
                    name: 'Mail',
                    meta: {title: '消息', keepAlive: false, needLogin: true}
                }, {
                    path: 'certifate-query',
                    component: _import('home/components/s-certificate-query'),
                    name: 'sCertificateQuery',
                    meta: {title: '证书查询', keepAlive: false}
                }, {
                    path: 'news',
                    component: _import('news/news-list'),
                    name: 'newsList',
                    meta: {title: '新闻中心', keepAlive: true}
                }, {
                    path: 'news-detail',
                    component: _import('news/news-detail'),
                    name: 'newsDetail',
                    meta: {title: '新闻详情', keepAlive: false}
                }, {
                    path: "/lesson-detail",
                    component: _import('education/lesson-detail'),
                    meta: {title: '课程详情', keepAlive: false}
                }, {
                    path: "/project-detail",
                    component: _import('education/project-detail'),
                    meta: {title: '项目详情', keepAlive: false}
                }, {
                    path: 'news-cate-list',
                    component: _import('news/news-cate-list'),
                    name: 'newsCateList',
                    meta: {title: '新闻列表', keepAlive: false}
                }, {
                    path: 'education-training',
                    component: _import('education/education-training'),
                    name: 'educationTraining',
                    meta: {title: '教育培训', keepAlive: true}
                }, {
                    path: 'job-hunting',
                    component: _import('job/job-hunting'),
                    name: 'jobHunting',
                    meta: {title: '找工作', keepAlive: false}
                }, {
                    path: 'search-result',
                    component: _import('home/search-result'),
                    name: 'searchResult',
                    meta: {title: '搜索结果', keepAlive: false}
                }, {
                    path: 'personnel-list',
                    component: _import('job/personnel-list'),
                    name: 'personnelList',
                    meta: {title: '招揽人才', keepAlive: false}
                }, {
                    path: 'senior-personnel-list',
                    component: _import('job/senior-personnel-list'),
                    name: 'seniorPersonnelList',
                    meta: {title: '中高级人才', keepAlive: false}
                }, {
                    path: 'about-us',
                    component: _import('about/about-us'),
                    name: 'aboutUs',
                    meta: {title: '关于我们', keepAlive: true}
                }
            ]
        }, {
            path: "/login",
            component: _import('login/index')
        }, {
            path: "/resume-detail",
            component: _import('job/resume-detail'),
            meta: {title: '简历详情', keepAlive: false}
        }, {
            path: "/job-detail",
            component: _import('job/job-detail'),
            meta: {title: '职位详情', keepAlive: false}
        }, {
            path: "/resume-edit",
            component: _import('job/resume-edit'),
            meta: {title: '简历编辑', keepAlive: false, needLogin: true}
        }, {
            path: "*",
            redirect: "/"
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.needLogin && !localStorage.getItem("userInfo")) {
        next({path: "/"});
    } else {
        next()
    }
})

export default router
