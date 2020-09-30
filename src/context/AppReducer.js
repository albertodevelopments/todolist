import {
    TRANSLATIONS_ARRAY,
    AUTHENTICATED_USER,
    DELETE_TASK,
    LIST_OF_TASKS,
    TASK_COMPLETED,
    TASK_OPEN,
    LANGUAGE,
} from 'types'

export default (state, action) => {
    switch (action.type) {
        case TRANSLATIONS_ARRAY:
            return {
                ...state,
                translationsArray: action.payload,
            }
        case LANGUAGE:
            return {
                ...state,
                language: action.payload,
            }
        case AUTHENTICATED_USER:
            return {
                ...state,
                user: action.payload,
            }
        case DELETE_TASK:
            return {
                ...state,
                listOfTasks: state.listOfTasks.filter(
                    task => task.id !== action.payload
                ),
            }
        case LIST_OF_TASKS:
            return {
                ...state,
                listOfTasks: action.payload,
            }
        case TASK_COMPLETED:
            return {
                ...state,
                listOfTasks: state.listOfTasks.map(task => {
                    if (task.id === action.payload) task.completed = true
                    return task
                }),
            }
        case TASK_OPEN:
            return {
                ...state,
                listOfTasks: state.listOfTasks.map(task => {
                    if (task.id === action.payload) task.completed = false
                    return task
                }),
            }

        default:
            return state
    }
}
