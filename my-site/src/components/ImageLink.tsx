"use client";

import Image from "next/image";

import { useEffect, useState } from "react"

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

  const [isTextVisible, setIsTextVisible] = useState(false)

  useEffect(() => {
    const makeTextVisibile = () => {
      setIsTextVisible(true)
    }
    const maybeHideText = () => {
      setIsTextVisible(false)
    }

    window.addEventListener('touchstart', makeTextVisibile)
    window.addEventListener('mousedown', makeTextVisibile)
    window.addEventListener('touchend', maybeHideText)
    window.addEventListener('mouseup', maybeHideText)

    return () => {
      window.addEventListener('touchstart', makeTextVisibile)
      window.addEventListener('mousedown', makeTextVisibile)
      window.addEventListener('touchend', maybeHideText)
      window.addEventListener('mouseup', maybeHideText)
    }
  });


  return (
    <a
      className={
        `relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 aspect-square ${className} ` +
        (isTextVisible ? 'scale-105' : '')
      }
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={
          "h-full object-cover transition-transform duration-300 group-hover:scale-110 " +
          (isTextVisible ? 'scale-110' : '')
        }
        src={imageSrc}
        alt={alt}
        width={300}
        height={300}
      />
      <div className={
        "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center " +
        (isTextVisible ? 'opacity-85' : '')
      }>
        <span className="text-white text-2xl font-semibold">{description}</span>
      </div>
    </a>
  );
}
