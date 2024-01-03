// import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

// const inter = Righteous({
//   subsets: ["latin"],
//   weight: ["400"],
// });
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${'aaa'}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid z-0">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/davtahsen-home.jpeg",
    location: "Բարի՜ գալուստ Դավթաշեն",
    description:
      "Դավթաշեն, գյուղ Հայաստանի Արագածոտնի մարզում, Թալինի տարածաշրջանում, ընկած է Թալին-Աշտարակ ավտոմայրուղու վրա, մարզկենտրոնից 40 կմ հեռավորության վրա, Արագածի հարավ-արևտմյան փեշերին։",
    title: "Դավթաշեն",
  },
  {
    img: "/davtashen-history.png",
    title: "Բնակիչներ",
    description:
      "Բնակիչների  նախնիները  եկել  են Արևմտյան Հայաստանի Սասուն գավառից  1919-1923թթ.:1897թ. ուներ 308,1926թ.`226 ,1939թ.`413 ,1959թ.`563 ,1870թ`620 ,1979թ.`710 հայ բնակիչ:",
    location: "Գյուղի հիմնադրումը",
  },
  {
    img: "/davtashen-monument.png",
    title: "Հուշարձան",
    description:
      "Երկրորդ աշխարհամարտի զոհվածների հիշատակին նվիրված հուշարձան 1978 թ.",
    location: "Գյուղի Հուշարձանները",
  },
  {
    img: "/davtashen-monument-club.png",
    title: "Մշակույթ",
    description:
      "Որմնանկար 1983-84թթ նկարիչ՝ Տիգրան Թոքմաջյան",
    location: "Գյուղի Հուշարձանները",
  },
  {
    img: "/davtahsen-mngo.png",
    title: "Պարտեզ",
    description:
      "Առցանց դիմում հնարավոր է ուղարկել, եթե երեխան տվյալ պահի դրությամբ չի հաճախում կամ հերթագրված չէ Երևանի քաղաքապետարանի ենթակայության որևէ մանկապարտեզում:",
    location: "Դավթաշենի Մանկապարտեզ",
  },
  {
    img: "/davtashen-shcool.jpeg",
    title: "Դպրոց",
    description:
      "Դավթաշեն գյուղում առաջին կրթօջախը սկսել է գործել 1928թ:Առաջին աշակերտները Հայոց մեծ եղեռնից հետո գաղթի ճանապարհին ծնված երեխաներն էին:",
    location: "Դավթաշենի միջնակարգ դպրոց",
  },
  {
    img: "/our-team.png",
    title: "Մեր մասին",
    description:
      "At Analysed we think outside the square and utilize creativity. https://analysed.ai",
    location: "Մեր մասին",
  }
];

const initData = sliderData[0];
