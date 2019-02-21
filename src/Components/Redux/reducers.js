import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(p => p.id !== action.id),
      };
    case 'ADD_TODO':
      return {
        ...state,

        todos: [
          ...state.todos,
          { id: action.counter, title: action.title, resolved: false },
        ],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.id ? { ...item, title: action.value } : item
        ),
      };
    case 'RESOLVE_TODO':
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.id ? { ...item, resolved: !item.resolved } : item
        ),
      };
    default:
      return state;
  }
};

export default reducer;
