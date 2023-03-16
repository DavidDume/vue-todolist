const { createApp } = Vue

createApp({
  data() {
    return {
      addedTodo: {
        testo: '',
        done: false
      },
      todos: [
        {
          testo: 'spesa',
          done: false,
        },
        {
          testo: 'bucato',
          done: true,
        },
        {
          testo: 'studiare',
          done: false,
        }
      ]
    }
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    addTodo() {
      const newObj = {...this.addedTodo}
      this.todos.push(newObj)
      this.addedTodo.testo = ''
    },
    changeDoneValue() {
      this.todos.done = !this.todos.done
      console.log(this.todos.done);
    }
  }
}).mount('#app')