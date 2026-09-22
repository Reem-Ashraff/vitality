import React from "react";
import "./quality.css";
import { useTranslation } from "react-i18next";
import qualityEn from "../../locates/en/quality.json";
import qualityAr from "../../locates/ar/quality.json";
import {
  Sprout,
  BadgeCheck,
  UserCheck,
  FileCheck,
  Thermometer,
  ShieldCheck,
  FlaskConicalOff,
  Leaf
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Quality = () => {

    const { t } = useTranslation();
    const iconMap = {
        ShieldCheck,
        UserCheck,
        FileCheck,
        Thermometer,
        FlaskConicalOff,
        Leaf
    };
    const standards = document.documentElement.lang === "ar" ? qualityAr.standards : qualityEn.standards;
    const sectionItems = document.documentElement.lang === "ar" ? qualityAr.section5Items : qualityEn.section5Items;

    return (
        <>
        <Helmet>
            <title>Quality | Vitality</title>
        </Helmet>
        <main className="quality-main">
            <section className="hero-section"></section>
            <div className="hero-shadow"></div>
            <div className="hero-content">
                <h6>{t("quality.head")}</h6>
                <h2>{t("quality.title")}</h2>
                <hr className="hero-line"/>
                <p className="col-12 col-lg-7 col-xl-5">{t("quality.description")}</p>
            </div>

            <section className="quality-section d-flex justify-content-between">
            <div className="col-8">
                <h3>{t("quality.section1-title")}</h3>
                <p>{t("quality.section1-description")}</p>
            </div>
            <div className="col-3 d-flex align-items-center">
                <Sprout className="quality-icon col-12"/>
            </div>
        </section>

        <hr/>

        <section className="quality-section d-flex flex-row-reverse justify-content-between">
            <div className="col-8">
                <h3>{t("quality.section2-title")}</h3>
                <p>{t("quality.section2-description")}</p>
            </div>
            <div className="col-3 d-flex align-items-center">
                <BadgeCheck className="quality-icon col-12"/>
            </div>
        </section>

        <hr/>

        <section className="quality-section d-flex justify-content-between">
            <div className="col-8">
                <h3>{t("quality.section3-title")}</h3>
                <p>{t("quality.section3-description1")} <span>{t("quality.section3-bold")} </span>{t("quality.section3-description2")}</p>
                <p>{t("quality.section3-description3")}</p>
            </div>
            <div className="col-3 d-flex align-items-center">
                <UserCheck className="quality-icon col-12"/>
            </div>
        </section>

        <hr/>

        <section className="standards-section">
                <h3>{t("product.section2-title")}</h3>
                <div className="d-flex flex-wrap justify-content-between">
                    {standards.map((item,index)=>{
                        const Icon = iconMap[item.icon];
                        return(
                            <div key={index} className="standard">
                                <div className="">
                                    <Icon className="item-icon col-3" />
                                    <h6>{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <hr/>

            <section className="natural-section">
                <h3>{t("quality.section5-title")}</h3>
                <p>{t("quality.section5-descripton")}</p>
                <div className="d-flex flex-wrap justify-content-between">
                    {sectionItems.map((item,index)=>{
                        const Icon = iconMap[item.icon];
                        return(
                            <div key={index} className="item">
                                <div className="d-flex">
                                    <Icon className="item-icon col-3" />
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
        </>
    )
}
export default Quality;