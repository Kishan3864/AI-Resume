import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

function parseJsonResponse(text: string): any {
  const cleaned = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
  return JSON.parse(cleaned);
}

export async function analyzeResume(resumeData: any) {
  const prompt = `You are an expert resume analyst. Analyze the following resume data and provide a comprehensive evaluation.

Resume Data:
${JSON.stringify(resumeData, null, 2)}

Respond with a JSON object in this exact format:
{
  "overallScore": <number 0-100>,
  "sectionScores": {
    "contactInfo": <number 0-100>,
    "summary": <number 0-100>,
    "experience": <number 0-100>,
    "education": <number 0-100>,
    "skills": <number 0-100>,
    "formatting": <number 0-100>
  },
  "sectionFeedback": {
    "contactInfo": "<feedback string>",
    "summary": "<feedback string>",
    "experience": "<feedback string>",
    "education": "<feedback string>",
    "skills": "<feedback string>",
    "formatting": "<feedback string>"
  },
  "keywordAnalysis": {
    "strongKeywords": ["<keyword>"],
    "missingKeywords": ["<keyword>"],
    "industryRelevance": "<assessment string>"
  },
  "actionItems": [
    {
      "priority": "high" | "medium" | "low",
      "category": "<category>",
      "suggestion": "<actionable suggestion>"
    }
  ]
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return parseJsonResponse(text);
}

export async function generateSummary(
  jobTitle: string,
  experience: any[],
  skills: string[]
) {
  const prompt = `You are a professional resume writer. Generate a compelling professional summary for a resume.

Job Title: ${jobTitle}
Experience: ${JSON.stringify(experience, null, 2)}
Skills: ${JSON.stringify(skills)}

Respond with a JSON object in this exact format:
{
  "summary": "<a 2-4 sentence professional summary that highlights key qualifications, years of experience, notable achievements, and core competencies relevant to the target role>"
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return parseJsonResponse(text);
}

export async function improveBulletPoint(
  bulletPoint: string,
  jobTitle: string
) {
  const prompt = `You are an expert resume writer specializing in impactful bullet points. Improve the following resume bullet point for a ${jobTitle} role.

Original bullet point: "${bulletPoint}"

Provide 3 improved versions that:
- Start with a strong action verb
- Include quantifiable metrics where possible
- Demonstrate impact and results
- Are concise yet descriptive

Respond with a JSON object in this exact format:
{
  "original": "${bulletPoint}",
  "improved": [
    "<improved version 1>",
    "<improved version 2>",
    "<improved version 3>"
  ],
  "tips": "<brief explanation of what was improved and why>"
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return parseJsonResponse(text);
}

export async function matchJobDescription(
  resumeData: any,
  jobDescription: string
) {
  const prompt = `You are an expert ATS (Applicant Tracking System) analyst. Compare the following resume against the job description and evaluate the match.

Resume Data:
${JSON.stringify(resumeData, null, 2)}

Job Description:
${jobDescription}

Respond with a JSON object in this exact format:
{
  "matchScore": <number 0-100>,
  "matchedKeywords": ["<keyword>"],
  "missingKeywords": ["<keyword>"],
  "strongMatches": ["<area of strong alignment>"],
  "gaps": ["<area where resume falls short>"],
  "suggestions": ["<actionable suggestion to improve match>"],
  "atsCompatibility": {
    "score": <number 0-100>,
    "issues": ["<potential ATS issue>"]
  }
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return parseJsonResponse(text);
}

export async function suggestSkills(
  jobTitle: string,
  currentSkills: string[]
) {
  const prompt = `You are a career advisor with deep knowledge of industry skill requirements. Suggest relevant skills for the given role.

Job Title: ${jobTitle}
Current Skills: ${JSON.stringify(currentSkills)}

Respond with a JSON object in this exact format:
{
  "technicalSkills": [
    { "skill": "<skill name>", "relevance": "high" | "medium", "reason": "<why this skill matters>" }
  ],
  "softSkills": [
    { "skill": "<skill name>", "relevance": "high" | "medium", "reason": "<why this skill matters>" }
  ],
  "certifications": [
    { "name": "<certification name>", "provider": "<provider>", "relevance": "<why it helps>" }
  ],
  "emergingSkills": [
    { "skill": "<skill name>", "reason": "<why this is trending in the industry>" }
  ]
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return parseJsonResponse(text);
}

export async function generateCoverLetter(
  resumeData: any,
  jobDescription: string,
  companyName: string
) {
  const prompt = `You are a professional cover letter writer. Generate a compelling, personalized cover letter.

Resume Data:
${JSON.stringify(resumeData, null, 2)}

Job Description:
${jobDescription}

Company Name: ${companyName}

Write a professional cover letter that:
- Opens with a strong, attention-grabbing introduction
- Highlights relevant experience and achievements from the resume
- Demonstrates knowledge of and enthusiasm for the company
- Connects the candidate's skills to the job requirements
- Closes with a confident call to action

Respond with a JSON object in this exact format:
{
  "coverLetter": "<the full cover letter text with proper paragraph breaks using \\n\\n>",
  "keyHighlights": ["<key point emphasized in the letter>"],
  "tone": "<description of the letter's tone>"
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return parseJsonResponse(text);
}
