/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  const copyRight = css`
    padding: 20px;
    p {
      text-align: left;
      font-size: 14px;
      color: #696969;
      margin: 0;
    }
  `;
  return (
    <footer>
      <div css={copyRight}>
        <p>Copyright © 山口幹矢 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
