import {login, logout} from '@/api/login'
let userInfo = localStorage.getItem('userInfo') || ''
if (!!userInfo) {
    userInfo = JSON.parse(userInfo)
}
const user = {
    state: {
        id: userInfo ? userInfo.id : '',
        nickname: userInfo ? userInfo.nickname : '',
        account: userInfo ? userInfo.account : '',
        tel: userInfo ? userInfo.tel : '',
        type: userInfo ? userInfo.type : '',
        isLogin: userInfo ? true : false,
        count: false
    },

    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.id = userInfo.id
            state.nickname = userInfo.nickname
            state.account = userInfo.account
            state.tel = userInfo.tel
            state.type = userInfo.type
        },
        SET_ISLOGIN: (state, isLogin) => {
            state.isLogin = isLogin
        },
        SET_COUNT: (state, count) => {
            state.count = count
        }
    },
    actions: {
        SetLoginData({commit}, data) {
            localStorage.setItem('userInfo', JSON.stringify(data))
            commit('SET_USERINFO', data)
            commit('SET_ISLOGIN', true)
        },
        setCount({commit}, count) {
            commit('SET_COUNT', count)
        },
        // 用户登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password.trim()
            return new Promise((resolve, reject) => {
                login(username, password, userInfo.type).then(response => {
                    const data = response.data
                    localStorage.setItem('userInfo', JSON.stringify(data))
                    commit('SET_USERINFO', data)
                    commit('SET_ISLOGIN', true)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.account).then(() => {
                    commit('SET_USERINFO', {})
                    commit('SET_ISLOGIN', false)
                    localStorage.clear()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
