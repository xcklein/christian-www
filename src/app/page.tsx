import { IconButton, Tooltip } from "@/components/material";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center">
          <Image src="/ck_avatar_circle.png" alt="Image of Christian" width={256} height={256}/>
          <h1 className="text-6xl">Christian</h1>
        </div>

        <div className="flex gap-2 justify-center">
          <Tooltip content="GitHub">
            <a href="https://github.com/xcklein">
              <IconButton className="bg-[#333333]">
                <i className="fab fa-github text-lg"/>
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip content="LinkedIn">
            <a href="https://linkedin.com/in/xcklein">
              <IconButton className="bg-[#0072B1]">
                <i className="fab fa-linkedin text-lg"/>
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip content="Panacea">
            <a href="https://panacea.gg">
              <IconButton className="bg-[#e6ca42]">
                <i className="fab fa-usb text-lg"/>
              </IconButton>
            </a>
          </Tooltip>
        </div>
      </div>
    </main>
  );
}
