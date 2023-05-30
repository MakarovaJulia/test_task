import AuthStore from "./authStore";
import {ModalStore} from "./modalStore";
import UsersStore from "./usersStore";

export class MainStore {
  authStore: AuthStore;
  modalStore: ModalStore;
  usersStore: UsersStore;


  constructor() {
    this.authStore = new AuthStore(this);
    this.modalStore = new ModalStore(this);
    this.usersStore = new UsersStore(this);
  }
}

const mainStore = new MainStore();

export default mainStore;
