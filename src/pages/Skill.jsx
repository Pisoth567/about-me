import { skills } from "../data/skill_experance";
const Skill = () => {
  return (
    <main id="skill" className="container vh-100 py-5">
      <h1 className="title-header">
        My Skills/ <span>Experances</span>
      </h1>
      <div className="d-flex row">
        {skills.map((s) => (
          <article className="col-3 card" key={s.name}>
            <img className="logo" src={s.img} alt={s.name} />
            <h2>{s.name}</h2>
            <div>
              <h4>{s.level}</h4>
              <p>{s.experience}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Skill;
