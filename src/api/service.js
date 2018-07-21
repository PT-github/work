import request from '@/utils/request'

//====================企业信息查询开始===================

// 企业基本查询
export function queryCompanyMessage(id) {
    return request({
        url: '/company/queryCompanyMessage',
        method: 'post',
        params: {id}
    })
}

// 留言
export function leaveMessgage(data) {
    return request({
        url: '/user/leaveMessgage',
        method: 'post',
        data
    })
}

// 我的基本信息
export function queryMyBaseInfo(data) {
    return request({
        url: '/user/queryMyBaseInfo',
        method: 'post',
        data
    })
}

// 我的收益
export function queryIncome(data) {
    return request({
        url: '/user/queryIncome',
        method: 'post',
        data
    })
}

// 我的所有收益列表
export function queryAllIncomeList(data) {
    return request({
        url: '/user/queryAllIncomeList',
        method: 'post',
        data
    })
}

// 我的本季度收益列表
export function queryQuarterIncome(data) {
    return request({
        url: '/user/queryQuarterIncome',
        method: 'post',
        data
    })
}

// 我的积分
export function queryScore(data) {
    return request({
        url: '/user/queryScore',
        method: 'post',
        data
    })
}

// 职位收藏夹
export function queryCollectJobs(data) {
    return request({
        url: '/user/queryCollectJobs',
        method: 'post',
        data
    })
}

// 职位申请记录
export function queryJobApplyRecods(data) {
    return request({
        url: '/user/queryJobApplyRecods',
        method: 'post',
        data
    })
}

// 我的面试机会
export function queryInvitedChance(data) {
    return request({
        url: '/user/queryInvitedChance',
        method: 'post',
        data
    })
}

// 简历被查看记录
export function queryLookedRecords(data) {
    return request({
        url: '/user/queryLookedRecords',
        method: 'post',
        data
    })
}

// 企业密码修改
export function modifyCompanyPassword(data) {
    return request({
        url: '/company/modifyCompanyPassword',
        method: 'post',
        data
    })
}

// 企业职位列表
export function queryPubJobs(data) {
    return request({
        url: '/company/queryPubJobs',
        method: 'post',
        data
    })
}

// 刷新职位
export function refreshCompanyJob(data) {
    return request({
        url: '/company/refreshCompanyJob',
        method: 'post',
        data
    })
}

// 发布职位
export function publishCompanyJob(data) {
    return request({
        url: '/company/publishCompanyJob',
        method: 'post',
        data
    })
}

// 撤回职位
export function revokeCompanyJob(data) {
    return request({
        url: '/company/revokeCompanyJob',
        method: 'post',
        data
    })
}

// 删除职位
export function deleteCompanyJob(data) {
    return request({
        url: '/company/deleteCompanyJob',
        method: 'post',
        data
    })
}

// 新增职位
export function addCompanyJob(data) {
    return request({
        url: '/company/addCompanyJob',
        method: 'post',
        data
    })
}

// 面试邀请列表
export function queryInterviewList(data) {
    return request({
        url: '/company/queryInterviewList',
        method: 'post',
        data
    })
}

// 删除面试邀请
export function deleteInterviewById(id) {
    return request({
        url: '/company/deleteInterviewById',
        method: 'post',
        params: {id}
    })
}

// 收藏记录
export function queryCollectList(data) {
    return request({
        url: '/company/queryCollectList',
        method: 'post',
        data
    })
}

// 应聘记录
export function queryApplyRecordList(data) {
    return request({
        url: '/company/queryApplyRecordList',
        method: 'post',
        data
    })
}

// 自有人才库
export function queryOwnTalentList(data) {
    return request({
        url: '/company/queryOwnTalentList',
        method: 'post',
        data
    })
}

// 网站人才库
export function queryNetWorkTalentList(data) {
    return request({
        url: '/company/queryNetWorkTalentList',
        method: 'post',
        data
    })
}

// 删除面试邀请
export function deleteCollectById(id) {
    return request({
        url: '/company/deleteCollectById',
        method: 'post',
        params: {id}
    })
}

// 删除应聘记录
export function deleteApplyRecordList(id) {
    return request({
        url: '/company/deleteApplyRecordList',
        method: 'post',
        params: {id}
    })
}

