import Link from "next/link";
import { ArrowRight, LayoutTemplate } from "lucide-react";
import { cohortPages } from "@/lib/data/cohort";
import { newcohortPages } from "../lib/data/cohortnew/index";
import { RemoteJobPages } from "@/lib/data/remotejob";
import { gtmPages } from "@/lib/data/gtm-checklist";

const templates = [
  {
    title: "Cohort Template 1",
    description: "Landing page for cohort-based programs and courses.",
    href: `/cohort/${cohortPages[0]?.slug ?? ""}`,
  },
  {
    title: "Cohort Template 2",
    description: "Landing page for cohort-based programs and courses.",
    href: `/newCohort/${newcohortPages[0]?.slug ?? ""}`,
      
  },
   {
    title: "GTM Checklist",
    description: "Go-to-market checklist landing page template.",
    href: `/gtm_checklist/${gtmPages[0]?.slug ?? ""}`,
  },
  // {
  //   title: "Webinar Template",
  //   description: "High-converting webinar registration landing page.",
  //   href: "/webinar",
  // },
  {
    title: "Remote Job Webinar",
    description: "Template focused on remote job and career webinars.",
    href: `/remotejobwebinar/${RemoteJobPages[0]?.slug ?? ""}`,
  },
 
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
            <LayoutTemplate size={16} />
            EddyTools Landing Templates
          </div>

          <h1 className="mb-4 text-5xl font-bold md:text-6xl text-primary">
            Choose Your Template
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Select a landing page template to preview and explore.
          </p>
        </div>

        {/* Template Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Link
              key={template.href}
              href={template.href}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <LayoutTemplate size={24} className="text-primary" />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-foreground">
                {template.title}
              </h2>

              <p className="mb-8 text-muted-foreground">
                {template.description}
              </p>

              <div className="flex items-center gap-2 font-semibold text-primary">
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
