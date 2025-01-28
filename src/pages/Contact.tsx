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
          <span>お</span>
          <span>問</span>
          <span>い</span>
          <span>合</span>
          <span>わ</span>
          <span>せ</span>
          <span className="sub_txt">Contact</span>
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
          <form
            css={Form}
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="row">
              <div className="col span_3">
                <label htmlFor="name">お名前</label>
              </div>
              <div className="col span_9">
                <input type="text" name="name" id="name" required />
              </div>
            </div>
            <div className="row">
              <div className="col span_3">
                <label htmlFor="email">メールアドレス</label>
              </div>
              <div className="col span_9">
                <input type="email" name="email" id="email" required />
              </div>
            </div>
            <div className="row">
              <div className="col span_3">
                <label htmlFor="tel">電話番号</label>
              </div>
              <div className="col span_9">
                <input type="tel" name="tel" id="tel" required />
              </div>
            </div>
            <div className="row">
              <div className="col span_3">
                <label htmlFor="message">お問い合わせ内容</label>
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
                <input
                  type="text"
                  name="bot-field"
                  style={{ display: "none" }}
                />
                <button type="submit">送信する</button>
              </div>
            </div>
          </form>
        </FadeIn>
      </section>
    </div>
  );
};

export default Contact;
