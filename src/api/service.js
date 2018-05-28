import request from '@/utils/request'
// =======================首页开始=========================
// 首页左右滑动区域=>获取广告列表
export function queryPoster() {
  return request({
    url: '/queryPoster',
    method: 'post'
  })
}
// 首页新闻列表
export function queryNews() {
  return request({
    url: '/queryNews',
    method: 'post'
  })
}
// 首页课程列表
export function queryLessons() {
  return request({
    url: '/queryLessons',
    method: 'post'
  })
}
// 首页导师列表
export function queryTeachers() {
  return request({
    url: '/queryTeachers',
    method: 'post'
  })
}
// 首页热门招聘单位列表
export function queryCompany() {
  return request({
    url: '/queryCompany',
    method: 'post'
  })
}
// 首页职位列表
export function queryJobs() {
  return request({
    url: '/queryJobs',
    method: 'post'
  })
}
// 首页人才列表
export function queryTalents() {
  return request({
    url: '/queryTalents',
    method: 'post'
  })
}

// 首页友情链接列表
export function queryFriendShips() {
	return request({
		url: '/queryFriendShips',
		method: 'post'
	})
}

// 首页视频列表
export function queryVideos() {
	return request({
		url: '/queryVideos',
		method: 'post'
	})
}

// =======================首页结束=========================


// =======================新闻二级页面开始=========================
// 工作动态列表
export function queryWorkDynamics() {
    return request({
        url: '/queryWorkDynamics',
        method: 'post'
    })
}
// 通知列表
export function queryNoticeList() {
    return request({
        url: '/queryNoticeList',
        method: 'post'
    })
}
// 行业资讯列表
export function queryIndustryInfos() {
    return request({
        url: '/queryIndustryInfos',
        method: 'post'
    })
}
// 政法政规列表
export function queryPoliticalAndRegulations() {
    return request({
        url: '/queryPoliticalAndRegulations',
        method: 'post'
    })
}
// 培训风采列表
export function queryTrainingAndDemeanor(data) {
    return request({
        url: '/queryTrainingAndDemeanor',
        method: 'post',
        data: data
    })
}
// 最新新闻-滚图列表
export function queryLatestNews() {
    return request({
        url: '/queryLatestNews',
        method: 'post'
    })
}
// 新闻详情列表
export function queryNewsDetail(params) {
    return request({
        url: '/queryNewsDetail',
        method: 'post',
        params: params
    })
}
// 分类新闻列表
export function queryNewsListByCategory(data) {
    return request({
        url: '/queryNewsListByCategory',
        method: 'post',
        data: data
    })
}
// =======================新闻二级页面结束=========================