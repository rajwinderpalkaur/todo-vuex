import axios from 'axios'

const state  = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const actions = {
  async getTodos({ commit }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(res.data);
    commit('setTodos', res.data)
  },
  async addTodo({ commit }, title) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title,
      completed: false
    })
    commit('newTodo', res.data)
  }
}

const mutations ={
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => (state.todos.unshift(todo))
}

export default {
  state,
  getters,
  actions,
  mutations
}