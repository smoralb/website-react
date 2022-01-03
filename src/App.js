import './App.css'
import SectionHeader from './components/section-header/sectionHeader'
import SectionItem from './components/section-item/sectionItem'
import SectionContact from './components/section-contact/sectionContact'
import { useTranslation } from 'react-i18next'

export default function App () {
  const { t, i18n } = useTranslation()

  return (
    <body>
      <div className='App' />
      <SectionHeader title={t('studies.title')} />
      <SectionItem
        title={t('studies.studies_degree_title')}
        college={t('studies.studies_degree_college')}
        date={t('studies.studies_degree_date')}
        description={t('studies.studies_degree_description')}
      />
      <SectionItem
        title={t('studies.studies_course_android_title')}
        college={t('studies.studies_course_android_college')}
        date={t('studies.studies_course_android_date')}
        description={t('studies.studies_course_android_description')}
      />
      <SectionItem
        title={t('studies.studies_course_web_title')}
        college={t('studies.studies_course_web_college')}
        date={t('studies.studies_course_web_date')}
        description={t('studies.studies_course_web_description')}
      />

      <SectionContact
        title={t('contact.title')}
        mail={t('contact.mail')}
        location={t('contact.location')}
        phone={t('contact.phone')}
      />
    </body>
  )
}
