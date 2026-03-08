import type { IDictionary } from "../../dictionaries/generated";
import stackLogos from "../../stackLogos";
import "./bottom-resume.css";

const BottomResume = ({ dictionary }: { dictionary: IDictionary }) => {
  return (
    <section className="resume-bottom-section">
      <div className="language-div">
        <h3>{dictionary.typescript}</h3>
        <div className="technos-div">
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.android} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.pycharm} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.mySqlWorkbench} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.powerBi} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.powerBi} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.powerBi} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.powerBi} />
          </div>
        </div>
      </div>

      <div className="language-div">
        <h3>{dictionary.kotlin}</h3>
        <div className="technos-div">
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.android} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.pycharm} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.mySqlWorkbench} />
          </div>
        </div>
      </div>
      <div className="language-div">
        <h3>{dictionary.python}</h3>
        <div className="technos-div">
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.android} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.pycharm} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.mySqlWorkbench} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.powerBi} />
          </div>
        </div>
      </div>
      <div className="language-div">
        <h3>{dictionary.other_technos}</h3>
        <div className="technos-div">
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.android} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.pycharm} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.mySqlWorkbench} />
          </div>
          <div className="techno-img-container">
            <img width={"100%"} src={stackLogos.others.items.powerBi} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomResume;
