'use client';

import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-md"
        onError={(e) => {
          console.error('Error al cargar la imagen:', src);
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
        {src}
      </div>
    </>
  );
} 