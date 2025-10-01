import Image from 'next/image';
import React from 'react';

export interface LogoProps {
  width?: number;
  height?: number;
  alt?: string;
  priority?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 120,
  height = 32,
  alt = 'Streamec logo',
  priority = false,
  className,
}) => (
  <Image
    src="/logos/StreamecLogo.png"
    width={width}
    height={height}
    alt={alt}
    priority={priority}
    className={className}
    draggable={false}
  />
);

export default Logo;
