# 🎓 CareerCraft

An AI-powered full-stack career preparation platform that helps users enhance their job readiness with resume building, cover letter generation, mock interviews, and personalized career insights.

---

## ✨ Features

- 🔐 **User Authentication & Onboarding** – Powered by Clerk for secure sign-up and custom onboarding forms
- 📊 **Personalized Career Insights** – Integrates Gemini AI API to deliver tailored industry trends and job preparation tips
- 📄 **Resume Builder** – Supports Markdown-based resume creation with PDF export using React-PDF
- 📨 **Cover Letter Generator** – AI-assisted cover letter drafting based on job roles and user input
- 🎤 **Mock Interview Generator** – Dynamically creates role-specific questions and tracks performance
- 📈 **Progress Dashboard** – Visualizes quiz stats and interview scores with Recharts
- 🕒 **Scheduled AI Insights** – Uses Inngest for cron jobs and automated updates
- 🛠️ **Admin Panel** – Manage platform data and monitor system activity

---

## 🧑‍💻 Tech Stack

| Layer      | Tools / Libraries                                    |
| ---------- | ---------------------------------------------------- |
| Frontend   | Next.js 15, TypeScript, Tailwind CSS, Shadcn UI     |
| Backend    | Next.js API Routes, Node.js, Prisma ORM             |
| AI         | Google Gemini API (@google/generative-ai)           |
| Auth       | Clerk (@clerk/nextjs)                               |
| Database   | PostgreSQL (managed with Prisma)                    |
| PDF Export | React-PDF, jsPDF, html2pdf.js                       |
| Forms      | React Hook Form, Zod validation                      |
| UI/UX      | Radix UI primitives, Lucide icons, Sonner toasts    |
| Charts     | Recharts for data visualization                      |
| Scheduler  | Inngest (for background jobs/cron tasks)            |
| Deployment | Vercel                                               |

---

## 🧭 Project Structure

```
/app
├── dashboard/          # User dashboard with AI insights
├── resume-builder/     # Markdown-based resume creator
├── interview/          # Mock interview system
├── cover-letter/       # Cover letter generation
├── onboarding/         # User onboarding flow
├── sign-in/           # Authentication pages
├── sign-up/           # Registration pages
└── api/               # API routes

/components
├── ui/                # Shadcn UI components
└── custom/            # Custom application components

/lib
├── utils.ts           # Helper functions
├── ai/                # Gemini API integration
└── cron/              # Inngest cron jobs

/prisma
├── schema.prisma      # PostgreSQL schema
└── migrations/        # Database migrations

/hooks                 # Custom React hooks
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account (for authentication)
- Google AI Studio API key (for Gemini)
- Vercel account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/career-craft.git
cd career-craft

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in .env with your keys (see Environment Variables section)

# Set up database
npx prisma generate
npx prisma migrate dev --name init

# Start development server
npm run dev
```

