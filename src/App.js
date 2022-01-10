import React from "react";
import { useTranslation } from "react-i18next";

import SectionHeader from "./components/section-header/sectionHeader";
import SectionItem from "./components/section-item/sectionItem";
import SectionContact from "./components/section-contact/sectionContact";
import SectionExperience from "./components/section-experience/sectionExperience";
import SectionFooter from "./components/section-footer/sectionFooter";
import SectionPageHeader from "./components/section-page-header/sectionPageHeader";
import "./App.css";

export default function App() {
  const { t } = useTranslation();

  const studies = t("studies", { returnObjects: true });
  const work_experience = t("work_experience", { returnObjects: true });

  return (
    <div className="App">
      <SectionPageHeader />

      <SectionHeader title={t("studies_title")} />

      {studies &&
        studies.length > 0 &&
        studies.map((item) => {
          return (
            <React.Fragment key={item.title}>
              <SectionItem item={item} />
            </React.Fragment>
          );
        })}

      <SectionContact
        title={t("contact.title")}
        mail={t("contact.mail")}
        location={t("contact.location")}
        phone={t("contact.phone")}
        image={"images/portrait-mobile.jpeg"}
      />

      <SectionHeader title={t("work_experience_title")} />

      {work_experience &&
        work_experience.length > 0 &&
        work_experience.map((item, index) => {
          return (
            <React.Fragment key={item.company}>
              <SectionExperience item={item} position={getPosition(index)} />
            </React.Fragment>
          );
        })}

      <SectionFooter />
    </div>
  );
}

function getPosition(value) {
  if (value % 2 == 0) return "left";
  else return "right";
}
