import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Landing Page Templates
      </h1>

      <Link href="/cohort">
        Cohort Template
      </Link>

      <Link href="/webinar">
        Webinar Template
      </Link>
    </main>
  );
}