import React from 'react';
import "../../css/index.css"

export const TableComponent = (props) => {
    const {state} = props

    const createTable = () => {
        if (state.text.length === 0) {
            return 'Введите число'
        } else {
            return <table className="styleTable">
                <thead>
                <tr className="styleTr">
                    <td className="styleTdText">Текст</td>
                    <td className="styleTd">Количество слов</td>
                    <td className="styleTd">Количество гласных</td>
                </tr>
                </thead>
                <tbody>
                {state.text.map((text) => {
                    return <tr>
                        <td>{text.text}</td>
                        <td className="styleTd">{text.words}</td>
                        <td className="styleTd">{text.vowels}</td>
                    </tr>
                })}
                </tbody>
            </table>
        }

    }

    return (
        <div>
            {createTable()}
        </div>
    );
};
//Создаю компонент TableComponent в котором создаю div и вызывю функцию createTable(). В createTable создаю проверку если в стейте ничего нет то отобрази введите число
//Если в стейте появились строки, создаю таблицу через цикл map в котороую передаю из стейта текст, количество гласных и количество слов в тексте.
