import Image from 'next/image';
import Form from "@/components/pages/contact/form";
import Image_gsap from '@/components/image_gsap';

export async function generateMetadata() {
  return {
    title: "The Mesmerizing Morocco – Unforgettable Trips & Experiences in Marrakech",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "The Mesmerizing Morocco",
      description: "Discover the magic of Marrakech with The Mesmerizing Morocco! 🌟 From guided tours to desert adventures, we create unique travel experiences across Morocco. Book your dream trip today!",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "The Mesmerizing Morocco",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "The Mesmerizing Morocco",
        }
      ],
      type: "website",

    },
  }
};

export default async function Home() {

  return (
    <div className="flex lg:flex-row  h-screen relative">
      <div className="flex z-50 items-center justify-center bg-primary w-14 ">
        <h2 className="transform text-white uppercase rotate-90 text-2xl  font-bold whitespace-nowrap">
          We are launching soon
        </h2>
      </div>
      <div className="lg:w-1/3 hidden lg:block ">
        <Image_gsap/>
      </div>
      <div className='lg:hidden block absolute inset-0 bg-black z-30 opacity-70'></div>
      <div className='lg:hidden block h-screen w-screen absolute z-0'>
        <Image_gsap/>
      </div>
      <div className=" z-50 lg:w-2/3 flex flex-col container justify-center items-center w-full">
        <div>
          <div className="flex flex-col items-center">
            <Image src={'/img/logo_text.jpg'} width={500} height={500} className="w-28" alt="the mesmerizing morocco" title="the mesmerizing morocco" />
          </div>
          <h1 className=' opacity-0 h-0  uppercase font-bold text-lg text-primary '>the mesmerizing morocco</h1>
        </div>
        <div className=' w-full'>
          <Form />
        </div>
      </div>
     
    </div>
  );
}