import request from '@/utils/request'

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
