/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {
  title: string;
  context: string;
  tec: string;
  img: string;
  url: string;
};

const CardBox = ({ title, context, tec, img, url }: Props) => {
  const card = css`
    a {
      text-decoration: none !important;
      figure {
        position: relative;
        height: 0;
        padding-top: 65%;
        overflow: hidden;
        border: 1px solid #ccc;
        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: 0.3s;
        }
      }
      &:hover {
        figure {
          img {
            transform: scale(1.1);
          }
        }
      }
      p {
        font-size: 16px;
        color: #707070;
        margin-top: 0;
        margin-bottom: 0.5em;
        @media screen and (max-width: 767px) {
          font-size: 15px;
        }
        &.tec {
          font-size: 14px;
          margin-top: 0;
          color: #a9a9a9;
        }
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 0.5em;
        margin-bottom: 0.3em;
        @media screen and (max-width: 767px) {
          font-size: 18px;
        }
      }
    }
  `;
  return (
    <div css={card}>
      <a href={url} target="_blank" rel="noreferrer">
        <figure>
          <img src={`/img/` + img} alt={title} loading="lazy" />
        </figure>
        <p className="title">{title}</p>
        <p>{context}</p>
        <p className="tec">使用技術・環境：{tec}</p>
      </a>
    </div>
  );
};

export default CardBox;
