import {observer} from 'mobx-react';
import {cloneElement} from "react";
import {useStores} from "../../../utils/use-stores-hook";

export const  ModalConstructor = observer(() =>{
    const { modalStore: {currentModal: CurrentModal}} = useStores();

    if (CurrentModal){
        // @ts-ignore
        return cloneElement(<CurrentModal/>)
    } else {
        return null;
    }
})