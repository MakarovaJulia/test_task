import {MainStore} from "./mainStore";
import {makeAutoObservable} from "mobx";
import {useNavigate} from "react-router";

export class ModalStore{
    currentModal = null

    constructor(mainStore: MainStore) {
        this.currentModal = null;
        makeAutoObservable(this);
    }

    clearCurrentModal = () => {
        this.currentModal = null;
    }


    setCurrentModal = (modal: any) =>{
        this.currentModal = modal;
    }
}