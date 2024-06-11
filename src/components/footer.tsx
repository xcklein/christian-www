import { Text } from "@/components/material";
import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <div className="flex justify-between items-center">
        <div className="flex-grow-0">
          <Text>&copy;&nbsp;2024&nbsp;Me</Text>
        </div>
        <div className="flex-grow-1"/>
        <div className="flex-grow-0 text-right">
          <Text>Made with <Link href="https://nextjs.org/">Next.js&nbsp;(React)</Link>, <Link href="https://www.material-tailwind.com/">Material&nbsp;Tailwind</Link>, and&nbsp;<Link href="https://aws.amazon.com/">AWS</Link></Text>
        </div>
      </div>
    </footer>
  );
}