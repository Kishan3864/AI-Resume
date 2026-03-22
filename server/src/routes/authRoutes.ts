import { Router, Request, Response } from 'express';
import { protect } from '../middleware/auth';

const router = Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Register user' });
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Login user' });
});

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Public
router.post('/logout', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Logout user' });
});

// @route   GET /api/auth/me
// @desc    Get current logged in user
// @access  Private
router.get('/me', protect, async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Get current user' });
});

export default router;
