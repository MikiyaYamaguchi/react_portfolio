/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

import { useEffect, useState } from "react";

const CoverPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const slideUp = keyframes`
		0%{
			transform: translateY(0);
		}
		100% {
			transform: translateY(-100%);
		}
	`;
  const slideDown = keyframes`
		0%{
			transform: translateY(0);
		}
		100% {
			transform: translateY(100%);
		}
	`;
  const coverDelete = keyframes`
		0%{
			display: block;
		}
		100%{
			display: none;
		}
	`;
  const coverTextActive = keyframes`
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	`;
  const coverTextDelete = keyframes`
	0%{
		opacity: 1;
	}
	100%{
		opacity: 0;
	}
`;
  const cover = css`
    font-family: "Sour Gummy", sans-serif;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 11;
    animation: ${coverDelete} 0s ease-in-out 1.2s forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    letter-spacing: 1.8px;
    @media screen and (max-width: 767px) {
      font-size: 35px;
    }
    .inner {
      animation: ${coverTextDelete} 0.1s 0.7s forwards;
    }
    span {
      opacity: 0;
      animation: ${coverDelete} 0.1s 1.2s forwards;
      &:nth-child(1) {
        animation: ${coverTextActive} 0.1s ease-in-out 0s forwards;
      }
      &:nth-child(2) {
        animation: ${coverTextActive} 0.1s ease-in-out 0.1s forwards;
      }
      &:nth-child(3) {
        animation: ${coverTextActive} 0.1s ease-in-out 0.2s forwards;
      }
      &:nth-child(4) {
        animation: ${coverTextActive} 0.1s ease-in-out 0.3s forwards;
      }
      &:nth-child(5) {
        animation: ${coverTextActive} 0.1s ease-in-out 0.4s forwards;
      }
      &:nth-child(6) {
        animation: ${coverTextActive} 0.1s ease-in-out 0.5s forwards;
      }
      &:nth-child(7) {
        animation: ${coverTextActive} 0.1s ease-in-out 0.6s forwards;
      }
    }
    &:before,
    &:after {
      content: "";
      width: 50%;
      height: 100vh;
      background: #e7d4b5;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: -1;
    }
    &:before {
      left: 0;
      animation: ${slideDown} 0.5s ease-in-out 0.7s forwards;
    }
    &:after {
      right: 0;
      animation: ${slideUp} 0.5s ease-in-out 0.7s forwards;
    }
  `;
  const coverDisActive = css`
    display: none;
  `;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div css={isVisible ? cover : coverDisActive}>
      <div className="inner">
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
      </div>
    </div>
  );
};

export default CoverPage;
