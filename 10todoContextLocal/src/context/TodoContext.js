import {useContext,createContext} from  'react';

const TodoContext = createContext({
    todos: [
        
    ],
    addTodo: (todo) => {},
    updateTodo: (id,newtodo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}

});

const TodoContextProvider = TodoContext.Provider 

const useTodo = () => {
    return useContext(TodoContext);
}

export default TodoContext;
export {useTodo,TodoContextProvider};