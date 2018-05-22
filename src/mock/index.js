import Mock from 'mockjs'
import api from './home'
Mock.setup({
    timeout: '3000'
})
// 测试Mock 接口请求
Mock.mock(/\/queryPoster/, 'post', api.queryPoster)
Mock.mock(/\/queryNews/, 'post', api.queryNews)
Mock.mock(/\/queryLessons/, 'post', api.queryLessons)
Mock.mock(/\/queryTeachers/, 'post', api.queryTeachers)
Mock.mock(/\/queryCompany/, 'post', api.queryCompany)
Mock.mock(/\/queryJobs/, 'post', api.queryJobs)
Mock.mock(/\/queryTalents/, 'post', api.queryTalents)
Mock.mock(/\/queryFriendShips/, 'post', api.queryFriendShips)
