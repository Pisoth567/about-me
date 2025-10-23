import { useState } from "react";
import { skills } from "../data/skill_experance";
const Skill = () => {
  const [selected, setseLected] = useState("");
  const handleClick = (name) => {
    setseLected(name);
  };

  const clearSelected = (e) => {
    e.stopPropagation();
    setseLected("");
  };

  return (
    <main id="skill" className="container vh-100 py-5">
      <h1 className="title-header">
        My Skills/ <span>Experances</span>
      </h1>
      <div className="line"></div>
      <div className="d-flex row gap-5">
        {skills.map((s) => (
          <article
            onClick={() => handleClick(s.name)}
            className="col-2 cards d-flex flex-column align-items-center justify-content-center"
            key={s.name}
          >
            <img className="logo" src={s.img} alt={s.name} />
            <h2 className="text-center mb-4">{s.name}</h2>
            <div
              className="d-flex justify-content-between gap-2 position-relative"
              key={s.name}
            >
              <span className="me-5 position-absolute bottom-100 text-info fw-bold">
                level:
              </span>
              <h5>{s.level}</h5>
              <p className="text-success fw-bold">{s.experience}</p>
            </div>

            {/* -------------------------------------------------- */}
            {selected === s.name && (
              <div className={`descript position-absolute`}>
                <button onClick={(e) => clearSelected(e)} className="close-btn">
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <p>{s.description}</p>
              </div>
            )}
            {/* -------------------------------------------------- */}
          </article>
        ))}
      </div>
    </main>
  );
};

export default Skill;
