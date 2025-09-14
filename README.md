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

| Layer      | Tools / Libraries                                |
| ---------- | ------------------------------------------------ |
| Frontend   | Next.js 15, TypeScript, Tailwind CSS, Shadcn UI  |
| Backend    | Next.js API Routes, Node.js, Prisma ORM          |
| AI         | Google Gemini API (@google/generative-ai)        |
| Auth       | Clerk (@clerk/nextjs)                            |
| Database   | PostgreSQL (managed with Prisma)                 |
| PDF Export | React-PDF, jsPDF, html2pdf.js                    |
| Forms      | React Hook Form, Zod validation                  |
| UI/UX      | Radix UI primitives, Lucide icons, Sonner toasts |
| Charts     | Recharts for data visualization                  |
| Scheduler  | Inngest (for background jobs/cron tasks)         |
| Deployment | Vercel                                           |

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

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
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

# Inngest Configuration (for background jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

---

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run vercel-build # Build with Prisma generation for Vercel
```

### Key Dependencies

- **@clerk/nextjs**: Authentication and user management
- **@google/generative-ai**: Gemini AI integration
- **@prisma/client**: Database ORM
- **@react-pdf/renderer**: PDF generation
- **@uiw/react-md-editor**: Markdown editor for resumes
- **inngest**: Background job processing
- **recharts**: Data visualization
- **react-hook-form**: Form handling
- **zod**: Schema validation

---

## 📱 Features Deep Dive

### Authentication & Onboarding

- Secure user registration and login via Clerk
- Custom onboarding flow to collect user preferences
- Role-based access control

### Resume Builder

- Markdown-based resume editing with live preview
- Multiple resume templates
- PDF export functionality
- Real-time collaboration features

### AI-Powered Cover Letters

- Job-specific cover letter generation
- Customizable templates
- AI suggestions for improvements
- Export to multiple formats

### Mock Interview System

- Role-specific interview questions
- Performance tracking and analytics
- AI-powered feedback
- Progress visualization

### Career Insights Dashboard

- Personalized career recommendations
- Industry trend analysis
- Skill gap identification
- Progress tracking with charts

---

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Database Setup

1. Create a PostgreSQL database (recommended: Neon, Supabase, or Railway)
2. Update `DATABASE_URL` in environment variables
3. Run migrations: `npx prisma migrate deploy`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Clerk](https://clerk.com/) for authentication
- [Google AI](https://ai.google.dev/) for Gemini API
- [Vercel](https://vercel.com/) for hosting and deployment
