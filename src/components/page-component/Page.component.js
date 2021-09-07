import React from 'react';
import {TableComponent} from "../table-component/Table.component";
import {InputComponent} from "../input-component/Input.component";

export const PageComponent = (props) => {
    const { onGetString, texts } = props

    return (
        <div>
            <InputComponent onGetString={onGetString}/>
            <TableComponent texts={texts}/>
        </div>
    );
};

//Создаю главный компомнент PageComponent, в который передаю InputComponent и TableComponent

