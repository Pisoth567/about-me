import { useEffect, useState } from "react";
import { data } from "../data/my_data";
import About from "./About";
import Skill from "./Skill";
import Freelancer from "./Freelancer";
import Contact from "./Contact";

const Home = () => {
  const occupation = data.occupation;
  const [showOccupation, setShowOccupation] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // typing forward
        setShowOccupation(occupation.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === occupation.length) setIsDeleting(true);
      } else {
        // deleting backward
        setShowOccupation(occupation.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) setIsDeleting(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [index, isDeleting, occupation]);

  
  return (
    <>
      <main
        id="home"
        className="container d-flex justify-content-between align-items-center vh-100 py-5"
      >
        <div className="left">
          <h2 className="fw-bold">
            Hi, There! <span className="px-2"></span> I'm
            <span className="text-info"> SOTH</span>
          </h2>
          <h1 className="point ">Web {showOccupation}</h1>
          <p className="fs-5">{data.bio}</p>
          <div className="icon mt-4 d-flex gap-1">
            <a
              className="text-decoration-none"
              href={data.social.facebook}
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              className="text-decoration-none"
              href={data.social.telegram}
              target="_blank"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              className="text-decoration-none"
              href={data.contact.email}
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              className="text-decoration-none"
              href={data.social.github}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="right">
          <img
            className="rounded-circle object-fit-cover my-shadow float-end"
            src={data.img_developer}
            alt="img"
          />
        </div>
      </main>
      <>
        <About 
          img={data.profile}
          detail={data.personality.about} 
          name={data.name} 
          age={data.age}
          gender={data.gender}
          address={data.address}
          phone={data.contact.phone}
          gmail={data.gmail}/>
        <Skill />
        <Freelancer />
        <Contact />
      </>
    </>
  );
};

export default Home;
