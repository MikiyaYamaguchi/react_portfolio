/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CardBox from "../components/CardBox";
import data from "../json/works.json";

import AniTitle from "../components/AniTitle";

import { useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";

interface Work {
  id: number;
  title: string;
  context: string;
  tec: string;
  img: string;
  url: string;
}

const Works = () => {
  const Table = css`
    @media screen and (max-width: 767px) {
      th,
      td {
        font-size: 14px;
        padding: 0.7em 0.4em;
      }
    }
  `;
  const [works, setWorks] = useState<Work[]>([]);
  useEffect(() => {
    // JSONデータをステートにセット
    setWorks(data);
  }, []);

  return (
    <div className="container">
      <h1>
        <AniTitle>
          <span>制</span>
          <span>作</span>
          <span>事</span>
          <span>例</span>
          <span className="sub_txt">Works</span>
        </AniTitle>
      </h1>
      <section>
        <h2>
          <AniTitle>
            <span>実</span>
            <span>務</span>
            <span>で</span>
            <span>の</span>
            <span>制</span>
            <span>作</span>
            <span>事</span>
            <span>例</span>
          </AniTitle>
        </h2>
        <FadeIn>
          <p>
            現職での制作例は、著作権の観点からURLやキャプチャの公開は控えさせていただきます。
            <br />
            下記に幾つかの制作例を、表形式で記載しておきます。
          </p>
          <table css={Table}>
            <thead>
              <tr>
                <th>案件名</th>
                <th>担当業務</th>
                <th>使用技術・環境</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  自社コーポレートサイトリニューアル
                  <br />
                  （株式会社アイフラッグ）
                </td>
                <td>
                  <span className="sp-only sp-table-label">担当業務</span>
                  <span>コーディング</span>
                </td>
                <td>
                  <span className="sp-only sp-table-label">使用技術・環境</span>
                  <span>HTML/CSS、JavaScript、PHP、WordPress、Gulp</span>
                </td>
              </tr>
              <tr>
                <td>
                  自社採用サイト制作
                  <br />
                  （株式会社アイフラッグ）
                </td>
                <td>
                  <span className="sp-only sp-table-label">担当業務</span>
                  <span>コーディング、応募フォーム機能開発</span>
                </td>
                <td>
                  <span className="sp-only sp-table-label">使用技術・環境</span>
                  <span>
                    HTML、CSS（SCSS）、JavaScript、PHP、WordPress、MySQL、Gulp
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  関連会社コーポレートサイトリニューアル
                  <br />
                  （株式会社光通信）
                </td>
                <td>
                  <span className="sp-only sp-table-label">担当業務</span>
                  <span>コーディング</span>
                </td>
                <td>
                  <span className="sp-only sp-table-label">使用技術・環境</span>
                  <span>HTML/CSS、JavaScript、Gulp</span>
                </td>
              </tr>
              <tr>
                <td>
                  ANAグループ会社採用サイト制作
                  <br />
                  （ANAウィングフェローズ・ヴイ王子株式会社）
                </td>
                <td>
                  <span className="sp-only sp-table-label">担当業務</span>
                  <span>コーディング</span>
                </td>
                <td>
                  <span className="sp-only sp-table-label">使用技術・環境</span>
                  <span>HTML/CSS、JavaScript、自社CMS</span>
                </td>
              </tr>
              <tr>
                <td>
                  ペットフードECサイト
                  <br />
                  （株式会社ルイトモ）
                </td>
                <td>
                  <span className="sp-only sp-table-label">担当業務</span>
                  <span>コーディング、テーマ開発</span>
                </td>
                <td>
                  <span className="sp-only sp-table-label">使用技術・環境</span>
                  <span>HTML/CSS、JavaScript、Liquid、shopify</span>
                </td>
              </tr>
              <tr>
                <td>
                  スマホアプリゲーム公式サイト制作
                  <br />
                  （株式会社GrandSoft）
                </td>
                <td>
                  <span className="sp-only sp-table-label">担当業務</span>
                  <span>コーディング</span>
                </td>
                <td>
                  <span className="sp-only sp-table-label">使用技術・環境</span>
                  <span>HTML、CSS（SCSS）、JavaScript、Gulp</span>
                </td>
              </tr>
              <tr>
                <td>
                  新商品LP制作
                  <br />
                  （アートネイチャー）
                </td>
                <td>
                  <span className="sp-only sp-table-label">担当業務</span>
                  <span>コーディング</span>
                </td>
                <td>
                  <span className="sp-only sp-table-label">使用技術・環境</span>
                  <span>HTML、CSS（SCSS）、JavaScript、Gulp</span>
                </td>
              </tr>
            </tbody>
          </table>
        </FadeIn>
      </section>
      <section>
        <h2>
          <AniTitle>
            <span>実</span>
            <span>務</span>
            <span>以</span>
            <span>外</span>
            <span>で</span>
            <span>の</span>
            <span>制</span>
            <span>作</span>
            <span>例</span>
          </AniTitle>
        </h2>
        <div className="row row_inline">
          <FadeIn>
            <p>
              実務以外のプライベートで制作したサイトやWebアプリケーションなどもご紹介します。
              <br />
              個人的に学んだことを活かして制作しました。
              <br />
              業務ではあまり使用しないReactやVueなどをメインに使い、制作しています。
            </p>
          </FadeIn>
        </div>
        <div className="row row_inline">
          {works.map((work) => (
            <div className="col span_6" key={work.id}>
              <FadeIn>
                <CardBox
                  title={work.title}
                  context={work.context}
                  tec={work.tec}
                  img={work.img}
                  url={work.url}
                />
              </FadeIn>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
