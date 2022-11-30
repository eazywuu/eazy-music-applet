const baseURL = 'https://eazy-music-20274-6-1308820868.sh.run.tcloudbase.com'

export const get = (uri: string) => {
    wx.showLoading({
        title: '加载中'
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseURL + uri,
            method: 'GET',
            success: (res) => {
                resolve(res.data)
            },
            fail: reject,
            complete: () => {
                wx.hideLoading()
            }
        })
    })
}