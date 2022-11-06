import httpService from "../server";

export const toLogin = (data: any) => {
  return httpService({
    url: "users/login",
    method: "POST",
    data,
  });
};
