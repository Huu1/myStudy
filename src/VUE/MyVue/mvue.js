
class mVue {
    constructor(options) {
        // 接收配置信息
        this.$options = options
        // 保存data  做响应式处理
        this.$data = options.data

        this.observer(this.$data)
        // new Watcher(this,'b')
        // this.b
        // new Watcher(this,'c.c1')
        // this.c.c1
        new Compile(options.el, this)

        if (options.created) {
            options.created.call(this)
        }
    }
    observer(data) {
        // 不满足条件 退出
        if (!data || typeof data !== 'object') return
        Object.keys(data).forEach(key => {
            // 拦截处理
            this.definerReactive(data, key, data[key])
            // 代理  this.$data.data==> this.data
            this.proxyData(key)
        })
    }
    definerReactive(data, key, val) {
        // 递归遍历 如 data：{a:"1"，b：{b1：'s'}}
        this.observer(val)

        const dep = new Dep()

        // data里的每个key都拦截
        Object.defineProperty(data, key, {
            get() {
                // 依赖收集  Dep.target就是一个watcher
                Dep.target && dep.addDep(Dep.target)
                return val
            },
            set(newVal) {
                if (newVal !== val) {
                    val = newVal
                    // console.log(key + '更新了');
                    dep.notify()
                }
            }
        })
    }
    proxyData(key) {
        Object.defineProperty(this, key, {
            set(newVal) {
                this.$data[key] = newVal
            },
            get() {
                return this.$data[key]
            }
        })
    }
}

class Dep {
    constructor() {
        this.watchers = []
    }
    addDep(watcher) {
        this.watchers.push(watcher)
    }
    notify() {
        this.watchers.forEach(watcher => watcher.update())
    }
}
// 这个watcher是保存 data和页面中插值关系
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm
        this.key = key
        this.cb = cb

        Dep.target = this
        this.vm[this.key]  //读一下 触发依赖收集
        Dep.target = null
    }
    update() {
        // console.log(this.key + '变了');
        this.cb.call(this.vm, this.vm[this.key])
    }
}