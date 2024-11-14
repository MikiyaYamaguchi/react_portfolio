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
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
          <span>s</span>
        </AniTitle>
      </h1>
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
