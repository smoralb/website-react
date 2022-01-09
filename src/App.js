import './App.css'
import SectionHeader from './components/section-header/sectionHeader'
import SectionItem from './components/section-item/sectionItem'
import SectionContact from './components/section-contact/sectionContact'
import SectionExperience from './components/section-experience/sectionExperience'
import SectionFooter from './components/section-footer/sectionFooter'
import SectionPageHeader from './components/section-page-header/sectionPageHeader'
import { useTranslation } from 'react-i18next'

export default function App () {
  const { t, i18n } = useTranslation()

  var studies = t('studies', { returnObjects: true })

  return (
    <div className='App'>
      <SectionPageHeader />

      <SectionHeader title={t('studies_title')} />

      {studies.map(item => (
        <SectionItem item={item} />
      ))}

      <SectionContact
        title={t('contact.title')}
        mail={t('contact.mail')}
        location={t('contact.location')}
        phone={t('contact.phone')}
        image={'images/portrait-mobile.jpeg'}
      />

      <SectionHeader title={t('work-experience.title')} />

      <SectionExperience
        position={'left'}
        role={t('work-experience.ok_role')}
        company={t('work-experience.ok_company')}
        date={t('work-experience.ok_date')}
        description={t('work-experience.ok_description')}
      ></SectionExperience>

      <SectionExperience
        position={'right'}
        role={t('work-experience.ipd_role')}
        company={t('work-experience.ipd_company')}
        date={t('work-experience.ipd_date')}
        description={t('work-experience.ipd_description')}
      ></SectionExperience>

      <SectionExperience
        position={'left'}
        role={t('work-experience.acc_role')}
        company={t('work-experience.acc_company')}
        date={t('work-experience.acc_date')}
        description={t('work-experience.acc_description')}
      ></SectionExperience>

      <SectionExperience
        position={'right'}
        role={t('work-experience.tm_role')}
        company={t('work-experience.tm_company')}
        date={t('work-experience.tm_date')}
        description={t('work-experience.tm_description')}
      ></SectionExperience>

      <SectionExperience
        position={'left'}
        role={t('work-experience.bb_role')}
        company={t('work-experience.bb_company')}
        date={t('work-experience.bb_date')}
        description={t('work-experience.bb_description')}
      ></SectionExperience>

      <SectionFooter />
    </div>
  )
}
