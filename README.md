# vue 学习

### 指令
* v-model
* v-text
* v-html
* v-title

### 计算属性 
* computed
* 只执行一次，依赖改变才执行，会缓存，比methods性能好
* watch侦听写法不简洁
* 可以设置get/set方法

### 改变数组方法
* 直接改变引用
* 数组的变异api
* vm.set(vm.list, 2, 'hello')

### 改变对象方法
* 直接改变引用
* vm.set(vm.list, 'name', 'dell')

### 常见组件问题汇总
* is 属性解决模板标签的bug
* 子组件data必须是函数

### ref 获取dom节点
* ref = 'hello'
* this.refs.hello
* 组件使用ref获取到时子组件实例的应用

### 组件之间通信
* props父传子，子组件不能直接改变，得data变量接收再改变
* $emit子传父
* 总线模式（bus） Vue.prototype.bus = new Vue()  $emit/$on
* vuex

### 修饰符
* dom上@click是原生事件，组件上@click是自定义事件，或者加@click.native修饰符

### props参数校验
* props参数是数组直接传属性 
* props参数是对象可传属性的类型{content: Number}（多类型可传数组[Number, String]）
* {type: Number, required: true, default: 10, validator: (val) => val.length > 5}
* props属性可以直接使用，dom上不显示
* 非props属性不可直接使用，可显示在dom上

### 插槽
* 父组件给子组件传递dom
* 子组件需要v-html,代码多难以维护
* slot更方便实现，可以name命名，可以传默认值作用域插槽（插槽接收数据）

### 任务
* 计算器实现两个计数器的和


### vuex
* <b>触发</b> store.commit()
* <b>获取</b> store.state
* <b>获取store</b> this.$store
* <b>mutation必须是同步函数</b>
* mapState, mapMutations
* <b>payload</b> store.commit('inc', payload) => payload => {count: 10}
* <b>对象参数</b> store.commit({type: 'inc', count: 10})
* <b>使用常量参数</b> const INCREAMENT = 'INCREAMENT'
* <b>actions可以处理异步, 最好返回Promise对象</b>

