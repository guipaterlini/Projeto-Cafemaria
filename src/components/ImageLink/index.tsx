import React, { PropsWithChildren } from "react";

type ImageLinkProps = PropsWithChildren<{
  src: string; // URL da imagem
  alt?: string; // Texto alternativo da imagem (opcional)
  href: string; // URL do link
}>;

const ImageLink: React.FC<ImageLinkProps> = (props) => {
  const { src, alt, href, children } = props; // Desestruturação das props

  return (
    <a href={href}>
      {/* Link */}
      <img src={src} alt={alt} /> {/* Imagem com URL e texto alternativo */}
      {children} {/* Conteúdo adicional dentro do link */}
    </a>
  );
};

export default ImageLink;
