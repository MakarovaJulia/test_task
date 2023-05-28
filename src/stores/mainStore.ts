import AuthStore from "./authStore";

export class MainStore {
  authStore: AuthStore;


  constructor() {
    this.authStore = new AuthStore(this);
  }
}

const mainStore = new MainStore();

export default mainStore;
