import './App.css'
import SectionHeader from './components/section-header/sectionHeader'
import SectionItem from './components/section-item/sectionItem'
import SectionContact from './components/section-contact/sectionContact'
import SectionExperience from './components/section-experience/sectionExperience'
import SectionFooter from './components/section-footer/sectionFooter'
import SectionPageHeader from './components/section-page-header/sectionPageHeader'
import { useTranslation } from 'react-i18next'
import _ from 'lodash'

export default function App () {
  const { t } = useTranslation()

  return (
    <div className='App'>
      <SectionPageHeader />

      <SectionHeader title={t('studies_title')} />

      {_.map(t('studies', { returnObjects: true }), item => {
        return <SectionItem item={item} />
      })}

      <SectionContact
        title={t('contact.title')}
        mail={t('contact.mail')}
        location={t('contact.location')}
        phone={t('contact.phone')}
        image={'images/portrait-mobile.jpeg'}
      />

      <SectionHeader title={t('work_experience_title')} />

      {_.map(t('work_experience', { returnObjects: true }), (item, index) => {
        return <SectionExperience item={item} position={getPosition(index)} />
      })}

      <SectionFooter />
    </div>
  )
}

function getPosition (value) {
  if (value % 2 == 0) return 'left'
  else return 'right'
}
