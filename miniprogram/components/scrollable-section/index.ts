// components/scrollable-section/index.ts
Component({
    /**
     * 组件的属性列表
     */
    options: {
        styleIsolation: 'isolated',// 样式隔离
    },
    properties: {
        // 滑块项数
        itemCount: {
            type: Number,
            value: 3
        },
        // 滑块项宽度，用于计算scroll-view总宽度
        itemWidth: {
            type: Number,
            value: 290
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

    }
})
