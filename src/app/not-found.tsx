import { BasicPage } from "@/components/basic-page";
import { Text } from "@/components/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <BasicPage>
      <div className="flex justify-center text-center">
        <div>
          <Text variant="h2">new page who dis?</Text>
          <Link href="/"><Text>lets go back home</Text></Link>
        </div>
      </div>
    </BasicPage>
  );
}