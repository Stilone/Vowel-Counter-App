import React from "react";
import {connect} from "react-redux";
import {getTextAction} from "../redux/actions/Text.actions";
import { PageComponent } from "./page-component/Page.component";

const mapStateToProps = (state) => {
    return { texts: state.texts }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetString: (id) => {
            dispatch(getTextAction(id))
        }
    }
}

export const Page = connect(mapStateToProps, mapDispatchToProps)(PageComponent);

//создаю функцию mapStateToProps для использования стейта во всей обертке, создаю функцию mapDispatchToProps с аргументом dispatch, в ней создаю функцию onGetString,
//которая принимает в себя массив с числами id, и в ней вызываю dispatch в которой вызываю функцию getTextAction и предаю в нее массив id.
// создаю экспорт переменной Page в которю присваиваю коннект двух функций для отправки действий в магазин из PageComponent