import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./jonas.jpeg" alt="Jonas" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" textColor="white"></Skill>
      <Skill skill="HTML+CSS" emoji="💪" color="orange"></Skill>
      <Skill skill="Javascript" emoji="💪" color="yellow"></Skill>
      <Skill skill="NodeJs" emoji="👦" color="orangered"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
