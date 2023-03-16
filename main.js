const { createApp } = Vue

createApp({
  data() {
    return {
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
    }
  }
}).mount('#app')