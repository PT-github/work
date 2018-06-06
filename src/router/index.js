import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '../views/layout/Layout'

export default new Router({
    routes: [
        {
            path: '',
            component: Layout,
            redirect: 'home',
            children: [
                {
                    path: 'home',
                    component: _import('home/home'),
                    name: 'home',
                    meta: {title: '首页', keepAlive: true}
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
                    meta: {title: '找工作', keepAlive: true}
                }, {
                    path: 'personnel-list',
                    component: _import('job/personnel-list'),
                    name: 'personnelList',
                    meta: {title: '招揽人才', keepAlive: true}
                }, {
                    path: 'senior-personnel-list',
                    component: _import('job/personnel-list'),
                    name: 'seniorPersonnelList',
                    meta: {title: '中高级人才', keepAlive: true}
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
            path: "/member-center",
            component: _import('members/member-center')
        }, {
            path: "*",
            redirect: "/"
        }
    ]
})
