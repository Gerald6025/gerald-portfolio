declare module 'next/image' {
  import type { FC, ImgHTMLAttributes } from 'react';
  
  interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    fill?: boolean;
    priority?: boolean;
    quality?: number;
    loading?: 'lazy' | 'eager';
  }
  
  const Image: FC<ImageProps>;
  export default Image;
}
