import RoundDiv from "../components/round-div";
import type { IDictionary } from "../dictionaries/generated";
import "./right-resume.css";
import androidStudio from "../assets/pictures/devicon/androidstudio-original-wordmark.png";
import kotlin from "../assets/pictures/devicon/kotlin-original-wordmark.png";
import hilt from "../assets/pictures/devicon/android-hilt.png";
import osmdroid from "../assets/pictures/devicon/OSMDROID.png";
import selenium from "../assets/pictures/devicon/python-sélénium.png";
import pyCharm from "../assets/pictures/devicon/PyCharm.png";
import mySqlWorkbench from "../assets/pictures/devicon/mysql_workbench_service_provider_india.png";
import python from "../assets/pictures/devicon/python.png";
import chatGpt from "../assets/pictures/devicon/chatgpt.png";
import customTkinter from "../assets/pictures/devicon/custom-tkinter.png";
import powerBi from "../assets/pictures/devicon/power-bi.png";
import tor from "../assets/pictures/devicon/tor.png";
import typescript from "../assets/pictures/devicon/typescript.png";
import vscode from "../assets/pictures/devicon/vscode.png";
import expo from "../assets/pictures/devicon/expo.png";
import react from "../assets/pictures/devicon/react.png";
import reactNative from "../assets/pictures/devicon/react-native.png";
import mongoDb from "../assets/pictures/devicon/MongoDB.png";
import express from "../assets/pictures/devicon/express.png";
import zustand from "../assets/pictures/devicon/zustand.png";
import axios from "../assets/pictures/devicon/axios.png";
import cloudinary from "../assets/pictures/devicon/cloudinary.png";
import northflank from "../assets/pictures/devicon/northflank.png";
import nodeJs from "../assets/pictures/devicon/nodejs-logo.png";
import html from "../assets/pictures/devicon/HTML5_logo_and_wordmark.svg.png";
import css from "../assets/pictures/devicon/CSS3_logo_and_wordmark.svg.png";
import vite from "../assets/pictures/devicon/vite.png";
import netlify from "../assets/pictures/devicon/Netlify.png";
import github from "../assets/pictures/devicon/GitHub-Logo.png";

const RightResume = ({ dictionary }: { dictionary: IDictionary }) => {
  return (
    <section className="resume-right-section">
      <div id="education">
        <h2>{dictionary.education_section}</h2>
        <div className="education-div">
          <h3>{dictionary.education_title}</h3>
          <p className="small-size-text">{dictionary.education_school}</p>
          <p className="smaller-size-text normal-color-text">
            {dictionary.education_period}
          </p>
        </div>
      </div>
      <div id="projects">
        <h2>{dictionary.projects_section}</h2>

        <div className="projects-div">
          <RoundDiv>
            <div>
              <h3>{dictionary.projects_title1}</h3>
              <div className="all_technos">
                <div className="techno-img-container">
                  <img width={"100%"} src={androidStudio} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={kotlin} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={hilt} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={osmdroid} />
                </div>
              </div>
            </div>

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

          <RoundDiv>
            <div>
              <h3>{dictionary.projects_title2}</h3>
              <div className="all_technos">
                <div className="techno-img-container">
                  <img width={"100%"} src={selenium} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={pyCharm} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={mySqlWorkbench} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={python} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={chatGpt} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={customTkinter} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={tor} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={powerBi} />
                </div>
              </div>
            </div>

            <div className="list-div">
              <b className="smaller-size-text light-color-text">
                {dictionary.projects_desc2}
              </b>
              <ul className="smaller-size-text light-color-text list">
                <li>{dictionary.projects_desc2_feature1}</li>
                <li>{dictionary.projects_desc2_feature2}</li>
              </ul>
              <b className="smaller-size-text light-color-text">
                {dictionary.projects_desc3}
              </b>
              <ul className="smaller-size-text light-color-text list">
                <li>{dictionary.projects_desc3_feature1}</li>
                <li>{dictionary.projects_desc3_feature2}</li>
                <li>{dictionary.projects_desc3_feature3}</li>
                <li>{dictionary.projects_desc3_feature4}</li>
              </ul>
            </div>
          </RoundDiv>

          <RoundDiv>
            <div>
              <h3>{dictionary.projects_title3}</h3>
              <div className="all_technos">
                <div className="techno-img-container">
                  <img width={"100%"} src={typescript} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={vscode} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={expo} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={react} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={reactNative} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={mongoDb} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={express} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={zustand} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={axios} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={cloudinary} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={northflank} />
                </div>
                <div className="techno-img-container">
                  <img width={"100%"} src={nodeJs} />
                </div>
              </div>
            </div>

            <div className="list-div">
              <b className="smaller-size-text light-color-text">
                {dictionary.projects_desc4}
              </b>
              <ul className="smaller-size-text light-color-text list">
                <li>{dictionary.projects_desc4_feature1}</li>
                <li>{dictionary.projects_desc4_feature2}</li>
                <li>{dictionary.projects_desc4_feature3}</li>
                <li>{dictionary.projects_desc4_feature4}</li>
                <li>{dictionary.projects_desc4_feature5}</li>
              </ul>
            </div>
          </RoundDiv>
        </div>
      </div>
      <div id="other-skills">
        <h2>{dictionary.other_skills_section}</h2>
        <div className="other-skills-div">
          <div className="all_technos">
            <div className="techno-img-little-container">
              <img height={"100%"} src={html} />
            </div>
            <div className="techno-img-little-container">
              <img height={"100%"} src={css} />
            </div>
            <div className="techno-img-container">
              <img width={"100%"} src={vite} />
            </div>
            <div className="techno-img-container">
              <img width={"100%"} src={netlify} />
            </div>
            <div className="techno-img-little-container">
              <img height={"100%"} src={github} />
            </div>
          </div>
          <RoundDiv hideRound>
            <div className="list-div">
              <ul className="smaller-size-text light-color-text list">
                <li>{dictionary.other_skills_desc1}</li>
                <li>{dictionary.other_skills_desc2}</li>
              </ul>
            </div>
          </RoundDiv>
        </div>
      </div>
    </section>
  );
};

export default RightResume;
