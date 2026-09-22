import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.PNG"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom";
import solutionsEn from "../../locates/en/home.json";
import solutionsAr from "../../locates/ar/home.json";

const Footer = () => {

    const { t } = useTranslation();
    const solutions = document.documentElement.lang === "ar" ? solutionsAr.solutions : solutionsEn.solutions;

    return (
        <footer className="d-flex flex-wrap">

            <div className="col-12 col-xl-4 logo-div">
                <div className="col-12 d-flex align-items-center head">
                    <div className="logo"><img src={Logo} className="w-100 h-auto" alt="logo"/></div>
                    <h2 className="mb-0">{t("footer.vitality")}</h2>
                </div>
                <p>{t("footer.description")}</p>
            </div>

            <div className="col-12 col-xl-2 quick-links">
                <h3>{t("footer.links")}</h3>
                <ul className="mb-0 p-0 d-flex flex-row flex-xl-column">
                    <Link to="/home" className="text-decoration-none link"><li>{t("header.home")}</li></Link>
                    <Link to="/about" className="text-decoration-none link"><li>{t("header.about")}</li></Link>
                    <Link to="/product" className="text-decoration-none link"><li>{t("header.products")}</li></Link>
                    <Link to="/solutions" className="text-decoration-none link"><li>{t("header.solutions")}</li></Link>
                    <Link to="/quality" className="text-decoration-none link"><li>{t("header.quality")}</li></Link>
                    <Link to="/contact" className="text-decoration-none link"><li>{t("header.contact")}</li></Link>
                </ul>
            </div>

            <div className="col-12 col-xl-2 solutions-div">
                <h3>{t("footer.solutions")}</h3>
                <ul className="mb-0 p-0 d-flex flex-row flex-xl-column">
                    {solutions.map((solution,index)=>{
                        return(
                            <li key={index}>{solution.name}</li>
                        )
                    })}
                </ul>
            </div>

            <div className="col-12 col-xl-4 contact-div">
                <h3>{t("footer.contact")}</h3>
                <div className="d-flex align-items-center info">
                    <i className="bi bi-telephone-fill"></i>
                    <p>{t("contact.mobile")}</p>
                </div>
                <div className="d-flex align-items-center info">
                    <i className="bi bi-whatsapp"></i>
                    <p>{t("contact.whatsapp")}</p>
                </div>
                <div className="d-flex align-items-center info">
                    <i className="bi bi-envelope-fill"></i>
                    <p>{t("contact.email")}</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;