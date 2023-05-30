import { MainStore } from "./mainStore";
import { makeObservable, observable, action, computed } from "mobx";
import axios from "axios";

interface userProps {
  id?: string;
  email: string;
}

export const BASE_URL = "https://reqres.in/api";

export default class AuthStore {
  user: userProps;
  isLoading: boolean;
  isError: boolean;
  error: any;

  constructor(public mainStore: MainStore) {
    this.user = {
      email: "",
    };
    makeObservable(this, {
      isLoading: observable,
      isError: observable,
      login: action,
      signup: action,
      logout: action,
      isAuthorized: computed,
      user: observable,
    });

    this.isLoading = false;
    this.isError = false;
    this.error = null;
  }

  get isAuthorized() {
    return (
      localStorage.getItem("user") !== null &&
      localStorage.getItem("user") !== ""
    );
  }

  login = (accountData: { email: string; password: string }) => {
    this.isLoading = true;
    this.error = null;
    axios
      .post(`${BASE_URL}/login`, accountData)
      .then((res) => {
        this.isLoading = false;
        this.isError = false;
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        this.isLoading = false;
        this.isError = true;
        this.error = err;
        console.log(this.error)
      });
  };

  signup = (accountData: {
    email: string;
    password: string;
  }) => {
    this.isError = false;
    axios
      .post(`${BASE_URL}/register`, accountData)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        this.isError = true;
        this.error = err;
        console.log(err)
      });
  };

  logout = () => {
    localStorage.removeItem("user");
    this.isError = false;
  };
}
