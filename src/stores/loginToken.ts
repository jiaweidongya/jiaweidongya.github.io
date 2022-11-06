import { defineStore } from "pinia";
import { toLogin } from "../api/login/index";

export const LoginToken = defineStore("LoginToken", {
  state: () => ({
    token: "",
    nextId: 200,
  }),
  getters: {},
  actions: {
    login(userDate) {
      return new Promise((resolve, reject) => {
        toLogin(userDate)
          .then((result: any) => {
            if (result.retCode > 200) {
              reject(result.message);
            } else {
              this.setToken(result.token);
              resolve(result);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    setToken(token) {
      localStorage.setItem("token", token);
      this.token = token;
    },
  },
});
