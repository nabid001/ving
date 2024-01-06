"use server";

import { any, unknown } from "zod";
import { connectToDatabase } from "..";
import User from "../models/user.model";

type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photo?: string;
};

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
