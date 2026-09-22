import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom";
import homeEn from "../../locates/en/home.json";
import homeAr from "../../locates/ar/home.json";
import SpotlightImage from "../../assets/spotlight-img.PNG";
import {
  Leaf,
  ShieldCheck,
  ShieldPlus,
  Globe,
  CircleStar,
  Sprout,
  Earth
} from "lucide-react";

const Home = () => {

    const { t } = useTranslation();
    const iconMap = {
        ShieldCheck,
        Leaf,
        ShieldPlus,
        Globe,
        CircleStar
    };
    const solutions = document.documentElement.lang === "ar" ? homeAr.solutions : homeEn.solutions;
    const benefits = document.documentElement.lang === "ar" ? homeAr.productBenefits : homeEn.productBenefits;
    const whyItems = document.documentElement.lang === "ar" ? homeAr.whyItems : homeEn.whyItems;

    return (
        <>
        <main className="home-main">
            <section className="hero-section"></section>
            <div className="hero-shadow"></div>
            <div className="hero-content d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-between first-line">
                    <p>{t("home.paragraph1")}</p>
                    <p>{t("home.paragraph2")}</p>
                </div>
                <div className="main-content">
                    <h1>{t("home.bold")}</h1>
                    <p>{t("home.description")}</p>
                </div>
            </div>

            <section className="home-about-section">
                <h3>{t("home.about")}</h3>
                <h5>{t("home.about-head")}</h5>
                <p>{t("home.description1")}</p>
                <p>{t("home.description2")}</p>
                <h5>{t("home.description3")}</h5>
                <Link to="/about"><button>{t("home.more1")}</button></Link>
            </section>

            <hr/>

            <section className="what-section">
                <h3>{t("home.what")}</h3>
                <h5>{t("home.what-head")}</h5>
                <div className="d-flex justify-content-between flex-wrap">
                    {solutions.map((solution,index)=>{
                        return(
                            <div key={index} className="solution">
                                <img src={solution.image} alt="solution"/>
                                <h6>{solution.name}</h6>
                                <p>{solution.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <hr/>

            <section className="home-product-section">
                <h3>{t("home.product-spotlight")}</h3>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="col-12 col-xl-7">
                        <h5>{t("home.product-head")}</h5>
                        <p>{t("home.product-description")}</p>
                        <div>
                            {benefits.map((benefit,index)=>{
                                const Icon = iconMap[benefit.icon];
                                return(
                                    <div key={index} className="benefit d-flex align-items-center">
                                        <Icon className="benefit-icon col-3" />
                                        <div>
                                            <h6>{benefit.title}</h6>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="dosage">{t("home.standard-dosage")}<span> {t("home.dosage")}</span></div>
                        <Link to="/product"><button>{t("home.product-btn")}</button></Link>
                    </div>
                    <div className="col-4 SpotlightImage">
                        <img src={SpotlightImage} className="w-100 h-auto" alt="img"/>
                    </div>
                </div>
            </section>

            <hr/>

            <section className="why-section">
                <h3>{t("home.why")}</h3>
                    <div className="">
                        <h5>{t("home.why-head")}</h5>
                        <div className="d-flex flex-wrap justify-content-between">
                            {whyItems.map((item,index)=>{
                                const Icon = iconMap[item.icon];
                                return(
                                    <div key={index} className="why-item d-flex align-items-center">
                                        <Icon className="item-icon col-3" />
                                        <div>
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            </section>

            <hr/>

            <section className="home-quality-section d-flex justify-content-between">
                <div className="col-8">
                    <h3>{t("home.quality")}</h3>
                    <h5>{t("home.quality-head")}</h5>
                    <p>{t("home.quality-description1")}</p>
                    <h5>{t("home.quality-description2")}</h5>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <Sprout className="quality-icon col-12"/>
                </div>
            </section>

            <hr/>

            <section className="commitment-section d-flex justify-content-between">
                <div className="col-8">
                    <h3>{t("home.commitment")}</h3>
                    <h5>{t("home.commitment-head")}</h5>
                    <p>{t("home.commitment-description")}</p>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <Earth className="commitment-icon col-12"/>
                </div>
            </section>

            <hr/>

            <section className="cta-section">
                <div className="background">
                    <div className="shadow"></div>
                    <div className="cta-content">
                        <h5>{t("home.cta-head")}</h5>
                        <p>{t("home.cta-description")}</p>
                        <Link to="/contact"><button>{t("home.product-btn")}</button></Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
export default Home;