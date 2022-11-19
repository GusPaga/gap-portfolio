export const Technologies = () => {
  let icons = [
    { url: "https://i.ibb.co/QmwxmKW/javascript.png", name: "JavaScript" },
    { url: "https://i.ibb.co/xCmzHfJ/typescript.png", name: "TypeScript" },
    { url: "https://i.ibb.co/LN6jV2w/react.png", name: "React Js" },
    { url: "https://i.ibb.co/HGf8wDW/redux.png", name: "Redux JS" },
    { url: "https://i.ibb.co/6RxnzVF/next-js.png", name: "Next.Js" },
    { url: "https://i.ibb.co/N9QPsr3/github.png", name: "Git" },
    { url: "https://i.ibb.co/89v7Wv4/sequelize.png", name: "Sequelize" },
    { url: "https://i.ibb.co/8PBJFQV/express.png", name: "Express" },
    { url: "https://i.ibb.co/Fm10ZMZ/postgres.png", name: "Postgres" },
    { url: "https://i.ibb.co/NCzhsJx/mongodb.png", name: "MongoDB" },
    { url: "https://i.ibb.co/GM5gWPb/html.png", name: "HTML" },
    { url: "https://i.ibb.co/xJTW6D2/jest.png", name: "Jest" },
    { url: "https://i.ibb.co/P4Kvgmv/css.png", name: "Css" },
    { url: "https://i.ibb.co/Pwq80wQ/bootstrap.png", name: "Bootstrap" },
    { url: "https://i.ibb.co/DgxfK3T/material.png", name: "Material UI" },
    { url: "https://i.ibb.co/P4Kvgmv/css.png", name: "Sass" },
  ];

  return (
    <div id="tech">
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <div className="title mt-3 text-center">
            <h3 className="mt-3">TECNOLOGÍAS</h3>
            <small>
              ESTAS SON ALGUNAS DE LAS TECNOLOGÍAS APLICADAS A MIS PROYECTOS
            </small>
          </div>
          <div className="row my-5 justify-content-evenly">
            {icons?.length > 0 &&
              icons.map((e) => {
                return (
                  <div className="logos d-flex flex-wrap col-6 col-md-6 col-lg-3 my-5 mx-3">
                    <img src={e.url} alt={e.name} />
                    <span className="mt-3">{e.name}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
