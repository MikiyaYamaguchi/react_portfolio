/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import AniTitle from "../components/AniTitle";

import FadeIn from "../components/FadeIn";

const Contact = () => {
  const Form = css`
    input,
    textarea {
      width: 90%;
      box-sizing: border-box;
      padding: 0.4em;
      font-size: 16px;
      border: 1px solid #707070;
      resize: none;
    }
    button {
      display: block;
      margin: 0 auto;
      background: #e7d4b5;
      border: none;
      font-size: 18px;
      width: 100%;
      max-width: 400px;
      padding: 0.8em;
      cursor: pointer;
    }
    @media screen and (max-width: 767px) {
      input,
      textarea {
        width: 100%;
      }
      button {
        font-size: 16px;
      }
      .row {
        .col {
          margin-bottom: 0.5em;
        }
      }
    }
  `;
  return (
    <div className="container">
      <h1>
        <AniTitle>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </AniTitle>
      </h1>
      <section>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <p>
                私に少しでも興味を持っていただけたのならば、是非下記フォームでお問い合わせください。何でも大歓迎です。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <section>
        <FadeIn>
          <form css={Form} action="">
            <div className="row">
              <div className="col span_3">
                <p>お名前</p>
              </div>
              <div className="col span_9">
                <input type="text" name="name" required />
              </div>
            </div>
            <div className="row">
              <div className="col span_3">
                <p>メールアドレス</p>
              </div>
              <div className="col span_9">
                <input type="email" name="email" required />
              </div>
            </div>
            <div className="row">
              <div className="col span_3">
                <p>電話番号</p>
              </div>
              <div className="col span_9">
                <input type="tel" name="tel" required />
              </div>
            </div>
            <div className="row">
              <div className="col span_3">
                <p>お問い合わせ内容</p>
              </div>
              <div className="col span_9">
                <textarea
                  name="message"
                  id="message"
                  rows={12}
                  required
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col span_12">
                <button>送信する</button>
              </div>
            </div>
          </form>
        </FadeIn>
      </section>
    </div>
  );
};

export default Contact;
