import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";
import aboutEn from "../../locates/en/about.json";
import aboutAr from "../../locates/ar/about.json";
import {
  Leaf,
  ShieldCheck,
  Sprout,
  Eye,
  Target,
  ChartNoAxesCombined,
  Users
} from "lucide-react";

const About = () => {

    const { t } = useTranslation();
    const iconMap = {
        ShieldCheck,
        Leaf,
        Target,
        Eye,
        ChartNoAxesCombined,
        Users
    };
    const items = document.documentElement.lang === "ar" ? aboutAr.section2Items : aboutEn.section2Items;
    const qualityItems = document.documentElement.lang === "ar" ? aboutAr.section4Items : aboutEn.section4Items;

    return (
        <>
        <main className="about-main">
            <section className="hero-section"></section>
            <div className="hero-shadow"></div>
            <div className="hero-content">
                <h6>{t("about.about")}</h6>
                <h2>{t("about.title")}</h2>
                <hr className="hero-line"/>
                <p className="col-12 col-lg-7 col-xl-5">{t("about.description")}</p>
            </div>

            <section className="heritage-section">
                <h3>{t("about.section1-title")}</h3>
                <p><span>{t("about.vitality")}</span> {t("about.section1-description1")}</p>
                <p>{t("about.section1-description2")}</p>
            </section>

            <hr/>

            <section className="mission-section">
                <h3>{t("about.section2-title")}</h3>
                <div className="d-flex justify-content-between flex-wrap">
                    {items.map((item,index)=>{
                        const Icon = iconMap[item.icon];
                        return(
                            <div key={index} className="item">
                                <Icon className="item-icon col-3" />
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <hr/>

            <section className="quality-mindset-section">
                <h3>{t("about.section3-title")}</h3>
                <p>{t("about.section3-description1")}</p>
                <p>{t("about.section3-description2")}<span> {t("about.section3-bold")}</span>{t("about.section3-description3")}</p>
                <p>{t("about.section3-description4")}</p>
            </section>

            <hr/>

            <section className="quality-commitment-section">
                <h3>{t("about.section4-title")}</h3>
                <div className="d-flex justify-content-between flex-wrap">
                    {qualityItems.map((item,index)=>{
                        const Icon = iconMap[item.icon];
                        return(
                            <div key={index} className="item">
                                <Icon className="item-icon col-3" />
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <hr/>

            <section className="partnership-section d-flex justify-content-between">
                <div className="col-8">
                    <h3>{t("about.section5-title")}</h3>
                    <p>{t("about.section5-description")}</p>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <Sprout className="partnership-icon col-12"/>
                </div>
            </section>
        </main>
        </>
    )
}
export default About;