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
  const Table = css`
    thead {
      th {
        &:nth-child(1) {
          width: 23%;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 62%;
        }
      }
    }
    @media screen and (max-width: 767px) {
      th,
      td {
        font-size: 14px;
        padding: 0.7em 0.4em;
      }
      thead {
        th {
          &:nth-child(1) {
            width: 25%;
          }
          &:nth-child(2) {
            width: 20%;
          }
          &:nth-child(3) {
            width: 55%;
          }
        }
      }
      tbody {
        tr {
          td {
            span {
              display: block;
              width: 76%;
            }
            .sp-table-label {
              width: 20%;
            }
          }
        }
      }
    }
  `;
  return (
    <div className="container">
      <h1>
        <AniTitle>
          <span>山</span>
          <span>口</span>
          <span>幹</span>
          <span>矢</span>
          <span>に</span>
          <span>つ</span>
          <span>い</span>
          <span>て</span>
          <span className="sub_txt">About</span>
        </AniTitle>
      </h1>
      <section>
        <h2>
          <AniTitle>
            <span>は</span>
            <span>じ</span>
            <span>め</span>
            <span>に</span>
          </AniTitle>
        </h2>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <p>
                初めまして。
                <br />
                Webエンジニアをしております、山口幹矢です。
                <br />
                現在は受託のホームページ制作会社でエンジニアをしています。
                <br />
                主な業務は、中小から大手まで様々な企業のホームページやECサイトのコーディングを担当しています。
                <br />
                担当する案件も医療・美容・飲食・教育・土木・建築・不動産など多岐にわたります。
                <br />
                HTML、CSSを用いたコーディングはもちろんのこと、JavaScriptやPHPなどを使ったプログラム構築も可能です。
                <br />
                コーディング業務に加え、会社の新規商材の開発にエンジニアとして携わったり、業務プロセスを効率化する、案件依頼フォームや顧客向けの契約申し込みフォームの開発、また社内の業務の効率化を図るための便利ツールの開発などもしています。
                <br />
                また、サブマネージャーとして、コーダーチームをまとめるようなこともしています。
                <br />
                <br />
                エンジニア職になって、6年目になりますが、まだまだ未熟でわからないことも多いので、日々勉強に勤しんでおります。
                <br />
                プライベートでは、本業ではあまり扱わないVueやReactなどの学習を行い、学んだ技術で成果物を作ったりしています。
                <br />
                新しい技術を常に学び、エンジニアとしてできることを増やすことを意識して、日々邁進しております。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <section>
        <h2>
          <AniTitle>
            <span>プ</span>
            <span>ロ</span>
            <span>フ</span>
            <span>ィ</span>
            <span>ー</span>
            <span>ル</span>
          </AniTitle>
        </h2>
        <div className="row">
          <div className="col span_6">
            <FadeIn>
              <figure>
                <img src="/img/about_img.jpg" alt="Y.MIKIYA" loading="lazy" />
              </figure>
            </FadeIn>
          </div>
          <div className="col span_6">
            <FadeIn delay={500}>
              <p css={nameTxt}>Y.MIKIYA</p>
              <p>職種 : Webエンジニア・コーダー</p>
              <p>所在地 : 千葉県</p>
              <p>年齢：29</p>
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
                  href="https://www.my-nombiri-tec-blog.jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.my-nombiri-tec-blog.jp/
                </a>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <section>
        <h2>
          <AniTitle>
            <span>ス</span>
            <span>キ</span>
            <span>ル</span>
          </AniTitle>
        </h2>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>言語</h3>
              <table css={Table}>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>期間</th>
                    <th>レベル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HTML、CSS（SCSS）</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>5年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        数多くのサイト制作経験を通じて、コーディングに一定の経験を積んできました。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>5年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        VanillaJSやjQueryでのプログラミングに一定の経験を積んできました。React（Next）やVue（Nuxt）での開発も可能で、NodeフレームワークのExpressによるREST
                        API開発なども経験済みです。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>TypeScript</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>2年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        基本的なプログラムの構築が可能です。
                        <br />
                        VueやReactをTypeScriptで開発することが可能です。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>3年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>基本的なプログラムの構築が可能です。</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>フレームワーク・ライブラリ</h3>
              <table css={Table}>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>期間</th>
                    <th>レベル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>jQuery</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>5年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        数多くのサイト制作の中で、豊富なjQueryの使用経験があります。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>React.js</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>2年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        学習中ですが、自力で制作物を作ることが可能です。
                        <br />
                        本サイトもReactで制作しました。
                        <br />
                        また、実務でも使用経験があります。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Next.js</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>1年未満</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        学集中です。プライベートで成果物を制作したりしています。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Vue.js</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>2年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        学集中です。プライベートで成果物を制作したりしています。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Nuxt.js</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>2年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        学集中です。プライベートで成果物を制作したりしています。
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>データベース</h3>
              <table css={Table}>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>期間</th>
                    <th>レベル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MySQL</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>3年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        基本的な環境構築とデータベース操作が可能です。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>PostgreSQL</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>3年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        基本的な環境構築とデータベース操作が可能です。
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>CMS</h3>
              <table css={Table}>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>期間</th>
                    <th>レベル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>WordPress</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>5年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        数多くのサイト制作の中での、豊富な使用経験があります。
                        <br />
                        複雑なカスタマイズや拡張機能の開発、テーマ開発など、多様な開発経験があります。
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Shopify</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>2年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>
                        実務での制作経験があります。テーマ開発やカスタマイズの経験もあります。
                        <br />
                        テーマ開発では、顧客のユーザビリティを考えたセクション開発や機能実装を行いました。
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
        <div className="row">
          <div className="col span_12">
            <FadeIn>
              <h3>その他</h3>
              <table css={Table}>
                <thead>
                  <tr>
                    <th>種類</th>
                    <th>期間</th>
                    <th>レベル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Git</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>5年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>GitHubやGitLabの使用経験があります。</span>
                    </td>
                  </tr>
                  <tr>
                    <td>PhotoShop・illustrator・XD</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>5年以上</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>基本的な操作のみ可能です。</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Figma</td>
                    <td>
                      <span className="sp-only sp-table-label">期間</span>
                      <span>1年未満</span>
                    </td>
                    <td>
                      <span className="sp-only sp-table-label">レベル</span>
                      <span>基本的な操作のみ可能です。</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </FadeIn>
          </div>
        </div>
      </section>
      <section>
        <h2>
          <AniTitle>
            <span>沿</span>
            <span>革</span>
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
              <p className="context">明治学院高等学校へ進学。</p>
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
                HTML5とCSS3、JavaScriptを独学で学び始める。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2019年</p>
              <p className="context">
                都内のホームページ制作会社に新卒で入社する。
                <br />
                自由で学びやすい環境を求め、転職を決意。
                <br />
                転職活動の末、現在のホームページ制作会社へ入社する。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2020年</p>
              <p className="context">コロナの影響でリモートワークになる。</p>
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
                JavaScriptのフレームワークであるVueの学習を始める。
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2022年</p>
              <p className="context">
                勉強中のVueやNuxtなどを用いてアプリケーションやポートフォリオの制作などに勤しむ。
                <br />
              </p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2023年</p>
              <p className="context">Reactの学習を始める。</p>
            </FadeIn>
          </div>
          <div className="content">
            <FadeIn>
              <p className="year">2024年</p>
              <p className="context">
                会社にて、サブマネージャーに昇格。
                <br />
                通常の制作業務に加えて、チームのエンジニアのスキルアップの施策を行ったり、業務効率化ツールを開発したりなど、会社への貢献に尽力する。
                <br />
                Nextの学習を始める。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
