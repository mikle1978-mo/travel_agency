"use client";

import cl from "./transfers.module.css";
import Title from "@/components/layout/Title";
import MyCustomButton from "@/components/UI/MyCustomButton";
import MyCustomModal from "@/components/UI/MyCustomModal";

import FormTransfer from "@/components/UI/FormTransfer";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TransfersPage() {
    const { t } = useTranslation("transfers");
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSuccess = () => {
        setIsOpen(false); // Закрыть модальное окно
    };

    return (
        <>
            <div className={cl.transfers_wrapper}>
                <Title text={t("transfers")} />
                <div className={cl.img_wrapper}>
                    <img
                        src='/images/other/transfers.webp'
                        alt='about'
                        className={cl.transfers_img}
                    />
                </div>
                <MyCustomButton onClick={toggleOpen}>
                    {t("transfers:transfers_btn")}
                </MyCustomButton>
                <div className={cl.transfers_text}>
                    <h2>{t("transfers:title1")}</h2>
                    <p>{t("transfers:text1")}</p>
                    <h2>{t("transfers:title2")}</h2>
                    <p>{t("transfers:text2")}</p>
                    <h2>{t("transfers:title3")}</h2>
                    <p>{t("transfers:text3")}</p>
                    <h2>{t("transfers:title4")}</h2>
                    <p>{t("transfers:text4")}</p>
                    <h2>{t("transfers:title5")}</h2>
                    <p>{t("transfers:text5")}</p>
                    <h2>{t("transfers:title6")}</h2>
                    <p>{t("transfers:text6")}</p>
                    <h2>{t("transfers:title7")}</h2>
                    <p>{t("transfers:text7")}</p>
                </div>
                <MyCustomModal isOpen={isOpen} toggleOpen={toggleOpen}>
                    <FormTransfer onSuccess={handleSuccess} />
                </MyCustomModal>
            </div>
        </>
    );
}
