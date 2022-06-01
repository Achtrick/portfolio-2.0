import React from 'react'
import { useTranslation } from 'next-i18next';

export default function ContacttUs(props) {
    const { t } = useTranslation('common');
    return (
        <div className='contactus_container'>
            <div className='contactus_content_container'><div className='contactus_content'>
                <h2>{t("contact_title")}</h2>
                <p>{t("contact_description")}</p>
            </div></div>
        </div>
    )
}
