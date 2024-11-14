/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { ReactNode } from "react";

import { useInView } from "react-intersection-observer";

interface ScrollElementProps {
  children: ReactNode;
  delay?: number;
}

const FadeIn: React.FC<ScrollElementProps> = ({ children, delay = 300 }) => {
  const fadeIn = css`
    transform: translateX(-20px);
    opacity: 0;
  `;

  const fadeInActive = css`
    transform: translateX(0);
    opacity: 1;
    transition: 0.7s;
  `;

  const { ref, inView } = useInView({
    rootMargin: "-170px",
    triggerOnce: true,
    delay: delay,
  });

  return (
    <div ref={ref} css={inView ? fadeInActive : fadeIn}>
      {children}
    </div>
  );
};

export default FadeIn;
