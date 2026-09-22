import React from "react";
import "./solutions.css";
import { useTranslation } from "react-i18next";
import solutionsEn from "../../locates/en/solutions.json";
import solutionsAr from "../../locates/ar/solutions.json";
import {
  Leaf,
  ShieldCheck,
  CircleStar
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Solutions = () => {

    const { t } = useTranslation();
    const iconMap = {
        Leaf,
        ShieldCheck,
        CircleStar
    };
    const solutions = document.documentElement.lang === "ar" ? solutionsAr.solutions : solutionsEn.solutions;
    const items = document.documentElement.lang === "ar" ? solutionsAr.items : solutionsEn.items;

    return (
        <>
        <Helmet>
            <title>Solutions | Vitality</title>
        </Helmet>
        <main className="solutions-main">
            <section className="hero-section"></section>
            <div className="hero-shadow"></div>
            <div className="hero-content">
                <h6>{t("solutions.head")}</h6>
                <h2>{t("solutions.title")}</h2>
                <hr className="hero-line"/>
                <p className="col-12 col-lg-7 col-xl-5">{t("solutions.description")}</p>
            </div>

            {solutions.map((solution,index)=>{
                return(
                    <>
                    <section key={index} className="solutions-section">
                        <div className="col-12 col-lg-7">
                        <h3>{solution.name}</h3>
                        <h5>{solution.head}</h5>
                        <p><span>{t("solutions.challenge")}</span><br/>{solution.challenge}</p>
                        <p className="vitality-solution">{t("solutions.vitality-solution")}</p>
                        {solution.descriptions.map((description,index)=>{
                            return(
                                <p key={index}><span>{description.head}</span> {description.description}</p>
                            )
                        })}
                        </div>
                        <div className="col-3 col-md-2 col-lg-4 solution-image">
                            <img src={solution.image} className="w-100 h-auto" alt="solution"/>
                        </div>
                    </section>
                    <hr/>
                    </>
                )
            })}

            <section className="why-solutions-section">
                <h3>{t("solutions.section-title")}</h3>
                <div className="d-flex flex-wrap justify-content-between">
                    {items.map((item,index)=>{
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
export default Solutions;