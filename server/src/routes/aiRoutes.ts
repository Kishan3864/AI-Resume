import { Router, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import {
  analyzeResume,
  generateSummary,
  improveBulletPoint,
  matchJobDescription,
  suggestSkills,
  generateCoverLetter,
} from "../services/ai/geminiService";

const router = Router();

const aiRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 8,
  message: {
    error: "Too many AI requests. Please try again in a minute.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.use(aiRateLimiter);

router.post("/analyze", async (req: Request, res: Response) => {
  try {
    const { resumeData } = req.body;
    if (!resumeData) {
      return res.status(400).json({ error: "resumeData is required" });
    }
    const result = await analyzeResume(resumeData);
    res.json(result);
  } catch (error: any) {
    console.error("Error analyzing resume:", error.message);
    res.status(500).json({ error: "Failed to analyze resume" });
  }
});

router.post("/summary", async (req: Request, res: Response) => {
  try {
    const { jobTitle, experience, skills } = req.body;
    if (!jobTitle) {
      return res.status(400).json({ error: "jobTitle is required" });
    }
    const result = await generateSummary(jobTitle, experience || [], skills || []);
    res.json(result);
  } catch (error: any) {
    console.error("Error generating summary:", error.message);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});

router.post("/improve-bullet", async (req: Request, res: Response) => {
  try {
    const { bulletPoint, jobTitle } = req.body;
    if (!bulletPoint || !jobTitle) {
      return res
        .status(400)
        .json({ error: "bulletPoint and jobTitle are required" });
    }
    const result = await improveBulletPoint(bulletPoint, jobTitle);
    res.json(result);
  } catch (error: any) {
    console.error("Error improving bullet point:", error.message);
    res.status(500).json({ error: "Failed to improve bullet point" });
  }
});

router.post("/match-job", async (req: Request, res: Response) => {
  try {
    const { resumeData, jobDescription } = req.body;
    if (!resumeData || !jobDescription) {
      return res
        .status(400)
        .json({ error: "resumeData and jobDescription are required" });
    }
    const result = await matchJobDescription(resumeData, jobDescription);
    res.json(result);
  } catch (error: any) {
    console.error("Error matching job description:", error.message);
    res.status(500).json({ error: "Failed to match job description" });
  }
});

router.post("/suggest-skills", async (req: Request, res: Response) => {
  try {
    const { jobTitle, currentSkills } = req.body;
    if (!jobTitle) {
      return res.status(400).json({ error: "jobTitle is required" });
    }
    const result = await suggestSkills(jobTitle, currentSkills || []);
    res.json(result);
  } catch (error: any) {
    console.error("Error suggesting skills:", error.message);
    res.status(500).json({ error: "Failed to suggest skills" });
  }
});

router.post("/cover-letter", async (req: Request, res: Response) => {
  try {
    const { resumeData, jobDescription, companyName } = req.body;
    if (!resumeData || !jobDescription || !companyName) {
      return res
        .status(400)
        .json({
          error: "resumeData, jobDescription, and companyName are required",
        });
    }
    const result = await generateCoverLetter(resumeData, jobDescription, companyName);
    res.json(result);
  } catch (error: any) {
    console.error("Error generating cover letter:", error.message);
    res.status(500).json({ error: "Failed to generate cover letter" });
  }
});

export default router;
