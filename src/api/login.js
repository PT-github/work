import request from '@/utils/request'

export function login(username, password, type) {
    const data = {
        username,
        password,
        type
    }
    return request({
      url: '/user/login',
      method: 'post',
      data
    })
}

export function logout(username, sessionId) {
    const data = {
        username,
        sessionId
    }
    return request({
        url: '/user/logout',
        method: 'post',
        data
    })
}

export function regAction(data) {
    return request({
        url: '/user/regAction',
        method: 'post',
        data
    })
}

