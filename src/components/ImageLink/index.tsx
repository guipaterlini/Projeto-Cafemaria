import React from 'react';

type ImageLinkProps = {
  src: string;
  alt?: string;
  href: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ src, alt, href }) => {
  return (
    <a href={href}>
      <img src={src} alt={alt} />
    </a>
  );
}

export default ImageLink;