// import "./globals.css";

// export const metadata = {
//   title: "EddyTools Landing Templates",
//   description: "Dynamic Landing Page Templates",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }



import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}