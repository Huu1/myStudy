let Vue;

function install(_vue) {
    Vue = _vue
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        },
    })
}
class Store {
    constructor(options = {}) {
        this.state = new Vue({
            data: options.state
        })
        this.mutations = options.mutations || {}

        this.actions = options.actions || {}

        options.getters && this.handlerGetters(options.getters)
    }
    commit = (type, val) => {
        const _function = this.mutations[type]
        _function(this.state, val)
    }
    dispatch = (type, val) => {
        const _function = this.actions[type]
        return _function({ commit: this.commit, state: this.state }, val)
    }
    handlerGetters(getters) {
        this.getters = {}
        Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key](this.state)
                }
            })
        })
    }
}
export default { Store, install }

