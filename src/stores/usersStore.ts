import { MainStore } from "./mainStore";
import { makeObservable, observable, action, computed } from "mobx";
import axios from "axios";

interface userProps {
  id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
}

export const BASE_URL = "https://reqres.in/api";

export default class UsersStore {
  isLoading: boolean;
  isError: boolean;

  constructor(public mainStore: MainStore) {
    makeObservable(this, {
      isLoading: observable,
      isError: observable,
    });

    this.isLoading = false;
    this.isError = false;
  }

  addUser = (userData: {
    name: string;
    job: string;
  }): object => {
    this.isLoading = true;
    this.isError = false;
    return  axios
      .post(`${BASE_URL}/users`, userData)
      .then((res) => {
        this.isLoading = false;
        return res.data
      })
      .catch((err) => {
        this.isLoading = false;
        this.isError = true;
      });
  }

  updateUser = (userData: {
    name: string;
    job: string;
  }): object => {
    this.isLoading = true;
    this.isError = false;
    return  axios
      .post(`${BASE_URL}/users`, userData)
      .then((res) => {
        this.isLoading = false;
        return res.data
      })
      .catch((err) => {
        this.isLoading = false;
        this.isError = true;
      });
  }

  deleteUser = (id: string) =>{
    this.isLoading = true;
    this.isError = false;
    return axios.delete(`${BASE_URL}/users/${id}`)
      .then(()=>{
        this.isLoading = false
        localStorage.removeItem('createdUser')
      })
      .catch((err) => {
        this.isLoading = false;
        this.isError = true;
      })
  }
}