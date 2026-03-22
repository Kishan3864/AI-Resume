import { Router, Request, Response } from 'express';

const router = Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Contact form submitted successfully' });
});

export default router;
