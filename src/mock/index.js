import Mock from 'mockjs'
import testAPI from './test'

// 测试Mock 接口请求
Mock.mock(/\/getList/, 'post', testAPI.getList)
