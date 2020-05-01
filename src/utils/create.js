import Vue from 'vue'
export default function create(Component, props) {
    const vm = new Vue({
        render(h) {
            return h(Component, { props })
        }
    }).$mount()
    // 将这个Compnent挂载到body上
    const comp = vm.$children[0]
    document.body.appendChild(vm.$el)

    // 清理这个node
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}
