import request from '@/utils/request'

export function login(username, password, type) {
    const data = {
        username,
        password,
        type
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

