import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaHourglassStart,
  FaLink,
  FaCar,
} from "react-icons/fa6";
import type { IDictionary } from "../dictionaries/generated";
import "./left-resume.css";
import { getAge } from "../utils";
import { useMemo } from "react";
import useItemsContext from "../hooks/useItemsContext";
import type { IItemId } from "../zustand/useItemsStore";

const LeftResume = ({ dictionary }: { dictionary: IDictionary }) => {
  const age = useMemo(() => getAge("1997-12-30"), []);
  const itemsStates = useItemsContext((state) => state.itemsStates);

  const softSkillsItemsStates = Object.keys(itemsStates).filter(
    (key) =>
      key.startsWith("soft_skills") &&
      itemsStates[key as keyof typeof itemsStates],
  ) as IItemId<"soft_skills">[];

  return (
    <section className="resume-left-section">
      <div className="header-div" id="header">
        <h1>
          Valentin <b>GUILLAUME</b>
        </h1>
        <p className="normal-size-text normal-color-text">
          {dictionary.profession}
        </p>

        <p className="small-size-text normal-color-text">
          <span>{dictionary.research_1}</span>
          <br />
          <span>{dictionary.research_2}</span>
        </p>
      </div>
      <div className="body-div">
        <div className="personal-information-div" id="personal-information">
          <h2>{dictionary.about.title}</h2>
          <p className="small-size-text light-color-text text-with-icon">
            <FaHourglassStart className="icon" />
            {age}
            <span>{dictionary.about.age}</span>
          </p>
          <p className="small-size-text light-color-text text-with-icon">
            <FaLocationDot className="icon" />
            <span>{dictionary.about.address}</span>
          </p>
          <a
            href="mailto:vguillaumedev@gmail.com"
            className="small-size-text light-color-text text-with-icon hover"
          >
            <FaEnvelope className="icon" />
            vguillaumedev@gmail.com
          </a>
          <a
            href="tel:+33659447134"
            className="small-size-text light-color-text text-with-icon hover"
          >
            <FaPhone className="icon" />
            06.59.44.71.34
          </a>
          <p className="small-size-text light-color-text text-with-icon">
            <FaCar className="icon" />
            <span>{dictionary.about.driving_licence}</span>
          </p>
        </div>
        <div className="social-div" id="social">
          <h2>{dictionary.social.title}</h2>
          <a
            href="https://github.com/vlanp"
            target="_blank"
            className="small-size-text light-color-text text-with-icon hover"
          >
            <FaGithub className="icon" />
            @vlanp
          </a>
          <a
            href="https://linkedin.com/in/valentin-guillaume-b3b9742ab"
            target="_blank"
            className="small-size-text light-color-text text-with-icon hover"
          >
            <FaLinkedin className="icon" />
            bit.ly/3Bfq99B
          </a>
          <a
            href="https://portfolio-v2-puce-ten.vercel.app/"
            target="_blank"
            className="small-size-text light-color-text text-with-icon hover"
          >
            <FaLink className="icon" />
            bit.ly/432CbOl
          </a>
        </div>
        <div className="profile-div" id="profile">
          <h2>{dictionary.profile.title}</h2>
          <p className="normal-size-text light-color-text justified-text">
            {dictionary.profile.description}
          </p>
        </div>
        {softSkillsItemsStates.length > 0 && (
          <div className="soft-skills-div" id="soft-skills">
            <h2>{dictionary.soft_skills.title}</h2>
            <ul className="list small-size-text light-color-text">
              {softSkillsItemsStates.map((itemId) => {
                const splitted = itemId.split("_");
                const key = splitted[
                  splitted.length - 1
                ] as keyof IDictionary["soft_skills"]["items"];
                return (
                  <li key={itemId}>
                    {dictionary.soft_skills.items[key].title}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeftResume;
