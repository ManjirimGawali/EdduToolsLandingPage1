import "./globals.css";

export const metadata = {
  title: "EddyTools Landing Templates",
  description: "Dynamic Landing Page Templates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}