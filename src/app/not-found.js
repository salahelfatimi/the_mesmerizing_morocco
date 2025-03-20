import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className=" container flex flex-col gap-10 items-center justify-center  h-screen    inset-0 ">
        
        <Image src={'/img/logo_text.jpg'} width={500} height={500} className="w-44" alt="Logo" />
        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center ">
          It seems that this page does not exist.
        </p>
        <Link className=" underline underline-offset-4  font-bold text-xl text-primary flex  duration-700 items-center gap-2"href="/"><Home size={30}/>Back to home</Link>
      </div>
    </>
  );
}