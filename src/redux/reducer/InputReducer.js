import {CREATE_LINES} from "../actions/Text.actions";

export const InputReducer = (state = {text: []}, action) => {
    switch (action.type) {
        case CREATE_LINES:

            return {...state, text: action.payload}
        default:
            return {...state}
    }
}

//Создаю редьюсер с изначально пустым стейтом, выполняю проверку action, если проверку прошел добавляет изменения в стейт из payload, если нет, возвращаю пустой стейт