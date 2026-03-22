import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

interface JwtPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function protect(req: Request, res: Response, next: NextFunction) {
  let token: string | undefined;

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch {
    res.status(401);
    throw new Error('Not authorized, token invalid');
  }
}

export function premiumOnly(req: Request, res: Response, next: NextFunction) {
  if (!req.user?.isPremium) {
    res.status(403);
    throw new Error('This feature requires a premium subscription');
  }
  next();
}
