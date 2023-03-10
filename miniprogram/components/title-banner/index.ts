// components/title-banner/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 标题
        title: {
            type: String,
            value: '默认'
        },
        // 右侧标签
        moreLabel: {
            type: String,
            value: '更多'
        },
        // 隐藏右侧标签
        hideMore: {
            type: Boolean,
            value: false
        },
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

    }
})
