import Image from "next/image";

export default function Navbar(){
    return(
        <div className="  fixed z-10 right-0 left-0  items-center justify-center py-4">
            <div className=" flex items-center justify-center">
                <Image src={'/img/logo.png'} width={500} height={500} className=" w-44"/>
            </div>
        </div>
    )
}