// components/musician-banner/index.ts
Component({
    /**
     * 组件的属性列表
     */
    options: {
        styleIsolation: 'isolated',// 样式隔离
    },
    properties: {
        title: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: []
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
        onClick(e: any) {
            console.log(e)
        }
    }
})
