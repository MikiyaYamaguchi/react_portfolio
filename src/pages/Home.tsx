/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useInView } from "react-intersection-observer";

import CoverPage from "../components/CoverPage";

import { Link } from "react-router-dom";

const Home = () => {
  const mainVisual = css`
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: 1600px;
    height: 100%;
    margin: 0 0 0 auto;
    padding: 3% 0;
    z-index: 0;
    &:after {
      content: "";
      width: 30%;
      height: 70%;
      position: absolute;
      top: 0;
      left: -3%;
      margin: auto;
      z-index: -1;
      background: #e7d4b5;
    }
    .mainImage {
      width: 61%;
      img {
        max-width: 100%;
      }
      @media screen and (min-width: 768px) {
        position: relative;
        height: 572px;
        overflow: hidden;
        img {
          position: absolute;
          top: -300%;
          bottom: -300%;
          right: 0;
          margin: auto;
          max-width: none;
        }
      }
      @media screen and (max-width: 920px) {
        img {
          right: -15%;
        }
      }
      @media screen and (max-width: 830px) {
        img {
          right: -25%;
        }
      }
    }
    .mainCopy {
      width: 37%;
      margin-left: 2%;
      p {
        font-size: 34px;
        font-weight: bold;
      }
      .textWrap {
        p {
          font-size: 18px;
          margin-bottom: 1.5em;
          @media screen and (max-width: 767px) {
            font-size: 16px;
          }
        }
        ul {
          padding-left: 0;
          li {
            font-size: 18px;
            list-style: none;
            @media screen and (max-width: 767px) {
              font-size: 16px;
            }
            &:not(:last-child) {
              margin-bottom: 0.5em;
            }
            a {
              display: block;
              position: relative;
              text-decoration: none;
              padding-left: 20px;
              transition: 0.2s;
              &:hover {
                color: #808080;
              }
              &:before {
                content: "";
                width: 6px;
                height: 6px;
                border-right: 2px solid #231f20;
                border-top: 2px solid #231f20;
                transform: rotate(45deg);
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                margin: auto;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      &:after {
        width: 40%;
        height: 50%;
        left: -5%;
      }
      display: block;
      .mainImage,
      .mainCopy {
        width: 100%;
        margin: 4% 0 0 0;
      }
      .mainCopy {
        p {
          font-size: 24px;
        }
      }
    }
  `;
  const MainImgAni = css`
    opacity: 0;
    transform: translateX(-20px);
    transition: 1s;
  `;
  const MainImgAniActive = css`
    opacity: 1;
    transform: translateX(0);
    transition: 1s;
    transition-delay: 1.2s;
  `;
  const MainTextAni = css`
    span {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
    }
  `;
  const MainTextAniActive = css`
    span {
      display: inline-block;
      opacity: 1;
      transform: translateY(0);
      transition: 0.6s;
      &:nth-of-type(1) {
        transition-delay: 1.7s;
      }
      &:nth-of-type(2) {
        transition-delay: 1.75s;
      }
      &:nth-of-type(3) {
        transition-delay: 1.8s;
      }
      &:nth-of-type(4) {
        transition-delay: 1.85s;
      }
      &:nth-of-type(5) {
        transition-delay: 1.9s;
      }
      &:nth-of-type(6) {
        transition-delay: 1.95s;
      }
      &:nth-of-type(7) {
        transition-delay: 2s;
      }
      &:nth-of-type(8) {
        transition-delay: 2.05s;
      }
      &:nth-of-type(9) {
        transition-delay: 2.1s;
      }
      &:nth-of-type(10) {
        transition-delay: 2.15s;
      }
      &:nth-of-type(11) {
        transition-delay: 2.2s;
      }
      &:nth-of-type(12) {
        transition-delay: 2.25s;
      }
      &:nth-of-type(13) {
        transition-delay: 2.3s;
      }
      &:nth-of-type(14) {
        transition-delay: 2.35s;
      }
      &:nth-of-type(15) {
        transition-delay: 2.4s;
      }
      &:nth-of-type(16) {
        transition-delay: 2.45s;
      }
      &:nth-of-type(17) {
        transition-delay: 2.5s;
      }
      &:nth-of-type(18) {
        transition-delay: 2.55s;
      }
      &:nth-of-type(19) {
        transition-delay: 2.6s;
      }
      &:nth-of-type(20) {
        transition-delay: 2.65s;
      }
      &:nth-of-type(21) {
        transition-delay: 2.7s;
      }
      &:nth-of-type(22) {
        transition-delay: 2.75s;
      }
    }
  `;
  const MainTextAni2 = css`
    display: inline-block;
    opacity: 0;
    transform: translateX(-20px);
  `;
  const MainTextAniActive2 = css`
    opacity: 1;
    transform: translateX(0);
    transition: 0.6s;
    transition-delay: 3s;
  `;
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <div css={mainVisual}>
        <div
          ref={ref1}
          className="mainImage"
          css={inView1 ? MainImgAniActive : MainImgAni}
        >
          <img
            src="/img/main_image.png"
            alt="Y.MIKIYA Portfolio Site"
            className="pc-only"
            loading="lazy"
          />
          <img
            src="/img/sp_main_image.png"
            alt="Y.MIKIYA Portfolio Site"
            className="sp-only"
            loading="lazy"
          />
        </div>
        <div className="mainCopy">
          <p ref={ref2} css={inView2 ? MainTextAniActive : MainTextAni}>
            <span>Y</span>
            <span>.</span>
            <span>M</span>
            <span>I</span>
            <span>K</span>
            <span>I</span>
            <span>Y</span>
            <span>A</span>
            <br />
            <span>P</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>f</span>
            <span>o</span>
            <span>l</span>
            <span>i</span>
            <span>o</span>
            <span>S</span>
            <span>i</span>
            <span>t</span>
            <span>e</span>
          </p>
          <div
            className="textWrap"
            ref={ref3}
            css={inView3 ? MainTextAniActive2 : MainTextAni2}
          >
            <p>
              山口幹矢のポートフォリオサイト
              <br />
              へようこそ！
            </p>
            <ul>
              <li>
                <Link to="/about">山口幹矢について</Link>
              </li>
              <li>
                <Link to="/works">制作事例</Link>
              </li>
              <li>
                <Link to="/contact">お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CoverPage />
    </>
  );
};

export default Home;
