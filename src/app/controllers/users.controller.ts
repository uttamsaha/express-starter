// import { RequestHandler } from "express";
import { Request, Response } from "express";
import { userServices } from "../services/user.services";

async function getUsers(req: Request, res: Response) {
  try {
    const result = await userServices.getUsersFromDB();
    res.status(200).json({
      status: "success",
      data: result,
      message: "Users fetched successfully",
    });
  } catch (error) {
    // next(error);
    console.log(error);
  }
}

async function addUser(req: Request, res: Response) {
  const result = await userServices.addUserToDB(req.body);
  res.status(200).json({
    status: "success",
    data: result,
    message: "User added successfully",
  });
}

export const UserController = {
  getUsers,
  addUser,
};
