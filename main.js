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
  }
}).mount('#app')