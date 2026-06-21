import Link from "next/link";
import { ArrowRight, LayoutTemplate } from "lucide-react";

const templates = [
  {
    title: "Cohort Template",
    description: "Landing page for cohort-based programs and courses.",
    href: "/cohort",
  },
  {
    title: "Webinar Template",
    description: "High-converting webinar registration landing page.",
    href: "/webinar",
  },
  {
    title: "Remote Job Webinar",
    description: "Template focused on remote job and career webinars.",
    href: "/remotejobwebinar",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            <LayoutTemplate size={16} />
            EddyTools Landing Templates
          </div>

          <h1 className="mb-4 text-5xl font-bold md:text-6xl text-blue-600">
            Choose Your Template
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Select a landing page template to preview and explore.
          </p>
        </div>

        {/* Template Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Link
              key={template.href}
              href={template.href}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <LayoutTemplate size={24} className="text-blue-600" />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {template.title}
              </h2>

              <p className="mb-8 text-slate-600">
                {template.description}
              </p>

              <div className="flex items-center gap-2 font-semibold text-blue-600">
                Open Template
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}