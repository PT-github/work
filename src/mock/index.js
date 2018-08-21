import Mock from 'mockjs'
import api from './home'
Mock.setup({
    timeout: '500'
})
// 企业
Mock.mock(/\/company\/queryCompanyMessage/, 'post', api.queryCompanyMessage)
Mock.mock(/\/company\/modifyCompanyPassword$/, 'post', api.queryCompanyMessage)
Mock.mock(/\/login\/position\/queryPubJobs$/, 'post', api.queryPubJobs)
Mock.mock(/\/company\/refreshCompanyJob$/, 'post', api.queryPubJobs)
Mock.mock(/\/company\/publishCompanyJob/, 'post', api.queryPubJobs)
Mock.mock(/\/company\/revokeCompanyJob/, 'post', api.queryPubJobs)
Mock.mock(/\/company\/deleteCompanyJob/, 'post', api.queryPubJobs)
Mock.mock(/\/company\/addCompanyJob/, 'post', api.queryPubJobs)
Mock.mock(/\/login\/vitae\/queryCollectList/, 'post', api.queryCollectList)
Mock.mock(/\/login\/interview\/queryInterviewList/, 'post', api.queryInterviewList)
Mock.mock(/\/company\/deleteCollectById/, 'post', api.queryInterviewList)
Mock.mock(/\/company\/deleteInterviewById/, 'post', api.queryInterviewList)
Mock.mock(/\/positionapply\/queryApplyRecordList/, 'post', api.queryApplyRecordList)
Mock.mock(/\/talent\/queryOwnTalentList/, 'post', api.queryOwnTalentList)
Mock.mock(/\/talent\/queryNetWorkTalentList/, 'post', api.queryNetWorkTalentList)
Mock.mock(/\/company\/deleteApplyRecordList/, 'post', api.queryNetWorkTalentList)
Mock.mock(/\/company\/deleteOwnTalentList/, 'post', api.queryNetWorkTalentList)
Mock.mock(/\/company\/deleteNetWorkTalentList/, 'post', api.queryNetWorkTalentList)
// 拦截首页接口请求
Mock.mock(/\/queryPoster/, 'post', api.queryPoster)
Mock.mock(/\/queryNews$/, 'post', api.queryNews)
Mock.mock(/\/queryLessons/, 'post', api.queryLessons)
Mock.mock(/\/queryScoreLessons/, 'post', api.queryScoreLessons)
Mock.mock(/\/exchangeLesson/, 'post', api.queryScoreLessons)
Mock.mock(/\/home\/queryTeachers$/, 'post', api.queryTeachers)
Mock.mock(/\/queryCompany$/, 'post', api.queryCompany)
Mock.mock(/\/queryJobs$/, 'post', api.queryJobs)
Mock.mock(/\/queryTalents/, 'post', api.queryTalents)
Mock.mock(/\/queryFriendShips/, 'post', api.queryFriendShips)
Mock.mock(/\/queryVideos/, 'post', api.queryVideos)
Mock.mock(/\/signup\/signUpOnlineAction$/, 'post', api.queryVideos)
Mock.mock(/\/cert\/queryCertificate$/, 'post', api.queryCertificate)
Mock.mock(/\/home\/searchByKeywords/, 'post', api.searchByKeywords)
Mock.mock(/\/login\/notice\/queryCounts/, 'post', api.queryCounts)
Mock.mock(/\/notice\/searchMail/, 'post', api.searchMail)
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
Mock.mock(/\/logout/, 'post', api.login)
Mock.mock(/\/user\/regAction$/, 'post', api.regAction$)
Mock.mock(/\/comments\/leaveMessgage/, 'post', api.regAction$)
Mock.mock(/\/user\/queryMyBaseInfo/, 'post', api.queryMyBaseInfo)
Mock.mock(/\/income\/queryIncome/, 'post', api.queryIncome)
Mock.mock(/\/income\/queryAllIncomeList/, 'post', api.queryAllIncomeList)
Mock.mock(/\/income\/queryQuarterIncome/, 'post', api.queryQuarterIncome)
Mock.mock(/\/score\/queryScore/, 'post', api.queryScore)
Mock.mock(/\/position\/queryCollectJobs/, 'post', api.queryCollectJobs)
Mock.mock(/\/positionapply\/queryJobApplyRecods/, 'post', api.queryCollectJobs)
Mock.mock(/\/interview\/queryInvitedChance/, 'post', api.queryCollectJobs)
Mock.mock(/\/vitae\/queryLookedRecords/, 'post', api.queryLookedRecords)
Mock.mock(/\/user\/deleteCollectJobs/, 'post', api.queryCollectJobs)
Mock.mock(/\/user\/deleteJobApplyRecods/, 'post', api.queryCollectJobs)
Mock.mock(/\/user\/deleteInvitedChance/, 'post', api.queryCollectJobs)
Mock.mock(/\/user\/deleteLookedRecords/, 'post', api.queryCollectJobs)
Mock.mock(/\/order\/queryMyOrder/, 'post', api.queryMyOrder)
Mock.mock(/\/user\/deleteOrder/, 'post', api.queryMyOrder)

// 教育培训
Mock.mock(/\/train\/queryTrainList/, 'post', api.queryProject)
Mock.mock(/\/queryTeacherList$/, 'post', api.queryTeachersByPage)
Mock.mock(/\/video\/queryCategory$/, 'post', api.queryCategory)
Mock.mock(/\/queryVideoByCategory/, 'post', api.queryVideoByCategory)
// 教育培训
Mock.mock(/\/talent\/queryFilterOptions/, 'post', api.queryFilterOptions)
Mock.mock(/\/talent\/queryResume$/, 'post', api.queryResume)
Mock.mock(/\/talent\/invateInterViewByIds/, 'post', api.invateInterViewByIds)
Mock.mock(/\/talent\/collectResumesByIds/, 'post', api.collectResumesByIds)
Mock.mock(/\/talent\/queryResumeDetail/, 'post', api.queryResumeDetail)
Mock.mock(/\/education\/queryLessonDetail/, 'post', api.queryLessonDetail)
Mock.mock(/\/education\/queryProjectDetail/, 'post', api.queryProjectDetail)


// 找工作
Mock.mock(/\/position\/queryFilterOptions/, 'post', api.queryFilterOptions)
Mock.mock(/\/position\/queryJobsByPage/, 'post', api.queryJobsByPage)
Mock.mock(/\/position\/applyJob/, 'post', api.invateInterViewByIds)
Mock.mock(/\/position\/collectJobs/, 'post', api.invateInterViewByIds)
Mock.mock(/\/position\/queryJobDetail/, 'post', api.queryJobDetail)
Mock.mock(/\/vitae\/queryMyResume/, 'post', api.queryMyResume)
Mock.mock(/\/vitae\/refreshMyResume/, 'post', api.queryMyResume)
Mock.mock(/\/vitae\/deleteMyResume/, 'post', api.queryMyResume)
Mock.mock(/\/member\/editResumeSubmit/, 'post', api.queryMyResume)

