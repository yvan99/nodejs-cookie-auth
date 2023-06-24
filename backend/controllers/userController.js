import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Authentication successful" });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const UserExist = await User.findOne({ email });
  if (UserExist) {
    res.status(400);
    throw new Error(`User ${name} already exists`);
  }
  const user = User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      message: "User registered successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout Users" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update profile" });
});

export {
  authUser,
  logoutUser,
  registerUser,
  updateUserProfile,
  getUserProfile,
};
