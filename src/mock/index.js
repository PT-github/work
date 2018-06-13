import Mock from 'mockjs'
import api from './home'
Mock.setup({
    timeout: '2000'
})
// 拦截首页接口请求
Mock.mock(/\/queryPoster/, 'post', api.queryPoster)
Mock.mock(/\/queryNews$/, 'post', api.queryNews)
Mock.mock(/\/queryLessons/, 'post', api.queryLessons)
Mock.mock(/\/queryTeachers/, 'post', api.queryTeachers)
Mock.mock(/\/queryCompany/, 'post', api.queryCompany)
Mock.mock(/\/queryJobs/, 'post', api.queryJobs)
Mock.mock(/\/queryTalents/, 'post', api.queryTalents)
Mock.mock(/\/queryFriendShips/, 'post', api.queryFriendShips)
Mock.mock(/\/queryVideos/, 'post', api.queryVideos)
//拦截新闻二级页面接口请求
Mock.mock(/\/queryWorkDynamics/, 'post', api.queryWorkDynamics)
Mock.mock(/\/queryNoticeList/, 'post', api.queryNoticeList)
Mock.mock(/\/queryIndustryInfos/, 'post', api.queryIndustryInfos)
Mock.mock(/\/queryPoliticalAndRegulations/, 'post', api.queryPoliticalAndRegulations)
Mock.mock(/\/queryTrainingAndDemeanor/, 'post', api.queryTrainingAndDemeanor)
Mock.mock(/\/queryLatestNews/, 'post', api.queryLatestNews)
Mock.mock(/\/queryNewsDetail/, 'post', api.queryNewsDetail)
Mock.mock(/\/queryNewsListByCategory/, 'post', api.queryNewsListByCategory)
//用户模块
Mock.mock(/\/login$/, 'post', api.login)

