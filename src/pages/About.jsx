const About = ({ img, detail, name, age,gender, address,phone,gmail }) => {
  return (
    <main
      id="about"
      className="container d-flex gap-5 justify-content-between align-items-center vh-100 py-5"
    >
      <div className="about-left w-25">
        <div className="">
          <img className="my-shadow rounded-5 w-100 my-img" src={img} alt="" />
        </div>
      </div>
      <div className="about-right w-75">
        <h1>About Me</h1>
        <p className="fs-5 mt-5">{detail}</p>
        <table className="table-danger w-50  table-primary">
          <tbody className="py-5">
            <tr>
              <td>Name: <span className="px-1"></span> {name}</td>
              <td>Age: <span className="px-1"></span> {age}</td>
            </tr>
            <tr>
              <td>Gender: <span className="px-1"></span> {gender}</td>
              <td>Address: <span className="px-1"></span> {address}</td>
            </tr>
            <tr>
              <td>Phone: <span className="px-1"></span> {phone}</td>
              <td>Gmail: <span className="px-1"></span> {gmail}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </main>
  );
};

export default About;
