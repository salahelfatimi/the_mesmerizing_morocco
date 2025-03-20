"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
    '/img/img_1.jpg',
    '/img/img_2.jpg',
    '/img/img_3.jpg',
    '/img/img_4.jpg',
    '/img/img_5.jpg',
    '/img/img_6.jpg',
    '/img/img_7.jpg',
    '/img/img_8.jpg',
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {images.map((img, index) => (
               <Image key={index} src={img} width={1920} height={1080} quality={30} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} alt="the mesmerizing morocco" title="the mesmerizing morocco" />
            ))}
        </div>
    );
}
