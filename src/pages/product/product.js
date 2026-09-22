import React from "react";
import "./product.css";
import { useTranslation } from "react-i18next";
import productEn from "../../locates/en/product.json";
import productAr from "../../locates/ar/product.json";
import {
  Leaf,
  ShieldCheck,
  ShieldPlus,
  ShieldAlert,
  Virus,
  Droplet
} from "lucide-react";

const Product = () => {

    const { t } = useTranslation();
    const iconMap = {
        Leaf,
  ShieldCheck,
  ShieldPlus,
  ShieldAlert,
  Virus,
  Droplet
    };
    const section1Items = document.documentElement.lang === "ar" ? productAr.section1Items : productEn.section1Items;
    const advantages = document.documentElement.lang === "ar" ? productAr.advantages : productEn.advantages;
    const solutions = document.documentElement.lang === "ar" ? productAr.solutions : productEn.solutions;

    return (
        <>
        <main className="product-main">
            <section className="hero-section"></section>
            <div className="hero-shadow"></div>
            <div className="hero-content">
                <h6>{t("product.product")}</h6>
                <h2>{t("product.title")}</h2>
                <hr className="hero-line"/>
                <p className="col-12 col-md-9 col-lg-7 col-xl-5">{t("product.description")}</p>
            </div>

            <section className="overview-section">
                <h3>{t("product.section1-title")}</h3>
                <h5>{t("product.section1-head")}</h5>
                <p><span>{t("product.section1-bold1")}</span> {t("product.section1-description1")}</p>
                <p><span>{t("product.section1-bold2")}</span> {t("product.section1-description2")}</p>
                <div className="d-xxl-flex justify-content-between flex-wrap items-div">
                    {section1Items.map((item,index)=>{
                        return(
                            <div key={index}>{item}</div>
                        )
                    })}
                </div>
            </section>

            <hr/>

            <section className="advantages-section">
                <h3>{t("product.section2-title")}</h3>
                <div className="d-flex flex-wrap justify-content-between">
                    {advantages.map((item,index)=>{
                        const Icon = iconMap[item.icon];
                        return(
                            <div key={index} className="advantage">
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

            <hr/>

            <section className="sectors-section">
                <h3>{t("product.section3-title")}</h3>
                <div className="d-flex flex-wrap justify-content-between">
                    {solutions.map((solution,index)=>{
                        return(
                            <div key={index} className="sector">
                                <div className="d-flex align-items-center">
                                    <img src={solution.image} alt="solution"/>
                                    <h6>{solution.name}</h6>
                                </div>
                                <div className="sector-description">
                                {solution.descriptions.map((description,index)=>{
                                    return(
                                        <p><span>{description.head}</span> {description.description}</p>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <hr/>

            <section className="specifications-section">
                <h3>{t("product.section4-title")}</h3>
                <p><span>{t("product.standard-dosage")}</span> {t("product.dosage")}</p>
                <p><span>{t("product.treatment")}</span> {t("product.treatment-description")}</p>
                <p><span>{t("product.safety")}</span> {t("product.safety-description")}</p>
                <p><span>{t("product.storage")}</span> {t("product.storage-description")}</p>
            </section>
        </main>
        </>
    )
}
export default Product;