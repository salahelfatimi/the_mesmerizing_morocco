import Image from "next/image";

export default function Loading() {
    return (
      <>
        <div className={`fixed  inset-0 flex items-center justify-center bg-secondary  duration-1000 transition z-[70] `}>
          <div className={`font-extrabold text-center items-center gap-3 md:text-5xl text-4xl  flex flex-col lg:flex-row justify-center text-white  `}>
            <Image src={'/img/logo_text.jpg'} width={500} height={500} className="w-44 animate-pulse" alt="the mesmerizing morocco" title="the mesmerizing morocco" />
          </div>
        </div>
      </>
    );
  }