import asyncHandler from '../utils/AsyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import {User} from '../models/user.model.js';
import { hash, argon2id } from 'argon2';

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  console.log('Request body:', req.body);

  // Validate required fields
  if (
    !fullName.trim() ||
    !email.trim() ||
    !username.trim() ||
    !password.trim()
  ) {
    throw new ApiError(400, 'All fields are required');
  }

  // Normalize user input
  const normalizedName = fullName.trim();
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedUsername = username.trim().toLowerCase();

  // Check whether the user already exists
  const existingUser = await User.findOne({
    $or: [{ username: normalizedUsername }, { email: normalizedEmail }],
  });

  if (existingUser) {
    if (existingUser.username === normalizedUsername) {
      throw new ApiError(409, 'Username already taken');
    }

    throw new ApiError(409, 'Email already registered');
  }

  // Hash password
  const passwordHash = await hash(password, {
    type: argon2id,
  });

  // Create user
  const user = await User.create({
    name: normalizedName,
    email: normalizedEmail,
    username: normalizedUsername,
    passwordHash,
  });

  // Never expose the password hash in the response
  const createdUser = user.toObject();
  delete createdUser.passwordHash;

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, 'User registered successfully'));
});

export { registerUser };
