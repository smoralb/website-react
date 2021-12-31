import './App.css';
import SectionHeader from './components/section-header/sectionHeader';
import SectionItem from './components/section-item/sectionItem';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <body>
      <div className="App"/>
      <SectionHeader/>
      <SectionItem title = {t("studies_degree_title")} college = {t("studies_degree_college")} 
      date = {t("studies_degree_date")} description = {t("studies_degree_description")} />
      <SectionItem title = {t("studies_course_android_title")} college = {t("studies_course_android_college")} 
      date = {t("studies_course_android_date")} description = {t("studies_course_android_description")} />
      <SectionItem title = {t("studies_course_web_title")} college = {t("studies_course_web_college")} 
      date = {t("studies_course_web_date")} description = {t("studies_course_web_description")} />
    </body>
    )
}