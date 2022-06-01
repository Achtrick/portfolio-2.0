import React from 'react'
import { useTranslation } from 'next-i18next';

export default function ContactIntro(props) {
    const { t } = useTranslation('common');
    return (
        <section className='about_intro_container'>
            <div className='about_intro_overlay'></div>
            <div className='about_intro_content'>
                <h1>{t("contact_intro_title")}</h1>
                <p>{t("contact_intro_description")}</p>
            </div>
        </section>
    )
}
