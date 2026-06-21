import { GradientDivider } from "@/components/ui";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#030509] border-t border-[#1E2D4A]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold text-white">
              Shikkhar<span className="text-[#FF5A36]">Suri</span>
            </p>
            <p className="text-[#4A5568] text-xs mt-1">International Remote Jobs Mentor</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#4A5568] text-sm hover:text-[#FF5A36] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <GradientDivider className="my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#2a3a5c] text-xs">
            © {new Date().getFullYear()} Shikkhar Suri. All rights reserved.
          </p>
          <p className="text-[#2a3a5c] text-xs">
            Made with ❤️ for every Indian professional who deserves more.
          </p>
        </div>
      </div>
    </footer>
  );
}
