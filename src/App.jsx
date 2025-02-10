import React from "react";
import blue from "./assets/blue-sts.svg";
import brain from "./assets/brain-img.svg";
import green from "./assets/green-sts.svg";
import logo from "./assets/logo.svg";
import mainimg from "./assets/main-img.png";
import mainsts from "./assets/main-sts.svg";
import old from "./assets/old-sts.svg";
import red from "./assets/red-sts.svg";
import treade from "./assets/treade-sts.svg";
import yellow from "./assets/yellow-sts.svg";
import blueblock from "./assets/blue-block.svg";
import graylong from "./assets/gray-long.svg";
import blulongblock from "./assets/blue-long-block.svg";
import skillmainimg from "./assets/skills-main-img.svg";
import qrkod from "./assets/qrCode.svg";
import saksonbesh from "./assets/85foiz.svg";
import yettimushbesh from "./assets/75foiz.svg";
import ottizuch from "./assets/33foiz.svg";
import yuz from "./assets/100foiz.svg";
import toqsonsakkiz from "./assets/98foiz.svg";
import qirqbesh from "./assets/45foiz.svg";

function App() {
  return (
    <div className="container">
      {/* ========================Header============= */}
      <header className="header__container ">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <h2 className="header__logo--title">
            Давлат хизматининг <br /> ягона электрон ахборот- <br /> таҳлил
            тизими
          </h2>
        </div>
        <h1 className="header__title">
          Республика Ассессмент маркази <br /> онлайн платформаси
        </h1>
        <div className="header__info">
          <span className="header__info--title">78</span>
        </div>
      </header>

      {/* ==================Main=============== */}

      <div className="main__container container">
        <div className="main__right">
          <img src={mainimg} alt="main img" />
          <div className="main__right--info">
            <h2>
              <b>Азамат Шарипов</b> <br />
              Абдуллажон угли
            </h2>
            <div className="right__info--small-wrapper">
              <span>
                Тугилган сана: <b>30.09.1997 йил</b>
              </span>
              <span>
                Тугилган жой: <b>Чуст ш., Наманган.</b>
              </span>
            </div>
            <div className="right__info--big-wrapper">
              <span>
                Буйи:
                <b>175см</b>
              </span>
              <span>
                Вазни:
                <b>70кг</b>
              </span>
              <span>
                Индекс:
                <b>22,9</b>
              </span>
              <img src={mainsts} alt="" />
            </div>
          </div>
        </div>
        <div className="main__left">
          <p>
            Лавозими: <br />
            Қорақалпоғистон Республикаси <br /> Камбағалликни қисқартириш ва
            бандлик <br /> вазири уринбосари <br />
            <br />
            Номзод: <br />
            Қорақалпоғистон Республикаси <br /> Камбағалликни қисқартириш ва
            бандлик <br /> вазири
          </p>
        </div>
      </div>

      {/* sts */}

      <div className="sts__container container">
        <div className="sts__title">
          <img src={blueblock} alt="" />
          <h2>Билим тести</h2>
          <img src={graylong} alt="" />
        </div>

        <div className="sts-wrapper">
          <div className="sts-imgs">
            <div className="sts-imgs-wrapper">
              <div className="sts-img">
                <img src={red} alt="red" />
                <h2>33%</h2>
                <p>Конституциявий-хукукий саводхонлик</p>
              </div>
              <div className="sts-img">
                <img src={green} alt="green" />
                <h2>78%</h2>
                <p>Ахборот-коммуникация технологиялари</p>
              </div>
              <div className="sts-img">
                <img src={green} alt="green" />
                <h2>79%</h2>
                <p>Турли сохадаги ислохотлардан хабардорлик</p>
              </div>
              <div className="sts-img">
                <img src={yellow} alt="yellow" />
                <h2>48%</h2>
                <p>Узбек тили ва адабиёти</p>
              </div>
              <div className="sts-img">
                <img src={blue} alt="blue" />
                <h2>100%</h2>
                <p>
                  Узбекистон тарихи <br /> ва маданияти
                </p>
              </div>
              <div className="sts-img">
                <img src={yellow} alt="yellow" />
                <h2>55%</h2>
                <p>Аклий салохияти ва мантикий фикрлаш</p>
              </div>
            </div>
          </div>
          <div className="sts-all">
            <div className="all-right">
              <img src={treade} alt="" />
              <h2>78%</h2>
              <div className="all-right__foiz">
                <span>Умумий натижа</span>
              </div>
            </div>
            <div className="all-left">
              <div className="all-left__top">
                <img src={brain} alt="brain" />
                <p>
                  {" "}
                  <b>90 фоиз</b> иштирокчидан яхширок натижа
                </p>
              </div>
              <img src={old} alt="old" />
            </div>
          </div>
        </div>
      </div>

      {/* skillls */}

      <div className="skills__container container">
        <div className="skills__title">
          <img src={blueblock} alt="" />
          <h2>Шахсий ва касбий хусусиятлар</h2>
          <img src={graylong} alt="" />
        </div>
        <div className="skills__main">
          <div className="skills__main--sts-left">
            <div className="skill--wrapper">
              <h2>Эмоционал интеллект</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>90%</span>
              </div>
            </div>
            <div className="skill--wrapper">
              <h2>Креативлик</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>95%</span>
              </div>
            </div>
            <div className="skill--wrapper">
              <h2>Ходимларга йуналганлик</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>75%</span>
              </div>
            </div>
            <div className="skill--wrapper">
              <h2>Максадга интилувчанлик</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>86%</span>
              </div>
            </div>
          </div>
          <div className="skills__main--img">
            <img src={skillmainimg} alt="" />
          </div>
          <div className="skills__main--sts-right">
            <div className="skill--wrapper">
              <h2>Топширикларга йуналганлик</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>95%</span>
              </div>
            </div>
            <div className="skill--wrapper">
              <h2>Фаол ижтимоий муносабатлар</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>75%</span>
              </div>
            </div>
            <div className="skill--wrapper">
              <h2>Уз устида ишлаш</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>86%</span>
              </div>
            </div>
            <div className="skill--wrapper">
              <h2>Муаммоли вазиятга йуналганлик</h2>
              <div className="skill--smal-wrapper">
                <img src={blulongblock} alt="" />
                <span>86%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desc */}

      <div className="description__container container">
        <div className="sts__title">
          <img src={blueblock} alt="" />
          <h2>Психологик диагностика</h2>
          <img src={graylong} alt="" />
        </div>

        <div className="description__main">
          <p className="desc-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,{" "}
          </p>
          <p className="desc-right">
            {" "}
            a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
          </p>
        </div>
      </div>

      {/*  */}

      <footer className="footter__container container">
        <div className="sts__title">
          <img src={blueblock} alt="" />
          <h2>Психологик диагностика</h2>
          <img src={graylong} alt="" />
        </div>

        <div className="footer__main">
          <div className="footer__left">
            <div className="wrapper-end">
              <img src={saksonbesh} alt="" />
              <h2>Стратегик фикрлаш</h2>
            </div>
            <div className="wrapper-end">
              <img src={yettimushbesh} alt="" />
              <h2>Натижага йуналганлик</h2>
            </div>
            <div className="wrapper-end">
              <img src={ottizuch} alt="" />
              <h2>Узгаришларни бошкариш</h2>
            </div>
            <div className="wrapper-end">
              <img src={yuz} alt="" />
              <h2>Лидерлик</h2>
            </div>
            <div className="wrapper-end">
              <img src={toqsonsakkiz} alt="" />
              <h2>Уз-узини ривожлан-тириш</h2>
            </div>
            <div className="wrapper-end">
              <img src={qirqbesh} alt="" />
              <h2>Коммуника-тивлик</h2>
            </div>
          </div>
          <div className="footer__right">
            <img src={qrkod} alt="" />
          </div>
        </div>
        <h3 className="end--text">Argos.uz 2024 & TOHIRJONOV</h3>
      </footer>

      {/*  */}
    </div>
  );
}

export default App;
