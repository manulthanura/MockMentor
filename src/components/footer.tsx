import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

// Updated FooterLink to match the new style for a light background
const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <div className="px-5 py-2"> {/* Changed li to div as per example structure */}
      <Link
        to={to}
        className="text-base leading-6 text-gray-500 hover:text-gray-900"
      >
        {children}
      </Link>
    </div>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-white">
      <Container>
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {MainRoutes.map((route) => (
              <FooterLink key={route.href} to={route.href}>
                {route.label}
              </FooterLink>
            ))}
            {/* Example: Add a "Terms" link if not in MainRoutes and always needed */}
            {/* {!MainRoutes.find(link => link.label.toLowerCase() === 'terms') && (
              <FooterLink to="/terms">Terms</FooterLink>
            )} */}
          </nav>

          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © {currentYear} MockMentor. All rights reserved.
          </p>
        </div>
      </Container>
    </section>
  );
};