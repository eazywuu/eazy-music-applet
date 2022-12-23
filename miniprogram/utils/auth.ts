const TOKEN_KEY = 'jwt'

const getToken = (): string => wx.getStorageSync(TOKEN_KEY)

const setToken = (token: string): void => wx.setStorageSync(TOKEN_KEY, token)

const removeToken = (): void => wx.removeStorageSync(TOKEN_KEY)

export { getToken, setToken, removeToken }