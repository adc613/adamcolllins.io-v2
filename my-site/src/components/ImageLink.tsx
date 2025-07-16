"use client";

import Image from "next/image";

interface ImageLinkProps {
  href: string;
  imageSrc: string;
  alt: string;
  description: string;
  className?: string;
}

export default function ImageLink({
  href,
  imageSrc,
  alt,
  description,
  className = "",
}: ImageLinkProps) {

  return (
    <a
      className={`relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 aspect-square ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="h-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={imageSrc}
        alt={alt}
        width={200}
        height={200}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{description}</span>
      </div>
    </a>
  );
}
