import React from "react";
import "./contact.css";
import { useTranslation } from "react-i18next";
import contactEn from "../../locates/en/contact.json";
import contactAr from "../../locates/ar/contact.json";

const Contact = () => {

    const { t } = useTranslation();
    const locations = document.documentElement.lang === "ar" ? contactAr.locations : contactEn.locations;

    return (
        <>
        <main className="contact-main">
            <section className="hero-section"></section>
            <div className="hero-shadow"></div>
            <div className="hero-content">
                <h6>{t("contact.head")}</h6>
                <h2>{t("contact.title")}</h2>
                <hr className="hero-line"/>
                <p className="col-12 col-lg-7 col-xl-5">{t("contact.description")}</p>
            </div>

            <section className="contact-section">
                <h3>{t("contact.section1-title")}</h3>
                <p>{t("contact.section1-description")}</p>
            </section>

            <hr/>

            <section className="contact-info-section d-flex flex-wrap">
                <div className="col-12 col-md-6 locations">
                    <h3>{t("contact.locations-title")}</h3>
                    {locations.map((location,index)=>{
                        return(
                        <div className="d-flex align-items-center info" key={index}>
                            <i className="bi bi-geo-alt-fill"></i>
                            <div>
                                <h5>{location.title}</h5>
                                <p>{location.location}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="col-12 col-md-6">
                    <h3>{t("contact.details")}</h3>
                    <div className="d-flex align-items-center info">
                        <i className="bi bi-telephone-fill"></i>
                        <div>
                            <h5>{t("contact.mobile-title")}</h5>
                            <p>{t("contact.mobile")}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center info">
                        <i className="bi bi-whatsapp"></i>
                        <div>
                            <h5>{t("contact.whatsapp-title")}</h5>
                            <p>{t("contact.whatsapp")}</p>
                        </div>
                </div>
                <div className="d-flex align-items-center info">
                        <i className="bi bi-envelope-fill"></i>
                        <div>
                            <h5>{t("contact.email-title")}</h5>
                            <p>{t("contact.email")}</p>
                        </div>
                </div>
                </div>
            </section>
        </main>
        </>
    )
}
export default Contact;