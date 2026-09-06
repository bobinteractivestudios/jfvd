import Image from "next/image";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav theme="light" />
      <div className="bg-[#333] p-3 sm:p-5 md:p-8">
        <div className="relative aspect-[3/2] w-full sm:aspect-[16/9]">
          <Image
            src="/hero.jpg"
            alt="JFVD bijeenkomst"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
