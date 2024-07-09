'use client'
import { CldImage } from 'next-cloudinary';
import React from 'react';

const Cldimg = ({src, width, height}: {src:  string, width: number, height: number}) => {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={`image ${src}`}
      sizes="(max-width: 768px) 50vw,  (max-width: 1200px) 33vw, 100vw"
      className="aspect-square w-full object-cover transition-all group-hover:scale-105"
    />
  )
} 

export default Cldimg
