
const initialState = {
    todos:[],
};

function NewReducer ( state=initialState, action){  
    console.log(state.todos)
    switch (action.type){
        case 'ADD_TODO':
        return  {...state, todos: [...state.todos, action.payload]}



        case 'REMOVE_TODO':
            return {... state, todos: state.todos.filter(todo => todo.id !==action.payload)}
        default: return state;
   
    }

}
export default NewReducer
