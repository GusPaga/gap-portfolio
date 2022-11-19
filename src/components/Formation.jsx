import "../Styles/formation.scss";

export const Formation = () => {
  let certificates = [
    { name: "Henry", img: "https://i.ibb.co/zffBTBz/Diploma-Henry.png" },
    {
      name: "Bootstrap",
      img: "https://i.ibb.co/gPYcwx3/certificated-bootstrap.png",
    },
    {
      name: "Business Intelligence",
      img: "https://i.ibb.co/s6cLnp5/certificated-Business-Intelligence.png",
    },
    {
      name: "knowledge",
      img: "https://i.ibb.co/JynNd3L/certificated-English-knowledge.png",
    },
    {
      name: "HTML y CSS",
      img: "https://i.ibb.co/D88k9d1/certificated-HTML-y-CSS.png",
    },
    {
      name: "JavaScript",
      img: "https://i.ibb.co/pwv6HDL/certificated-Java-Script.png",
    },
    {
      name: "English",
      img: "https://i.ibb.co/bs88hLV/certificated-learning-in-line.png",
    },
    {
      name: "TypeScript",
      img: "https://i.ibb.co/1XP7v3v/certificated-Type-Script.png",
    },
  ];

  return (
    <div id="formation">
      <div className="container-fluid">
        <div className="row">
          <div className="title col text-center text-uppercase mb-4">
            <h2 className="mt-2">Formación</h2>
            <small>Estos son algunas de mis certificaciones</small>
          </div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-touch="false"
          >
            <div className="carousel-inner my-5">
              {certificates?.length > 0 &&
                certificates.map((e) => {
                  return (
                    <div
                      className="carousel-item active "
                      data-bs-interval="2000"
                    >
                      <img src={e.img} alt={e.name} className="d-block w-100" />
                    </div>
                  );
                })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden bg-warning">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
