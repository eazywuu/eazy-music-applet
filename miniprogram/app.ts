// app.ts
import { getToken } from './utils/auth'

App<IAppOption>({
    globalData: {},
    onLaunch(): void {
        if (!getToken()) {
            wx.navigateTo({
                url: '/pages/login/index'
            })
        }
    },
}); 
