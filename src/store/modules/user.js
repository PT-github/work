import {login, logout} from '@/api/login'

const user = {
    state: {
        username: '',
        sessionId: '',
        tel: '',
        userId: '',
        type: '',
        account: '',
        isLogin: false
    },

    mutations: {
        SET_ISLOGIN: (state, isLogin) => {
            state.isLogin = isLogin
        },
        SET_USERTYPE: (state, type) => {
            state.type = type
        },
        SET_USERID: (state, userId) => {
            state.userId = userId
        },
        SET_TEL: (state, tel) => {
            state.tel = tel
        },
        SET_ACCOUNT: (state, account) => {
            state.account = account
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_SESSIONID: (state, sessionId) => {
            state.sessionId = sessionId
        }
    },
    actions: {
        SetLoginData({commit}, data) {
            const username = data.username || data.nickname
            const password = data.password || ''
            const type = data.type
            sessionStorage.setItem('userinfo', JSON.stringify({ username, password, type }))
            sessionStorage.setItem('isLogin', "1")
            commit('SET_ISLOGIN', "1")
            commit('SET_USERNAME', data.nickname)
            commit('SET_USERID', data.id)
            commit('SET_ACCOUNT', data.account)
            commit('SET_TEL', data.tel)
            commit('SET_USERTYPE', data.type)
            commit('SET_SESSIONID', data.sessionId || '')
        },
        // 用户登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password.trim()
            return new Promise((resolve, reject) => {
                login(username, password, userInfo.type).then(response => {
                    const data = response.data
                    sessionStorage.setItem('userinfo', JSON.stringify(data))
                    sessionStorage.setItem('isLogin', "1")
                    commit('SET_ISLOGIN', "1")
                    commit('SET_USERNAME', data.nickname)
                    commit('SET_ACCOUNT', data.account)
                    commit('SET_USERID', data.id)
                    commit('SET_TEL', data.tel)
                    commit('SET_USERTYPE', data.type)
                    commit('SET_SESSIONID', data.sessionId || '')
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.username, state.sessionId).then(() => {
                    commit('SET_USERNAME', '')
                    commit('SET_SESSIONID', '')
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
