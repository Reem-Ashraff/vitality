import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../assets/logo.PNG"
import { useTranslation } from "react-i18next";

const Header = () => {

    const { t,i18n } = useTranslation();

    const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");

    if (navbar && navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    }

    const toggler = document.querySelector(".navbar-toggler");

    if (toggler) {
        toggler.setAttribute("aria-expanded", "false");
    }
    };

    const changeLanguage = (e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
        closeMenu();
    };

    return (
        <>
        <header className="d-flex align-items-center justify-content-between">
            <nav className="navbar navbar-expand-lg d-flex align-items-center justify-content-between m-0 p-0">
                <div className="col-4 col-md-2 col-lg-3 d-flex align-items-center head">
                    <div className="col-3 col-md-4 col-lg-2"><img src={Logo} className="w-100 h-auto" alt="logo"/></div>
                    <h2 className="mb-0">{t("header.vitality")}</h2>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex align-items-lg-center justify-content-lg-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/home" className="text-decoration-none link" activeClassName="active" onClick={closeMenu}><li>{t("header.home")}</li></NavLink>
                        <NavLink to="/about" className="text-decoration-none link" activeClassName="active" onClick={closeMenu}><li>{t("header.about")}</li></NavLink>
                        <NavLink to="/product" className="text-decoration-none link" activeClassName="active" onClick={closeMenu}><li>{t("header.products")}</li></NavLink>
                        <NavLink to="/solutions" className="text-decoration-none link" activeClassName="active" onClick={closeMenu}><li>{t("header.solutions")}</li></NavLink>
                        <NavLink to="/quality" className="text-decoration-none link" activeClassName="active" onClick={closeMenu}><li>{t("header.quality")}</li></NavLink>
                        <NavLink to="/contact" className="text-decoration-none link" activeClassName="active" onClick={closeMenu}><li>{t("header.contact")}</li></NavLink>
                    </ul>
                    <select value={i18n.language} onChange={(e) => changeLanguage(e)}>
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </select>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Header;