// 删除自有人才库
export function deleteOwnTalentList(id) {
    return request({
        url: '/company/deleteOwnTalentList',
        method: 'post',
        params: {id}
    })
}

// 删除网站人才库
export function deleteNetWorkTalentList(id) {
    return request({
        url: '/company/deleteNetWorkTalentList',
        method: 'post',
        params: {id}
    })
}

//====================企业信息查询结束===================

// =======================首页开始=========================

// 证书查询
export function queryCerti(data) {
    return request({
        url: '/home/queryCertificate',
        method: 'post',
        data
    })
}

// 首页左右滑动区域=>获取广告列表
export function queryPoster() {
    return request({
        url: '/home/queryPoster',
        method: 'post'
    })
}

// 首页新闻列表
export function queryNews() {
    return request({
        url: '/home/queryNews',
        method: 'post'
    })
}

// 首页课程列表
export function queryLessons() {
    return request({
        url: '/home/queryLessons',
        method: 'post'
    })
}

// 积分兑换的课程列表
export function queryScoreLessons() {
    return request({
        url: '/home/queryScoreLessons',
        method: 'post'
    })
}

// 积分兑换课程
export function exchangeLesson(data) {
    return request({
        url: '/home/exchangeLesson',
        method: 'post',
        data
    })
}

// 我的简历
export function queryMyResume(data) {
    return request({
        url: '/member/queryMyResume',
        method: 'post',
        data
    })
}
// 刷新简历
export function refreshMyResume(data) {
    return request({
        url: '/member/refreshMyResume',
        method: 'post',
        data
    })
}
// 刷新简历
export function editResumeSubmit(data) {
    return request({
        url: '/member/editResumeSubmit',
        method: 'post',
        data
    })
}
// 删除简历
export function deleteMyResume(data) {
    return request({
        url: '/member/deleteMyResume',
        method: 'post',
        data
    })
}

// 首页导师列表
export function queryTeachers() {
    return request({
        url: '/home/queryTeachers',
        method: 'post'
    })
}

// 首页热门招聘单位列表
export function queryCompany() {
    return request({
        url: '/home/queryJobs',
        method: 'post'
    })
}

// 首页职位列表
export function queryJobs() {
    return request({
        url: '/home/queryCompany',
        method: 'post'
    })
}

// 首页人才列表
export function queryTalents() {
    return request({
        url: '/home/queryTalents',
        method: 'post'
    })
}

// 首页友情链接列表
export function queryFriendShips() {
    return request({
        url: '/home/queryFriendShips',
        method: 'post'
    })
}

// 首页视频列表
export function queryVideos() {
    return request({
        url: '/home/queryVideos',
        method: 'post'
    })
}

// =======================首页结束=========================


// =======================新闻二级页面开始=========================
// 工作动态列表
export function queryWorkDynamics() {
    return request({
        url: '/news/queryWorkDynamics',
        method: 'post'
    })
}

// 通知列表
export function queryNoticeList() {
    return request({
        url: '/news/queryNoticeList',
        method: 'post'
    })
}

// 行业资讯列表
export function queryIndustryInfos() {
    return request({
        url: '/news/queryIndustryInfos',
        method: 'post'
    })
}

// 政法政规列表
export function queryPoliticalAndRegulations() {
    return request({
        url: '/news/queryPoliticalAndRegulations',
        method: 'post'
    })
}

// 培训风采列表
export function queryTrainingAndDemeanor(data) {
    return request({
        url: '/news/queryTrainingAndDemeanor',
        method: 'post',
        data: data
    })
}

// 最新新闻-滚图列表
export function queryLatestNews() {
    return request({
        url: '/news/queryLatestNews',
        method: 'post'
    })
}

// 新闻详情列表
export function queryNewsDetail(params) {
    return request({
        url: '/news/queryNewsDetail',
        method: 'post',
        data: params
    })
}

// 分类新闻列表
export function queryNewsListByCategory(data) {
    return request({
        url: '/news/queryNewsListByCategory',
        method: 'post',
        data: data
    })
}

// =======================新闻二级页面结束=========================


// =======================教育培新页面开始=========================
// 培训项目列表
export function queryProject() {
    return request({
        url: '/train/queryTrainList',
        method: 'post'
    })
}

