/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Route, Routes, useLocation } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Works from "../pages/Works";

const MainContent = () => {
  const Container = css`
    min-height: calc(100vh - (148px + 56.5px));
    padding: 20px;
    box-sizing: border-box;
    @media screen and (max-width: 767px) {
      min-height: calc(100vh - (103px + 56.5px));
    }
    a {
      text-decoration: none;
      color: #231f20;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      line-height: 1.4;
      letter-spacing: 1.8px;
      margin: 0.5em 0 1em;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  `;
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const contentWrapMain = css`
    position: relative;
    z-index: 0;
    &:after {
      content: "";
      width: 15%;
      height: 400px;
      position: absolute;
      right: 0;
      bottom: -66px;
      margin: auto;
      z-index: -1;
      background: #e7d4b5;
      @media screen and (max-width: 767px) {
        width: 6%;
      }
      @media screen and (max-height: 899px) {
        height: 300px;
      }
      @media screen and (max-height: 699px) {
        height: 250px;
      }
    }
  `;
  const contentWrap = css`
    position: relative;
    z-index: 0;
    &:before,
    &:after {
      content: "";
      width: 15%;
      height: 400px;
      position: absolute;
      margin: auto;
      z-index: -1;
      background: #e7d4b5;
      @media screen and (max-width: 767px) {
        width: 6%;
      }
      @media screen and (max-height: 899px) {
        height: 300px;
      }
      @media screen and (max-height: 699px) {
        height: 250px;
      }
    }
    &:after {
      right: 0;
      bottom: -66px;
    }
    &:before {
      left: 0;
      top: 50px;
      @media screen and (max-width: 767px) {
        top: 35px;
      }
    }
  `;
  return (
    <div css={isHomePage ? contentWrapMain : contentWrap}>
      <div css={Container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
