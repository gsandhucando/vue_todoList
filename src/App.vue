<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <form v-on:submit='onSubmit'>
    <input type="text" v-on:change='onChange' />
    <button type="submit">Add todo</button>
    </form>
    <p>{{todoValue}}</p>
    <Todo v-for="todo in todoList" v-bind:key="todo" v-bind:todo="todo"></Todo>
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="mobileState"></HelloWorld>
    <p v-else>Not mobile</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todos/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo,
    HelloWorld
  },
  data() {
    return {
    todoValue: '',
    todoList: [],
    mobileState: false
    }
  },
  methods: {
    onChange(event){
      this.todoValue = event.target.value
      // console.log(event.target.value)
    },
    onSubmit(event){
      event.preventDefault()
      this.todoList.push(this.todoValue)
    }
  },
  mounted(){
    window.addEventListener('resize', ()=> {
      console.log(window.innerWidth)
      if (600 > window.innerWidth) {
        this.mobileState = true
      } else {
        this.mobileState = false
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
