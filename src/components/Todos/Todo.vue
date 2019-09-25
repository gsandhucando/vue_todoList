<template>
  <div class="todo-container">
    <p>{{todo}}</p>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: String
  }
}
</script>

<style scoped>
.todo-container{

}
div{
  background: red;
  height: 200px;
  width: 200px;
  display: flex;
}
</style>