// 培训项目列表
export function queryTeachersByPage(data) {
    return request({
        url: '/teacher/queryTeacherList',
        method: 'post',
        data: data
    })
}

export function queryCategory() {
    return request({
        url: '/video/queryVideoKind',
        method: 'post'
    })
}

export function signUpOnlineAction(data) {
    return request({
        url: '/home/signUpOnlineAction',
        method: 'post',
        data
    })
}

export function queryCategory1() {
    return request({
        url: '/video/queryCategory',
        method: 'post'
    })
}

// 获取分类列表
// 通过分类获取视频列表
export function queryVideoByCategory(params) {
    return request({
        url: '/video/queryVideoList',
        method: 'post',
        data: params
    })
}
// 查询消息数
export function queryCounts(id) {
    return request({
        url: '/home/queryCounts',
        method: 'post',
        params: {userId: id}
    })
}
// 查询消息列表
export function searchMail(id) {
    return request({
        url: '/home/searchMail',
        method: 'post',
        params: {userId: id}
    })
}
// 通过分类获取视频列表
export function searchByKeywords(keywords) {
    return request({
        url: '/home/searchByKeywords',
        method: 'post',
        params: {
            keywords: keywords
        }
    })
}

// 通过分类获取视频列表
export function queryVideoByCategory1(params) {
    return request({
        url: '/video/queryVideoByCategory',
        method: 'post',
        data: params
    })
}

// =======================教育培新页面结束=========================


// =======================招揽人才开始=========================
// 获取过滤条件
export function queryFilterOptions(data) {
    return request({
        url: '/talent/queryFilterOptions',
        method: 'post',
        data
    })
}

// 获取简历
export function queryResume(data) {
    return request({
        url: '/talent/queryResume',
        method: 'post',
        data
    })
}

// 邀约面试
export function invateInterViewByIds(data) {
    return request({
        url: '/talent/invateInterViewByIds',
        method: 'post',
        data
    })
}

// 简历收藏
export function collectResumesByIds(data) {
    return request({
        url: '/talent/collectResumesByIds',
        method: 'post',
        data
    })
}

// 简历详情
export function queryResumeDetail(params) {
    return request({
        url: '/talent/queryResumeDetail',
        method: 'post',
        data: params
    })

}

// =======================招揽人才结束=========================


// =======================找工作开始=========================
// 分页获取工作
export function queryJobsByPage(data) {
    return request({
        url: '/position/queryJobsByPage',
        method: 'post',
        data
    })
}

// 职位申请
export function applyJob(data) {
    return request({
        url: '/position/applyJob',
        method: 'post',
        data
    })
}

// 职位收藏夹删除
export function deleteCollectJobs(data) {
    return request({
        url: '/user/deleteCollectJobs',
        method: 'post',
        data
    })
}

// 职位申请记录删除
export function deleteJobApplyRecods(data) {
    return request({
        url: '/user/deleteJobApplyRecods',
        method: 'post',
        data
    })
}

// 我的面试机会删除
export function deleteInvitedChance(data) {
    return request({
        url: '/user/deleteInvitedChance',
        method: 'post',
        data
    })
}

// 删除简历被查看记录
export function deleteLookedRecords(data) {
    return request({
        url: '/user/deleteLookedRecords',
        method: 'post',
        data
    })
}

// 我的订单
export function queryMyOrder(data) {
    return request({
        url: '/user/queryMyOrder',
        method: 'post',
        data
    })
}

// 订单删除
export function deleteOrder(data) {
    return request({
        url: '/user/deleteOrder',
        method: 'post',
        data
    })
}

// 职位收藏
export function collectJobs(data) {
    return request({
        url: '/position/collectJobs',
        method: 'post',
        data
    })
}

// 职位详情
export function queryJobDetail(data) {
    return request({
        url: '/position/queryJobDetail',
        method: 'post',
        data
    })
}

// 课程详情
export function queryLessonDetail(data) {
    return request({
        url: '/education/queryLessonDetail',
        method: 'post',
        data
    })
}

// 培训项目详情
export function queryProjectDetail(data) {
    return request({
        url: '/education/queryProjectDetail',
        method: 'post',
        data
    })
}

// =======================找工作结束=========================
