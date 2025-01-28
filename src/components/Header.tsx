/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const Container = css`
    position: relative;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Title = css`
    margin: 0;
    cursor: pointer;
    img {
      width: 259px;
      height: 101px;
    }
    @media screen and (max-width: 945px) {
      img {
        width: 200px;
        height: auto;
      }
    }
    @media screen and (max-width: 767px) {
      img {
        width: 150px;
        height: auto;
      }
    }
  `;
  const navWrap = css`
    .menuBtn {
      position: relative;
      display: none;
      width: 23px;
      height: 15px;
      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 2px;
        background: #222;
        transition: 0.3s;
      }
      &:before {
        top: 0;
      }
      &:after {
        bottom: 0;
      }
      span {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 2px;
        background: #222;
        transition: 0.3s;
      }
      &.active {
        &:before,
        &:after {
          top: 0;
          bottom: 0;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
        span {
          opacity: 0;
        }
      }
    }
    @media screen and (min-width: 768px) {
      padding: 0 3%;
      display: flex;
    }
    @media screen and (max-width: 767px) {
      display: flex;
      align-items: center;
      .menuBtn {
        display: block;
        margin-left: 1.5em;
      }
    }
  `;
  const Gnav = css`
    @media screen and (min-width: 768px) {
      display: flex;
      a {
        position: relative;
        font-size: 18px;
        color: #231f20;
        text-decoration: none !important;
        padding-bottom: 0.5em;
        text-align: center;
        &:after {
          content: "";
          width: 0;
          height: 2px;
          background: #231f20;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transition: 0.2s;
        }
        span {
          display: block;
          font-size: 14px;
          font-weight: 400;
          color: #696969;
        }
        &:hover {
          &:after {
            width: 100%;
          }
        }
        &:not(:first-of-type) {
          margin-left: 2em;
        }
      }
    }
    @media screen and (max-width: 945px) {
      a {
        font-size: 14px;
        span {
          font-size: 12px;
        }
      }
    }
    @media screen and (max-width: 767px) {
      position: absolute;
      top: 100%;
      right: 0;
      margin: auto;
      width: 250px;
      height: calc(100vh - 104px);
      background: #fff;
      z-index: 99;
      padding: 2em;
      box-sizing: border-box;
      transform-origin: center top;
      visibility: hidden;
      transition: 0.3s;
      transform: translateX(250px);
      &.open {
        visibility: visible;
        transform: translateX(0);
        transition: 0.3s;
      }
      a {
        display: block;
        color: #231f20 !important;
        text-decoration: none !important;
        span {
          display: block;
          font-size: 13px;
          color: #696969;
        }
        &:not(:last-child) {
          margin-bottom: 1.5em;
        }
      }
    }
  `;
  const iconLink = css`
    display: flex;
    align-items: center;
    margin-left: 2em;
    a {
      display: block;
      text-decoration: none;
      &:not(:first-of-type) {
        margin-left: 1.5em;
      }
      &.link_x {
        img {
          width: 22px;
        }
      }
      &.link_github {
        img {
          width: 28px;
        }
      }
    }
    @media screen and (max-width: 767px) {
      margin-left: 0;
      a {
        &:last-child {
          margin-left: 1em;
        }
      }
    }
  `;
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false); // リンククリック時にメニューを閉じる
  };
  return (
    <>
      <header className={`${open ? "menuOpen" : ""}`}>
        <div css={Container}>
          <h1 css={Title}>
            <Link to="/">
              <img src="/img/logo.png" alt="Y.MIKIYA.COM" />
            </Link>
          </h1>
          <div css={navWrap}>
            <div css={Gnav} className={`${open ? "open" : ""}`}>
              <Link to="/" onClick={closeMenu}>
                トップ
                <span>Top</span>
              </Link>
              <Link to="/about" onClick={closeMenu}>
                山口幹矢について
                <span>About</span>
              </Link>
              <Link to="/works" onClick={closeMenu}>
                制作事例
                <span>Works</span>
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                お問い合わせ
                <span>Contact</span>
              </Link>
            </div>
            <div css={iconLink}>
              <a
                href="https://x.com/mikiya32131569"
                target="_blank"
                className="link_x"
                rel="noreferrer"
              >
                <img src="/img/icon_x.png" alt="X" />
              </a>
              <a
                href="https://github.com/MikiyaYamaguchi"
                target="_blank"
                className="link_github"
                rel="noreferrer"
              >
                <img src="/img/icon_github.png" alt="X" />
              </a>
            </div>
            <div
              className={`menuBtn${open ? " active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
