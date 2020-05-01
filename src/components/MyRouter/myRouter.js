let Vue;

class VueRouter {
    constructor(options) {
        // 1.保存配置信息
        this.$options = options
        // 2.借vue动态数据 改变页面
        this.app = new Vue({
            data: {
                current: '/'
            },
        })
        // 3.创建map映射
        this.routerMap = {}
        this.createRouteMap(this.$options)

        // 4.创建router-view和router-link
        this.initComponents()
    }
    // 绑定hashchange事件
    init() {
        this.bindEvents()
    }
    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('reload', this.onHashChange.bind(this))
    }
    onHashChange() {
        this.app.current = window.location.hash.slice(1)||'/'
    }
    createRouteMap(options) {

        options.routes.forEach(item => {
            this.routerMap[item.path] = item
        })
    }
    initComponents() {
        Vue.component('router-link', {
            props: { to: String },
            render(h) {
                return h('a', { attrs: { href: `#${this.to}` } }, this.$slots.default)
            }
        }
        )

        Vue.component('router-view', {
            render: h => {
                const COMP = this.routerMap[this.app.current].component
                return h(COMP)
            }
        }
        )
    }
}
VueRouter.install = function (_vue) {
    // 实现install方法成为插件 vue会传入一个实例进来
    Vue = _vue
    // 混入实现 this.$router...
    Vue.mixin({
        beforeCreate() {
            // 只在跟vue中初始化 vuerouter
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
                this.$options.router.init()
            }
        },
    })
}

export default VueRouter