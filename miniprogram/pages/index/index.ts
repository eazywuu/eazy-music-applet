// pages/index/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 类别
        categoryBannerList: [
            {
                image: '../../images/recommend-playlist.png'
            },
            {
                image: '../../images/recommend-playlist.png'
            },
            {
                image: '../../images/recommend-playlist.png'
            }
        ],
        // 音乐人
        musicianBannerList: [
            {
                id: 111,
                name: 'Rihanna',
                category: '流行音乐',
                photo: '../../images/musician-photo.png'
            },
            {
                id: 222,
                name: 'Rihanna',
                category: '流行音乐',
                photo: '../../images/musician-photo.png'
            },
            {
                id: 333,
                name: 'Rihanna',
                category: '流行音乐',
                photo: '../../images/musician-photo.png'
            }
        ],
        // 歌单
        playlist: [
            {
                id: 111,
                title: '黄昏将至| 蓝调R&B奏响日落橘海',
                description: '歌单描述',
                image: '../../images/album.png'
            },
            {
                id: 222,
                title: '黄昏将至| 蓝调R&B奏响日落橘海',
                description: '歌单描述',
                image: '../../images/album.png'
            },
            {
                id: 333,
                title: '黄昏将至| 蓝调R&B奏响日落橘海',
                description: '歌单描述',
                image: '../../images/album.png'
            }
        ],
        // 专辑
        albumBannerList: [
            {
                id: 111,
                title: '《黑色柳丁》',
                musician: '陶喆',
                description: '歌单描述',
                image: '../../images/album.png'
            },
            {
                id: 222,
                title: '《黑色柳丁》',
                musician: '陶喆',
                description: '歌单描述',
                image: '../../images/album.png'
            },
            {
                id: 333,
                title: '《黑色柳丁》',
                musician: '陶喆',
                description: '歌单描述',
                image: '../../images/album.png'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})