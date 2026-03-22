import { Router, Request, Response } from 'express';

const router = Router();

// Placeholder template data
const templates = [
  { id: '1', slug: 'modern', name: 'Modern', description: 'A clean modern template', isPremium: false },
  { id: '2', slug: 'classic', name: 'Classic', description: 'A traditional classic template', isPremium: false },
  { id: '3', slug: 'creative', name: 'Creative', description: 'A creative and bold template', isPremium: true },
  { id: '4', slug: 'minimal', name: 'Minimal', description: 'A minimalist template', isPremium: false },
  { id: '5', slug: 'professional', name: 'Professional', description: 'A professional corporate template', isPremium: true },
];

// @route   GET /api/templates
// @desc    Get all templates
// @access  Public
router.get('/', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Get all templates', data: templates });
});

// @route   GET /api/templates/:slug
// @desc    Get a template by slug
// @access  Public
router.get('/:slug', async (req: Request, res: Response) => {
  const template = templates.find((t) => t.slug === req.params.slug);
  if (!template) {
    return res.status(404).json({ success: false, message: 'Template not found' });
  }
  res.json({ success: true, message: 'Get template by slug', data: template });
});

export default router;
