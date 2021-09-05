import React from "react";

export const CREATE_LINES = 'CREATE_LINES';

export const getTextAction = (id) => {
    return (dispatch) => {
        const requestPromise = [];

        const handleResponse = (responses) => {
            const newResponses = [...responses]
            newResponses.map(item => {
                const vowels = /[aeiouауоыэяюёиеäöüɛøəœɑɔáéíóúyýæå]/gi;
                const words = item.text.split(' ')
                const wordsCount = words.filter(word => {
                    return word.length >= 2
                })
                item.words = wordsCount.length
                const matched = item.text.match(vowels);
                return matched ? item.vowels = matched.length : 0;
            })

            return dispatch({
                type: CREATE_LINES,
                payload: newResponses,
            });
        };

        const mapResponseJSON = (responsePromise) => {
            return responsePromise.json();
        };

        const handleResponsesPromise = (responses) => {
            const jsonPromise = responses.map(mapResponseJSON)
            Promise.all(jsonPromise).then(handleResponse)
        }

        const handleResponseError = () => {
            alert('Если хоть один запрос упал, тут будет ошибка');
        };

        id.forEach(idNumber => {
            const getPromise = fetch('https://tmgwebtest.azurewebsites.net/api/textstrings/' + idNumber, {
                headers: {
                    'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
                    'Content-Type': 'application/json',
                }
            })
            requestPromise.push(getPromise)
        })
        Promise.all(requestPromise)
            .then(handleResponsesPromise)
            .catch(handleResponseError)

    }
}
//создаю функцию getTextAction, которая принимает массив чисел с id, далее в обязательном порядке возвращаю функцию dispatch иначе асинхронность thunk не будет работать,
//создаю переменную requestPromise с пустым массивом, создаю цикл по массиву чисел id через forEach где присваиваю переменной getPromise, вызов функции fetch в которую
//передал ссылку на сервер и прописал хедеры с ключем, после все промисы пушу в пустой массив requestPromise. Далле вызываю выполнение Promise.all в который передал
//массив промисов и если они успешно выполнились передал функцию handleResponsesPromise, в функцию then, так же вызвал функцию catch в которую передал функцию handleResponseError
// которая в свою очередь выдает ошибку если запрос не увенчался успехом. Тем временем в функции handleResponsesPromise создаю новую переменную jsonPromise и присваиваю ей
//вызов цикла map для каждого responses и передаю ей функцию mapResponseJSON, та в свою очередь каждый промис преобразует в json объект. Далее в функции handleResponsesPromise,
//я передаю в Promise.all массив преобразованных в json объект промисов, и если они выполнились передаю в функцию then функцию handleResponse, та в свою очередь
//выполняет цикл forEach для каждого responses, в котором проверяет регуляркой сколько глассных, и методами split и filter считает количество слов результаты добавляет
// в каждый объект responses, после циклка вызывается dispatch в котором указывается type для редьюсера и payload c измененными объектами responses
