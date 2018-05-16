import request from '@/utils/request'

export function getList(id, num) {
  const data = {
    id,
    num
  }
  return request({
    url: '/getList',
    method: 'post',
    data
  })
}


