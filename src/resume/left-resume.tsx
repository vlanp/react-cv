import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaHourglassStart,
} from "react-icons/fa6";
import type { IDictionary } from "../dictionaries/generated";
import "./left-resume.css";
import { getAge } from "../utils";
import { useMemo } from "react";

const LeftResume = ({ dictionary }: { dictionary: IDictionary }) => {
  const age = useMemo(() => getAge("1997-12-30"), []);
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
          <h2>{dictionary.about_section}</h2>
          <p className="small-size-text normal-color-text text-with-icon">
            <FaHourglassStart className="icon" />
            {age}
            <span>{dictionary.age}</span>
          </p>
          <p className="small-size-text normal-color-text text-with-icon">
            <FaLocationDot className="icon" />
            <span>{dictionary.address}</span>
          </p>
          <a
            href="mailto:vguillaumedev@gmail.com"
            className="small-size-text normal-color-text text-with-icon hover"
          >
            <FaEnvelope className="icon" />
            vguillaumedev@gmail.com
          </a>
          <a
            href="tel:+33659447134"
            className="small-size-text normal-color-text text-with-icon hover"
          >
            <FaPhone className="icon" />
            06.59.44.71.34
          </a>
        </div>
        <div className="social-div" id="social">
          <h2>{dictionary.social_section}</h2>
          <a
            href="https://github.com/vlanp"
            target="_blank"
            className="small-size-text normal-color-text text-with-icon hover"
          >
            <FaGithub className="icon" />
            @vlanp
          </a>
          <a
            href="https://linkedin.com/in/valentin-guillaume-b3b9742ab"
            target="_blank"
            className="small-size-text normal-color-text text-with-icon hover"
          >
            <FaLinkedin className="icon" />
            bit.ly/3Bfq99B
          </a>
        </div>
        <div className="profile-div" id="profile">
          <h2>{dictionary.profile_section}</h2>
          <p className="normal-size-text normal-color-text">
            {dictionary.profile_description}
          </p>
        </div>
        <div className="experience-div" id="experience">
          <h2>{dictionary.experience_section}</h2>
          <h3>{dictionary.experience_title}</h3>
          <p>{dictionary.experience_company}</p>
          <span className="smaller-size-text light-color-text">
            <p>{dictionary.experience_skills}</p>
            <ul className="list">
              <li>{dictionary.experience_skill1}</li>
              <li>{dictionary.experience_skill2}</li>
              <li>{dictionary.experience_skill3}</li>
              <li>{dictionary.experience_skill4}</li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LeftResume;
