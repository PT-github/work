import {login, logout} from '@/api/login'

const user = {
    state: {
        username: '',
        sessionId: ''
    },

    mutations: {
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
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    commit('SET_USERNAME', userInfo.username)
                    commit('SET_SESSIONID', data.data.sessionId)
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
