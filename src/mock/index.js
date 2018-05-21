import Mock from 'mockjs'
import api from './test'

// 测试Mock 接口请求
Mock.mock(/\/queryPoster/, 'post', api.queryPoster)
