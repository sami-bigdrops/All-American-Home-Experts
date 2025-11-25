import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "All American Home Experts - Privacy Policy",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Modal />
    </div>
  );
}