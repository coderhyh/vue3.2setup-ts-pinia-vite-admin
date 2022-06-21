import { request } from "~/axios/index";

export const reqJson: () => any = () => {
  return request({
    url: "/api/data/asset/data/les-miserables.json",
  });
};
