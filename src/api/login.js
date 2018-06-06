import request from '@/utils/request'

export function login(username, password) {
    const data = {
        username,
        password
    }
    return request({
        url: '/login',
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
        url: '/login',
        method: 'post',
        data
    })
}

