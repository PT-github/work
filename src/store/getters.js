const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    introduction: state => state.user.introduction,
    status: state => state.user.status,
    roles: state => state.user.roles,
    setting: state => state.user.setting,
    isLogin: state => {
        if (!state.user.isLogin) {
            let isLogin = sessionStorage.getItem('isLogin')
            if (isLogin) {
                state.user.isLogin = true
                let userInfoStr = sessionStorage.getItem('userinfo')
                if (userInfoStr) {
                    let userInfo = JSON.parse(userInfoStr)
                    state.user.username = userInfo.nickname
                    state.user.sessionId = userInfo.sessionId
                    state.user.userId = userInfo.id
                    state.user.type = userInfo.type
                }
            }
        }
        return state.user.isLogin
    }
}
export default getters
