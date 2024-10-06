
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export function addTodo ({text, id}) {
   return { type: ADD_TODO, payload: {text, id:Date.now()} }
  }
 
 export function removeTodo (id) {
   return { type: ADD_TODO, payload: id }
 }
