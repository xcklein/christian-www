import { Type } from "@/components/material";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <Type>&copy; 2024 Me</Type>
    </footer>
  );
}