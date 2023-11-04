import type { Metadata } from "next";
import "./globals.css";
import Modal from "@/components/Modal";

export const metadata: Metadata = {
  title: "Kanban board",
  description: "Manage task with a kanban board",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#cfccc1]">
        {children}
        <Modal />
      </body>
    </html>
  );
}
