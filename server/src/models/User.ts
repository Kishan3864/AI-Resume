import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  isPremium: boolean;
  plan: 'free' | 'monthly' | 'yearly' | 'lifetime';
  premiumExpiry: Date;
  googleId: string;
  githubId: string;
  resumeCount: number;
  createdAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
  getSignedJwtToken(): string;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please add a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  avatar: {
    type: String,
    default: '',
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  plan: {
    type: String,
    enum: ['free', 'monthly', 'yearly', 'lifetime'],
    default: 'free',
  },
  premiumExpiry: {
    type: Date,
  },
  googleId: {
    type: String,
  },
  githubId: {
    type: String,
  },
  resumeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match entered password to hashed password
UserSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function (): string {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRE || '30d',
  });
};

export const User = mongoose.model<IUser>('User', UserSchema);
