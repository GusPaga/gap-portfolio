import "../Styles/formation.scss";

export const Formation = () => {
  return (
    <div id="formation">
      <div className="container-fluid">
        <div className="row">
          <div className="title col text-center text-uppercase mb-4">
            <h2 className="mt-2">Formación</h2>
            <small>Estos son algunas de mis certificaciones</small>
          </div>
          <div
            id="carouselFormacion"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner mt-5">
              <div className="carousel-item active">
                <img
                  src="https://i.ibb.co/c8BNMW3/Diploma-Henry.png"
                  className="d-block w-100"
                  alt="Henry"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/TBp27VG/Sin-t-tulo.png"
                  className="d-block w-100"
                  alt="Business Intelligence"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/wzFnw54/Bootstrap.png"
                  className="d-block w-100"
                  alt="Bootstrap"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/NtLcCSN/HTML-y-CSS-definitivo.png"
                  className="d-block w-100"
                  alt="HTML y CSS definitivo"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/9t2HfrL/Java-Script-b-sico.png"
                  className="d-block w-100"
                  alt="JavaScript"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/9T40Rrm/Type-Script.png"
                  className="d-block w-100"
                  alt="TypeScript"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/WGP4GFf/Estrategias-para-aprender.png"
                  className="d-block w-100"
                  alt="Aprender en Línea"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
