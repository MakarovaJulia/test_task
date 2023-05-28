import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const getUsersByPage = async (page: number | undefined) => {
  let user = await axios.get(`${BASE_URL}/users?page=${page}`);
  return user;
};

export const getUserById = async (id: string | undefined) => {
  let user = await axios.get(`${BASE_URL}/users/${id}`);
  return user;
};

export const getResources = async () => {
  let resources = await axios.get(`${BASE_URL}/unknown`);
  return resources;
};

export const getResourceById = async (id: string) => {
  let resources = await axios.get(`${BASE_URL}/unknown/${id}`);
  let resource = resources.data.find((x: any) => x.id === id);
  return resource;
};