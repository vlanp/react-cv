import RoundDiv from "../components/round-div";
import type { IDictionary } from "../dictionaries/generated";
import "./right-resume.css";

const RightResume = ({ dictionary }: { dictionary: IDictionary }) => {
  return (
    <section className="resume-right-section">
      <div id="education">
        <h2>{dictionary.education_section}</h2>
        <div className="education-div">
          <h3>{dictionary.education_title}</h3>
          <p className="small-size-text normal-color-text">
            {dictionary.education_school}
          </p>
          <p className="smaller-size-text normal-color-text">
            {dictionary.education_period}
          </p>
        </div>
      </div>
      <div id="projects">
        <h2>{dictionary.projects_section}</h2>

        <div className="projects-div">
          <RoundDiv>
            <h3>{dictionary.projects1_title}</h3>
            <div className="list-div">
              <b className="smaller-size-text light-color-text">
                {dictionary.projects_desc1}
              </b>
              <ul className="smaller-size-text light-color-text list">
                <li>{dictionary.projects_desc1_feature1}</li>
                <li>{dictionary.projects_desc1_feature2}</li>
                <li>{dictionary.projects_desc1_feature3}</li>
              </ul>
            </div>
          </RoundDiv>
        </div>
      </div>
    </section>
  );
};

export default RightResume;
