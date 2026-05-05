import type { IDictionary } from "../../dictionaries/generated";
import useCategoryItemsContext from "../../hooks/useCategoryItemsContext";
import type { ICategoryItemId } from "../../zustand/createCategoryItemsStore";
import "./right-resume.css";

const RightResume = ({ dictionary }: { dictionary: IDictionary }) => {
  const categoryitemsStates = useCategoryItemsContext(
    (state) => state.categoryItemsStates,
  );

  const educationItemsId = Object.keys(categoryitemsStates).filter(
    (key) =>
      key.startsWith("educations") &&
      categoryitemsStates[key as keyof typeof categoryitemsStates],
  ) as ICategoryItemId<"educations">[];

  const experienceItemsId = Object.keys(categoryitemsStates).filter(
    (key) =>
      key.startsWith("experiences") &&
      categoryitemsStates[key as keyof typeof categoryitemsStates],
  ) as ICategoryItemId<"experiences">[];

  return (
    <section className="resume-right-section">
      {educationItemsId.length > 0 && (
        <div id="education">
          <h2>{dictionary.educations.title}</h2>
          <div className="educations-div">
            {educationItemsId.map((itemId) => {
              const splitted = itemId.split("_");
              const key = splitted[
                splitted.length - 1
              ] as keyof IDictionary["educations"]["items"];
              return (
                <div key={itemId} className="education-div">
                  <h3>{dictionary.educations.items[key].title}</h3>
                  <div className="education-place-div">
                    <p className="small-size-text mid-color-text">
                      {dictionary.educations.items[key].school}
                    </p>
                    <p className="smaller-size-text mid-color-text">
                      {dictionary.educations.items[key].period}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {experienceItemsId.length > 0 && (
        <div id="experience">
          <h2>{dictionary.experiences.title}</h2>
          <div className="experiences-div">
            {experienceItemsId.map((itemId) => {
              const splitted = itemId.split("_");
              const key = splitted[
                splitted.length - 1
              ] as keyof IDictionary["experiences"]["items"];
              return (
                <div key={itemId} className="experience-div">
                  <h3>{dictionary.experiences.items[key].title}</h3>
                  <div className="experience-place-div">
                    <p className="small-size-text mid-color-text">
                      {dictionary.experiences.items[key].company}
                    </p>
                    <p className="smaller-size-text mid-color-text">
                      {dictionary.experiences.items[key].period}
                    </p>
                  </div>
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
    </section>
  );
};

export default RightResume;
