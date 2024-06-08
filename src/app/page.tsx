import BasicPage from "@/components/basic-page";
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Tooltip, Type } from "@/components/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <BasicPage>
      <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center">
          <Image src="/ck_avatar_circle.png" alt="Image of Christian" width={384} height={384}/>

          <Type variant="h1">Christian</Type>
        </div>

        <div className="flex gap-2 justify-center">
          <Tooltip content="GitHub">
            <Link href="https://github.com/xcklein">
              <IconButton className="bg-[#333333] dark:bg-[#333333] text-palette-white dark:text-palette-white" size="lg">
                <i className="fab fa-github text-lg"/>
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip content="LinkedIn">
            <Link href="https://linkedin.com/in/xcklein">
              <IconButton className="bg-[#0072B1] dark:bg-[#0072B1] text-palette-white dark:text-palette-white" size="lg">
                <i className="fab fa-linkedin text-lg"/>
              </IconButton>
            </Link>
          </Tooltip>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Card className="bg-palette-white dark:bg-palette-black text-palette-black dark:text-palette-white">
            <CardHeader floated={false} shadow={false} color="transparent">
              <Link href="https://panacea.gg">
                <Image src="/panacea.svg" alt="Image of Panacea logo" width={256} height={256} className="p-8"/>
              </Link>
            </CardHeader>
            <CardBody>
              <Link href="https://panacea.gg">
                <Type variant="h3">
                  Panacea
                </Type>
              </Link>
              <Type>
                Solving your needs.
              </Type>
            </CardBody>
          </Card>

          <Card className="bg-palette-white dark:bg-palette-black text-palette-black dark:text-palette-white">
            <CardHeader floated={false} shadow={false}>
              <Image src="/placeholder.jpg" alt="Image of Panacea logo" width={256} height={256}/>
            </CardHeader>
            <CardBody>
              <Type variant="h3">
                TBA
              </Type>
              <Type>
                To be announced.
              </Type>
            </CardBody>
          </Card>
        </div>
      </div>
    </BasicPage>
  );
}
