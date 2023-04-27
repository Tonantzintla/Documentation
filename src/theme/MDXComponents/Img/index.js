import React from "react";
import Image from "@theme/IdealImage";
export default function MDXImg(props) {
  console.log(props);
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <span className="relative block">
      <span className="block overflow-hidden">
        <Image img={props.src} className="pointer-events-none block h-auto w-auto rounded-lg object-cover object-center" style={props.style} alt={props.alt} />
      </span>
      <Image img={props.src} className="pointer-events-none absolute inset-0 -z-10 h-auto w-auto blur-xl saturate-[1.3]" style={props.style} alt={props.alt} />
    </span>
  );
}
