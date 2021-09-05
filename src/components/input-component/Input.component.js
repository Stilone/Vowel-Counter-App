import React, {useState} from "react";
import {TableComponent} from "../table-component/Table.component";
import "../../css/index.css"

export const InputComponent = (props) => {
    const [stringNumber, setStringNumber] = useState({number: ''})
    const {state} = props


    const handleChange = (event) => {
        const newNumber = {...stringNumber}
        newNumber[event.target.name] = event.target.value
        setStringNumber(newNumber)
    }

    const handleClick = (event) => {
        event.preventDefault()
        const string = stringNumber.number.split(/\s*,|\s*;/)

        const transformString = () => {
            const newString = []
            string.forEach(item => {
                const itemNumber = Number(item)
                if (newString.includes(itemNumber)) {
                    alert('Вы ввели ' + itemNumber + ' несколько раз, вводите один раз')
                } else if (itemNumber > 20) {
                    alert('числа ' + itemNumber + ' нет. Вводите числа от 1 до 20')
                } else {
                    newString.push(itemNumber)
                }
            })
            return newString
        }
        props.onGetString(transformString())
    }

    return (
        <div>
            <form className="styleForm">
                Идентификаторы строк:
                <input type="text"
                       name='number'
                       value={stringNumber.number}
                       onChange={handleChange}
                       className="styleInput"
                />
                <button onClick={handleClick}
                        className="styleBtn"
                >
                    подсчитать
                </button>
            </form>
            <br/>
            <TableComponent state={state}/>
        </div>
    );
};

//создаю Input компонент, присваиваю input отслеживание onChange и передаю функцию(handleChange) в которой записываю изменения input в массив useState, и вывожу это
//в value для отображения. Так же создал Button и присваиваю отслеживание onClick и передаю функцию(handleClick) в которой, запрещаю обновлять страницу при клике,
//выполняю проверку через метод split в которую передаю регулярку пропуска пробелов и разделителя ;, и присваиваю это переменной string.
//создаю функцию transformString в которой создаю пустой массив newString.далее для массива строк string вызывю цикл forEach, в нем для каждого элемента изменяю строки на числа, и проверяю по условию if
//есть ли в массиве newString элемент цикла, если да вывожу ошибку, так же проверяю является ли это число >20 и так же вывожу ошибку, если нет, пушу в массив newString
//в конце функции возвращаю массив с данными.Так же в конце функции handleClick вызываю у props функцию onGetString из mapDispatchToProps и вней вызываю функцию transformString()
//Так же создаю компонент TableComponent в который передаю state из props
