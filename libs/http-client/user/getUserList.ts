import { db } from "libs/firebase-client";
import { IUser } from "modules/user";
import { IGetUserListResponse } from "./interface";

export const getUserList = async (): Promise<IGetUserListResponse> => {
  const { docs } = await db.collection("users").get();
  const userList = docs.map((doc) => doc.data() as IUser);
  return { userList };
};
