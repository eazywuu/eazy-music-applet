// components/album-card/index.ts
Component({
    /**
     * 组件的属性列表
     */
    options: {
        styleIsolation: 'isolated',// 样式隔离
    },
    properties: {
        item: {
            type: Object,
            value: () => null
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTab() {
            const id = this.properties.item.id
            wx.navigateTo({
                url: `/pages/playlist/details?id=${id}`
            })
        }
    }
})
