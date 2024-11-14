/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { ReactNode } from "react";

import { useInView } from "react-intersection-observer";

interface ScrollElementProps {
  children: ReactNode;
  delay?: number;
}

const AniTitle: React.FC<ScrollElementProps> = ({ children }) => {
  const AniTitle = css`
    span {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
    }
  `;

  const AniTitleActive = css`
    span {
      display: inline-block;
      opacity: 1;
      transform: translateY(0);
      transition: 0.6s;
      &:nth-of-type(1) {
        transition-delay: 0s;
      }
      &:nth-of-type(2) {
        transition-delay: 0.05s;
      }
      &:nth-of-type(3) {
        transition-delay: 0.1s;
      }
      &:nth-of-type(4) {
        transition-delay: 0.15s;
      }
      &:nth-of-type(5) {
        transition-delay: 0.2s;
      }
      &:nth-of-type(6) {
        transition-delay: 0.25s;
      }
      &:nth-of-type(7) {
        transition-delay: 0.3s;
      }
      &:nth-of-type(8) {
        transition-delay: 0.35s;
      }
      &:nth-of-type(9) {
        transition-delay: 0.4s;
      }
      &:nth-of-type(10) {
        transition-delay: 0.45s;
      }
    }
  `;

  const { ref, inView } = useInView({
    rootMargin: "-170px",
    triggerOnce: true,
  });

  return (
    <div ref={ref} css={inView ? AniTitleActive : AniTitle}>
      {children}
    </div>
  );
};

export default AniTitle;
