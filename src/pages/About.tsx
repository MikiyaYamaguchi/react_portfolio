/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import FadeIn from "../components/FadeIn";

import AniTitle from "../components/AniTitle";

const About = () => {
  const nameTxt = css`
    font-size: 26px;
    font-weight: bold;
  `;
  const history = css`
    position: relative;
    border-left: 1px solid #222;
    padding-left: 7%;
    &:after {
      content: "";
      border-bottom: 1px solid #222;
      width: 30px;
      height: 20px;
      position: absolute;
      left: -13px;
      bottom: 8px;
      transform: rotate(-50deg);
      margin: auto;
    }
    @media screen and (max-width: 767px) {
      &:after {
        width: 20px;
        height: 10px;
        left: -8px;
        bottom: 5px;
      }
    }
    .content {
      &:not(:last-child) {
        margin-bottom: 5%;
      }
      .year {
        color: #a9a9a9;
        margin-bottom: 0.2em;
        font-weight: bold;
      }
      .context {
        margin-top: 0;
      }
    }
  `;
  return (
    <div className="container">
      <h1>
        <AniTitle>
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </AniTitle>
      </h1>
      <section>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <p>
                初めまして。
                <br />
                Webエンジニアをしております、Y.MIKIYAです。
                <br />
                Y.MIKIYAのポートフォリオサイトにお越しいただき、ありがとうございます。
                <br />
                普段は都内のWeb制作会社に勤務しております。
                <br />
                普段の業務では、コーポレートサイト制作や、ECサイト制作など、サイト制作のフロントエンド業務を行なっております。
                <br />
                <br />
                エンジニア職になって、5年目になりますが、まだまだ未熟でわからないことも多いので、日々勉強に勤しんでおります。
                <br />
                このポートフォリオサイトでは、私の保有スキルや成果物などを掲載しております。
                <br />
                このサイトはReact.jsで制作しました。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <section>
        <h2>
          <AniTitle>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>f</span>
            <span>i</span>
            <span>l</span>
            <span>e</span>
          </AniTitle>
        </h2>
        <div className="row">
          <div className="col span_6">
            <FadeIn>
              <figure>
                <img src="/img/about_img.jpg" alt="Y.MIKIYA" />
              </figure>
            </FadeIn>
          </div>
          <div className="col span_6">
            <FadeIn delay={500}>
              <p css={nameTxt}>Y.MIKIYA</p>
              <p>職種 : Webエンジニア（フロントエンド）</p>
              <p>所在地 : 千葉県</p>
              <p>年齢：28</p>
              <p>出身大学：学習院大学（史学科）</p>
              <p>趣味：映画鑑賞、筋トレ</p>
              <p>
                X（旧Twiiter）：
                <a
                  href="https://twitter.com/mikiya32131569"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://twitter.com/mikiya32131569
                </a>
              </p>
              <p>
                Git Hub：
                <a
                  href="https://github.com/MikiyaYamaguchi"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/MikiyaYamaguchi
                </a>
              </p>
              <p>
                技術ブログ：
                <a
                  href="https://www.dailyupblog.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.dailyupblog.com/
                </a>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <section>
        <h2>
          <AniTitle>
            <span>H</span>
            <span>i</span>
            <span>s</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
            <span>y</span>
          </AniTitle>
        </h2>
        <div css={history}>
          <div className="content">
            <FadeIn>
              <p className="year">1996年</p>
              <p className="context">神奈川県川崎市で生まれる。</p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2009年</p>
              <p className="context">中学校でテニス部に所属。</p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2012年</p>
              <p className="context">高校でも相変わらず、テニス部に所属。</p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2015年</p>
              <p className="context">
                学習院大学へ進学。
                <br />
                歴史に興味があったため、史学科へ進む。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2018年</p>
              <p className="context">
                就活の最中、web制作に興味を抱く。
                <br />
                HTML5とCSS、JavaScriptを独学で学び始める。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2019年</p>
              <p className="context">
                都内のweb制作会社に新卒で入社する。
                <br />
                自由で学びやすい環境を求め、転職を決意。
                <br />
                転職活動の末、現在のweb制作会社へ入社する。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2020年</p>
              <p className="context">
                コロナの影響でリモートワークになる。
                <br />
                学べる時間が増えたため、vue.jsやreact.jsなどのJavaScriptのフレームワークを勉強し始める。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2021年</p>
              <p className="context">
                知識の集積とアウトプットのためにブログサイト「
                <a
                  href="https://www.dailyupblog.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Daily up
                </a>
                」を制作する。
                <br />
                node.jsでのWeb
                API制作やPostgreSQLでのデータベース構築など、バックエンド分野の勉強も始める。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2022年</p>
              <p className="context">
                勉強中のvue.jsやnode.jsなどを用いてアプリケーションやポートフォリオの制作などに勤しむ。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2024年</p>
              <p className="context">
                会社にて、サブマネージャーに昇格。
                <br />
                通常の制作業務に加えて、チームのエンジニアのスキルアップの施策を行ったり、業務効率化ツールを開発したりなど、会社への貢献に尽力する。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <section>
        <h2>
          <AniTitle>
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
          </AniTitle>
        </h2>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>実務経験あり</h3>
              <p>
                HTML・CSSコーディング、WordPressでのサイト制作、JavaScript（jQueryも使用）でのプログラミング、React.jsを使ったツール開発、PHPを使ったサーバーサイドのプログラミン、shopifyのテーマ制作
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>実務経験なし</h3>
              <p>
                Vue.js・Nuxt.jsでのSPA・SSR開発、Node.jsでのサーバーサイドのプログラミング、PostgreSQLでのデータベース操作
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>言語</h3>
              <p>
                HTML5、CSS3、JavaScript（Vue.js・Nuxt.js、React.js、Node.js）、TyepScript、PHP、PostgreSQL
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>その他スキル</h3>
              <p>Gitの使用、PhotoShop・illustrator・XDの使用</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
