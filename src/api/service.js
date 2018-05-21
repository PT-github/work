import request from '@/utils/request'

// 首页左右滑动区域=>获取广告列表
export function queryPoster() {
  return request({
    url: '/queryPoster',
    method: 'post'
  })
}
