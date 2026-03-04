import type { IDictionary } from "../dictionaries/generated";
import useItemsContext from "../hooks/useItemsContext";
import type { IItemId } from "../zustand/useItemsStore";
import "./right-resume.css";

const RightResume = ({ dictionary }: { dictionary: IDictionary }) => {
  const itemsStates = useItemsContext((state) => state.itemsStates);

  const educationItemsStates = Object.keys(itemsStates).filter(
    (key) =>
      key.startsWith("educations") &&
      itemsStates[key as keyof typeof itemsStates],
  ) as IItemId<"educations">[];

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
              const key = itemId.split(
                "_",
              )[1] as keyof IDictionary["educations"]["items"];
              return (
                <div key={itemId} className="education-div">
                  <h3>{dictionary.educations.items[key].title}</h3>
                  <p className="small-size-text normal-color-text">
                    {dictionary.educations.items[key].school}
                  </p>
                  <p className="smaller-size-text normal-color-text">
                    {dictionary.educations.items[key].period}
                  </p>
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
              const key = itemId.split(
                "_",
              )[1] as keyof IDictionary["projects"]["items"];
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
