import CardBox from "../components/CardBox";
import data from "../json/works.json";

import AniTitle from "../components/AniTitle";

import { useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";

interface Work {
  id: number;
  title: string;
  context: string;
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
                <td>ANAグループ会社採用サイト</td>
                <td>コーディング</td>
                <td>HTML/CSS、JavaScript、自社CMS</td>
              </tr>
              <tr>
                <td>光通信株式会社コーポレートサイトリニューアル</td>
                <td>コーディング</td>
                <td>HTML/CSS、JavaScript、gulp</td>
              </tr>
              <tr>
                <td>ナチュラルサプリミートECサイト</td>
                <td>コーディング、テーマ開発</td>
                <td>HTML/CSS、JavaScript、Liquid、shopify</td>
              </tr>
              <tr>
                <td>株式会社アイフラッグサイトリニューアル</td>
                <td>コーディング、応募フォーム機能開発</td>
                <td>HTML/CSS、JavaScript、PHP、WordPress、gulp</td>
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
