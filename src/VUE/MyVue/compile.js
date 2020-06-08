class Compile {
    constructor(el, vm) {
        this.$el = document.querySelector(el)
        this.$vm = vm

        // 1.模板内容移动至片段中
        this.$fragment = this.node2Fragment(this.$el)

        // 2.编译
        this.compile(this.$fragment)

        // 3.放回
        this.$el.appendChild(this.$fragment)
    }
    node2Fragment(el) {
        // 创建片段
        const fragment = document.createDocumentFragment()
        let child
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment
    }

    compile(el) {
        const childNodes = el.childNodes
        // const vm = this.$vm
        Array.from(childNodes).forEach(node => {
            if (node.nodeType == 1) {
                // 标签元素
                // console.log('编译元素' + node.nodeName);
                this.compileElement(node)
            } else if (this.isInter(node)) {
                // console.log("插值文本" + node.textContent);
                this.compileText(node)
            }
            if (node.children && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }
    isInter(node) {
        return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    update(node, exp, dir) {
        const updator = this[dir + 'Updator']
        updator && updator(node, this.$vm[exp]) //首次替换 插值

        // 依赖收集
        new Watcher(this.$vm, exp, function (value) {
            updator && updator(node, value)
        })
    }
    textUpdator(node, value) {
        node.textContent = value
    }
    compileText(node) {
        // node.textContent = this.$vm[RegExp.$1]
        const exp = RegExp.$1
        this.update(node, exp, 'text')
    }
    compileElement(node) {
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
            // attr==>   m-text='sss'
            const key = attr.name    //m-text
            const exp = attr.value // 'ssss'
            if (key.indexOf('m-') == 0) {
                const dir = key.substring(2) //text
                //执行
                this[dir] && this[dir](node, exp)
            }
        })
    }
    text(node, exp) {
        this.update(node, exp, 'text')
    }
}