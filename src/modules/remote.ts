import instance from "./serverInstance";
export const get = async (params?: object) => {
  try {
    const res = await instance.get("coins/markets", { params });
    const data = res.data;
    console.log("res: ", data);
    return data;
  } catch {
    throw Error;
  }
};
