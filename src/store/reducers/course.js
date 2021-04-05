const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
        id: 1, title :'Iniciando com React', lessons: [
            { id : 1, title: 'Teste 1'},
            { id : 2, title: 'Teste 2'},
        ],
    },
    {
        id: 2, title :'Aprendendo Redux', lessons: [
            { id : 3, title: 'Teste 3'},
            { id : 4, title: 'Teste 4'},
        ],  
    }
]
}

export default function course (state = INITIAL_STATE, action){
if (action.type === 'TOGGLE_LESSON') {
  return {...state, 
    activeLesson: action.lesson, 
    activeModule: action.module
  };
}

return state;
}