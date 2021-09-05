import React from "react";
import {connect} from "react-redux";
import {InputComponent} from "./Input.component";
import {getTextAction} from "../../redux/actions/Text.actions";

const mapStateToProps = (state) => {
    return {state: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetString: (id) => {
            dispatch(getTextAction(id))
        }
    }
}

export const Input = connect(mapStateToProps, mapDispatchToProps)(InputComponent);

//создаю функцию mapStateToProps для использования стейта во всей обертке, создаю функцию mapDispatchToProps с аргументом dispatch, в ней создаю функцию onGetString,
//которая принимает в себя массив с числами id, и в ней вызываю dispatch в которой вызываю функцию getTextAction и предаю в нее массив id.
// создаю экспорт переменной Input в которю присваиваю коннект двух функций для отправки действий в магазин из InputComponent