import Mock from 'mockjs'
import api from './home'
Mock.setup({
    timeout: '500'
})
// 拦截首页接口请求
Mock.mock(/\/queryPoster/, 'post', api.queryPoster)
Mock.mock(/\/queryNews$/, 'post', api.queryNews)
Mock.mock(/\/queryLessons/, 'post', api.queryLessons)
Mock.mock(/\/home\/queryTeachers$/, 'post', api.queryTeachers)
Mock.mock(/\/queryCompany/, 'post', api.queryCompany)
Mock.mock(/\/queryJobs$/, 'post', api.queryJobs)
Mock.mock(/\/queryTalents/, 'post', api.queryTalents)
Mock.mock(/\/queryFriendShips/, 'post', api.queryFriendShips)
Mock.mock(/\/queryVideos/, 'post', api.queryVideos)
Mock.mock(/\/home\/signUpOnlineAction$/, 'post', api.queryVideos)
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
Mock.mock(/\/user\/regAction$/, 'post', api.regAction$)

// 教育培训
Mock.mock(/\/queryProject/, 'post', api.queryProject)
Mock.mock(/\/queryTeacherList$/, 'post', api.queryTeachersByPage)
Mock.mock(/\/video\/queryVideoKind$/, 'post', api.queryCategory)
Mock.mock(/\/queryVideoList/, 'post', api.queryVideoByCategory)
// 教育培训
Mock.mock(/\/talent\/queryFilterOptions/, 'post', api.queryFilterOptions)
Mock.mock(/\/talent\/queryResume$/, 'post', api.queryResume)
Mock.mock(/\/personel\/invateInterViewByIds/, 'post', api.invateInterViewByIds)
Mock.mock(/\/personel\/collectResumesByIds/, 'post', api.collectResumesByIds)
Mock.mock(/\/talent\/queryResumeDetail/, 'post', api.queryResumeDetail)


// 找工作
Mock.mock(/\/position\/queryJobsByPage/, 'post', api.queryJobsByPage)
Mock.mock(/\/personel\/applyJob/, 'post', api.invateInterViewByIds)
Mock.mock(/\/personel\/collectJobs/, 'post', api.invateInterViewByIds)
Mock.mock(/\/position\/queryJobDetail/, 'post', api.queryJobDetail)

