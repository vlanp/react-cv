import type { IDictionary } from "../../dictionaries/generated";
import useItemsContext from "../../hooks/useItemsContext";
import type { IItemId } from "../../zustand/useItemsStore";
import "./right-resume.css";

const RightResume = ({ dictionary }: { dictionary: IDictionary }) => {
  const itemsStates = useItemsContext((state) => state.itemsStates);

  const educationItemsStates = Object.keys(itemsStates).filter(
    (key) =>
      key.startsWith("educations") &&
      itemsStates[key as keyof typeof itemsStates],
  ) as IItemId<"educations">[];

  const experienceItemsStates = Object.keys(itemsStates).filter(
    (key) =>
      key.startsWith("experiences") &&
      itemsStates[key as keyof typeof itemsStates],
  ) as IItemId<"experiences">[];

  const projectsItemsStates = Object.keys(itemsStates).filter(
    (key) =>
      key.startsWith("projects") &&
      itemsStates[key as keyof typeof itemsStates],
  ) as IItemId<"projects">[];

  return (
    <section className="resume-right-section">
      {educationItemsStates.length > 0 && (
        <div id="education">
          <h2>{dictionary.educations.title}</h2>
          <div className="educations-div">
            {educationItemsStates.map((itemId) => {
              const splitted = itemId.split("_");
              const key = splitted[
                splitted.length - 1
              ] as keyof IDictionary["educations"]["items"];
              return (
                <div key={itemId} className="education-div">
                  <h3>{dictionary.educations.items[key].title}</h3>
                  <p className="small-size-text light-color-text">
                    {dictionary.educations.items[key].school}
                  </p>
                  <p className="smaller-size-text light-color-text">
                    {dictionary.educations.items[key].period}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {experienceItemsStates.length > 0 && (
        <div id="experience">
          <h2>{dictionary.experiences.title}</h2>
          <div className="experiences-div">
            {experienceItemsStates.map((itemId) => {
              const splitted = itemId.split("_");
              const key = splitted[
                splitted.length - 1
              ] as keyof IDictionary["experiences"]["items"];
              return (
                <div key={itemId} className="experience-div">
                  <h3>{dictionary.experiences.items[key].title}</h3>
                  <p className="small-size-text light-color-text">
                    {dictionary.experiences.items[key].company}
                  </p>
                  <p className="smaller-size-text light-color-text">
                    {dictionary.experiences.items[key].period}
                  </p>
                  <p className="smaller-size-text light-color-text">
                    {dictionary.experiences.items[key].skills.title}
                  </p>
                  <ul className="smaller-size-text light-color-text list">
                    {Object.values(
                      dictionary.experiences.items[key].skills.items,
                    ).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {projectsItemsStates.length > 0 && (
        <div id="projects">
          <h2>{dictionary.projects.title}</h2>
          <div className="projects-div">
            {projectsItemsStates.map((itemId) => {
              const splitted = itemId.split("_");
              const key = splitted[
                splitted.length - 1
              ] as keyof IDictionary["projects"]["items"];
              return (
                <div key={itemId} className="project-div">
                  <h3>{dictionary.projects.items[key].title}</h3>
                  <div className="list-div">
                    <b className="smaller-size-text light-color-text">
                      {dictionary.projects.items[key].descriptions.title}
                    </b>
                    <ul className="smaller-size-text light-color-text list">
                      {Object.values(
                        dictionary.projects.items[key].descriptions.items,
                      ).map((desc) => (
                        <li key={desc}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default RightResume;
