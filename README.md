# 🎓 CareerCraft

An AI-powered full-stack career preparation platform that helps users enhance their job readiness with resume building, cover letter generation, mock interviews, and personalized career insights.

---

## ✨ Features

- 🔐 **User Authentication & Onboarding** – Powered by Clerk/Auth.js for secure sign-up and custom onboarding forms.
- 📊 **Personalized Career Insights** – Integrates Gemini AI API to deliver tailored industry trends and job preparation tips.
- 📄 **Resume Builder** – Supports Markdown-based resume creation with PDF export.
- 📨 **Cover Letter Generator** – AI-assisted cover letter drafting based on job roles and user input.
- 🎤 **Mock Interview Generator** – Dynamically creates role-specific questions and tracks performance.
- 📈 **Progress Dashboard** – Visualizes quiz stats and interview scores to track user growth.
- 🕒 **Scheduled AI Insights** – Uses Inngest for cron jobs and automated updates.
- 🛠️ **Admin Panel** – Manage platform data and monitor system activity.

---

## 🧑‍💻 Tech Stack

| Layer      | Tools / Libraries                            |
| ---------- | -------------------------------------------- |
| Frontend   | Next.js, TypeScript, Tailwind CSS, Shadcn UI |
| Backend    | Next.js API Routes, Node.js, Prisma ORM      |
| AI         | Gemini API (via Google AI Studio)            |
| Auth       | Clerk/Auth.js                                |
| Database   | PostgreSQL (managed with Prisma)             |
| Storage    | PDFKit (for resume/cover letter export)      |
| Scheduler  | Inngest (for background jobs/cron tasks)     |
| Deployment | Vercel                                       |

---

## 🧭 Project Structure

/app
└── dashboard # User dashboard with AI insights
└── resume-builder # Markdown-based resume creator
└── interview # Mock interview system
└── cover-letter # Cover letter generation
└── onboarding # User onboarding flow

/lib
└── utils # Helper functions
└── ai # Gemini API integration
└── cron # Inngest cron jobs

/prisma
└── schema.prisma # PostgreSQL schema

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- Clerk (for Auth)
- Google AI Key (Gemini API)
- Vercel Account (for deployment)

### Installation

```bash
git clone https://github.com/yourusername/ai-career-coach.git
cd ai-career-coach

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in .env with your keys (Clerk, Gemini, DB)

# Set up database
npx prisma migrate dev --name init

# Start development server
npm run dev
```

# Clerk Authentication Keys

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Clerk URLs for Authentication Flow

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database Connection URL (PostgreSQL)

DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# Gemini API Key for AI Integration

GEMINI_API_KEY=your_google_gemini_api_key_here
