const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Boolean! I am using VueJS! ',
            localImg: './assets/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.jpeg'
        }
    }
}).mount('#app')