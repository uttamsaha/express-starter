import { userModel } from "../models/users.models";
import { TUser } from "../types/user.type";

async function getUsersFromDB() {
  const users = await userModel.find();
  return users;
}

async function addUserToDB(userData: TUser) {
  const user = await userModel.create(userData);
  return user;
}

export const userServices = {
  getUsersFromDB,
  addUserToDB,
};
