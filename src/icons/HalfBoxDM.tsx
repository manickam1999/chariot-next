import * as React from "react";
import type { SVGProps } from "react";

export const HalfBoxDM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="250"
    height="85"
    viewBox="0 0 250 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="41" y1="1" x2="223" y2="1" stroke="#F3EEF6" />
    <path
      d="M1 84.2791V42.7791V21C1 9.95431 9.9543 1 21 1H42.7826"
      stroke="#F3EEF6"
    />
    <path
      d="M249 84.2791V42.7791V21C249 9.95431 240.046 1 229 1H207.217"
      stroke="#F3EEF6"
    />
  </svg>
);
