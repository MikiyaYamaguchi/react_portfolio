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
          <table>
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
                <td>コーディング</td>
                <td>HTML/CSS、JavaScript、PHP、WordPress、Gulp</td>
              </tr>
              <tr>
                <td>
                  自社採用サイト制作
                  <br />
                  （株式会社アイフラッグ）
                </td>
                <td>コーディング、応募フォーム機能開発</td>
                <td>
                  HTML、CSS（SASS）、JavaScript、PHP、WordPress、MySQL、Gulp
                </td>
              </tr>
              <tr>
                <td>
                  関連会社コーポレートサイトリニューアル
                  <br />
                  （株式会社光通信）
                </td>
                <td>コーディング</td>
                <td>HTML/CSS、JavaScript、Gulp</td>
              </tr>
              <tr>
                <td>
                  ANAグループ会社採用サイト制作
                  <br />
                  （ANAウィングフェローズ・ヴイ王子株式会社）
                </td>
                <td>コーディング</td>
                <td>HTML/CSS、JavaScript、自社CMS</td>
              </tr>
              <tr>
                <td>
                  ペットフードECサイト
                  <br />
                  （株式会社ルイトモ）
                </td>
                <td>コーディング、テーマ開発</td>
                <td>HTML/CSS、JavaScript、Liquid、shopify</td>
              </tr>
              <tr>
                <td>
                  スマホアプリゲーム公式サイト制作
                  <br />
                  （株式会社GrandSoft）
                </td>
                <td>コーディング</td>
                <td>HTML、CSS（SASS）、JavaScript、Gulp</td>
              </tr>
              <tr>
                <td>
                  商品LPコーディング
                  <br />
                  （アートネイチャー）
                </td>
                <td>コーディング</td>
                <td>HTML、CSS（SASS）、JavaScript、Gulp</td>
              </tr>
            </tbody>
          </table>
        </FadeIn>
      </section>
      <section>
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
