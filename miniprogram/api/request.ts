import { getToken, removeToken, setToken } from "../utils/auth"

const baseURL = 'https://eazy-music-20274-6-1308820868.sh.run.tcloudbase.com'

const get = (uri: string) => {
    wx.showLoading({
        title: '加载中'
    })
    return new Promise<any>((resolve, reject) => {
        wx.request({
            url: baseURL + uri,
            method: 'GET',
            success: (res) => {
                _checkResCode(res)
            },
            fail: reject,
            complete: () => {
                wx.hideLoading()
            }
        })
    })
}
const post = (uri: string, data: object) => {
  wx.showLoading({
      title: '加载中'
  })
  return new Promise<any>((resolve, reject) => {
      wx.request({
          url: baseURL + uri,
          method: 'POST',
          data: data,
          success: (res) => {
            _checkResCode(res)
            _tokenHandler(res.data)
              
          },
          fail: reject,
          complete: () => {
              wx.hideLoading()
          }
      })
  })
}

const _checkResCode = (res: any): void =>  {
    if (res.statusCode === 401) {
        removeToken()
        const currentPages = getCurrentPages()
        const currentRoute = currentPages[currentPages.length - 1].route
        if (currentRoute !== 'pages/login/index') {
            wx.navigateTo({
                url: `/pages/login/index`
            })
        }
        wx.showToast({
          title: '用户未登录',
          icon: 'error'
      })
    }
}

const _tokenHandler = (data: any): void => {
    const token = data || null
    if (token && getToken() !== token) {
        setToken(token)
        wx.navigateBack()
    }
    
}

export { get, post }