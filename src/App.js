import React from "react";
import {store} from "./redux/store/CreateStore";
import {Provider} from "react-redux";
import {Input} from "./components/input-component/Input";
import "./css/index.css"

const App = () => {
    return (
        <Provider store={store}>
            <div className="styleContainer">
                <Input/>
            </div>
        </Provider>

    );
};

export default App;
//передаю глобальную обертку store для передачи глобального state в props, вызываю Input компонент.