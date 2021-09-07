import React from "react";
import {store} from "./redux/store/CreateStore";
import {Provider} from "react-redux";
import "./css/index.css"
import {Page} from "./components/Page";

const App = () => {
    return (
        <Provider store={store}>
            <div className="styleContainer">
                <Page />
            </div>
        </Provider>

    );
};

export default App;
//передаю глобальную обертку store для передачи глобального state в props, передаю Page компонент.