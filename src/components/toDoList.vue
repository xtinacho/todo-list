<template>
  <div>
    <h1>To Do List!</h1>
    <form>
      <input type="text" placeholder="To Do Item" v-model="newToDo">
      <button type="button" v-on:click="add()">Add</button>
    </form>
    <div>
      <h2>Things to Do:</h2>
      <ul>
        <li v-for="(ToDo, index) in ToDos" :key="index" :class="{completed: ToDo.completed}">
          <input type="checkbox" v-model="ToDo.completed">
          <span>{{ToDo.name}}</span>
        </li>
      </ul>
    </div>
    <button type="button" v-on:click="destroy()">Clear Tasks</button>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data(){
    return {
      newToDo:"",
      ToDos: []
    }
  },
  methods: {
    add() {
      this.ToDos.push({name: this.newToDo, completed: false});
      this.newToDo = "";
    },
    destroy() {
      this.ToDos = [];
    }
  },
  mounted() {
    if(localStorage.getItem('ToDos'))this.ToDos = JSON.parse(localStorage.getItem('ToDos'));
  },
  watch: {
    ToDos: {
      handler() {
        localStorage.setItem('ToDos', JSON.stringify(this.ToDos));
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 30px;
}
h2 {
  margin: 40px 0 0;
  font-size: 35px;
}
ul {
  margin: 0 auto;
  width: 30%;
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px;
  font-size: 25px;
  text-align: left;
}
</style>
