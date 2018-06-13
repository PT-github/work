import {login, logout} from '@/api/login'

const user = {
    state: {
        username: '',
        sessionId: '',
        userId: '',
        type: '',
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
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_SESSIONID: (state, sessionId) => {
            state.sessionId = sessionId
        }
    },
    actions: {
        // 用户登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password.trim()
            return new Promise((resolve, reject) => {
                login(username, password, userInfo.type).then(response => {
                    const data = response.data
                    sessionStorage.setItem('userinfo', JSON.stringify(data))
                    sessionStorage.setItem('isLogin', true)
                    commit('SET_ISLOGIN', true)
                    commit('SET_USERNAME', data.nickname)
                    commit('SET_USERID', data.id)
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
