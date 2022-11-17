import { API } from "../../constants";
import { createAxiosInstance } from "./axiosConfig";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const authHeaders = {};

export function setAuthHeader(token) {
  authHeaders.Authorization = `Bearer ${token}`;
}

export function unsetAuthHeader() {
  delete authHeaders.Authorization;
}

export function getCardList() {
  return createAxiosInstance({
    url: API.noAuthUrls.getCards,
    method: "GET",
    headers: { ...defaultHeaders },
  });
}
