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

export function logout(account) {
    return request({
        url: '/user/logout',
        method: 'post',
        params: {account}
    })
}

export function regAction(data) {
    return request({
        url: '/user/regAction',
        method: 'post',
        data
    })
}

