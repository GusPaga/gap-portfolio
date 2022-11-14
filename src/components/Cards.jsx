export const Cards = () => {
  return (
    <div id="cards" className="mx-auto mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="title col text-center text-uppercase mb-4 mt-3">
            <h2 className="mt-2">Proyectos</h2>
            <small>Personales y Grupales</small>
          </div>
        </div>
        <div className="row mb-5">
          {/* TARJETA C&B */}
          <div className="col-12 col-md-6 col-lg-4  cardsAnimation">
            <div className="card p-3 mb-5 bg-body rounded">
              <img
                src="https://i.ibb.co/b647h8Z/C-B.png"
                className="card-img-top"
                alt="C&B"
              />
              <div className="card-body">
                <h5 className="card-title mb-0 fst-italic text-center mb-2 fs-30">
                  "Cake & Bases"
                </h5>
                <div className="badges mb-2 d-flex justify-content-around d-flex">
                  <span className="rounded-pill bg-warning text-white fst-italic fst-italic p-1">
                    FireBase
                  </span>
                  <span className="rounded-pill bg-info text-white fst-italic p-1">
                    NotMailer
                  </span>
                  <span className="rounded-pill bg-warning text-white fst-italic p-1">
                    Mercado Pago
                  </span>
                  <span className="rounded-pill bg-info text-white fst-italic p-1">
                    Cloudinary
                  </span>
                </div>
                <p className="card-text">
                  Este fue el proyecto final (PF) para Soy Henry, en donde
                  aplicamos metodologías ágiles (SCRUM) para coordinar los
                  esfuerzos de los integrantes del equipo a través del software
                  “Trello”, además aplicamos distintas nuevas tecnologías como
                  “Mercado Pago”, “FireBase”, “Cloudinary”, “NotMailer”,“ React
                  Admin”, entre otras.{" "}
                </p>
                <p>
                  Si quieres conocer este sitio has click{" "}
                  <a
                    href="https://tortas-y-torteras-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    aquí
                  </a>
                  , o entra a{" "}
                  <a href="*" data-bs-toggle="modal" data-bs-target="#modalCyb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-images"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                    </svg>{" "}
                    galería
                  </a>
                  , o has click en{" "}
                  <a
                    href="https://www.youtube.com/watch?v=eyvWmnxu6-8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>{" "}
                  para dar un paseo..!
                </p>
              </div>
            </div>
          </div>
          {/* /TARJETA C&B */}
          {/* TARJETA DOGS */}
          <div className="col-12 col-md-6 col-lg-4  cardsAnimation">
            <div className="card p-3 mb-5 bg-body rounded">
              <img
                src="https://i.ibb.co/6mTnfcw/Dogs.png"
                className="card-img-top"
                alt="Dogs"
              />
              <div className="card-body">
                <h5 className="card-title mb-0 fst-italic text-center mb-2 fs-30">
                  "Gap-Dogs-Api"
                </h5>
                <div className="badges mb-2 d-flex justify-content-around d-flex">
                  <span className="rounded-pill bg-warning text-white p-1 ">
                    JavaScript
                  </span>
                  <span className="rounded-pill bg-info text-white p-1">
                    React
                  </span>
                  <span className="rounded-pill bg-warning text-white p-1">
                    Redux
                  </span>
                  <span className="rounded-pill bg-info text-white p-1">
                    Expess
                  </span>
                  <span className="rounded-pill bg-warning text-white p-1 ">
                    Postgres
                  </span>
                </div>
                <p className="card-text">
                  Este fue el proyecto final (PF) para Soy Henry, en donde
                  aplicamos metodologías ágiles (SCRUM) para coordinar los
                  esfuerzos de los integrantes del equipo a través del software
                  “Trello”, además aplicamos distintas nuevas tecnologías como
                  “Mercado Pago”, “FireBase”, “Cloudinary”, “NotMailer”,“ React
                  Admin”, entre muchas otras.
                </p>
                <p>
                  Si quieres conocer este sitio has click{" "}
                  <a
                    href="https://pi-dog-guspaga.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    aquí
                  </a>
                  , o entra a{" "}
                  <a
                    href="*"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDogs"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-images"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                    </svg>{" "}
                    galería
                  </a>
                  , o has click en{" "}
                  <a
                    href="https://www.youtube.com/watch?v=OLm4yT3UddE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>{" "}
                  para dar un paseo..!
                </p>
              </div>
            </div>
          </div>
          {/* /TARJETA DOGS */}
          {/* TARJETA FOODS */}
          <div className="col-12 col-md-6 col-lg-4  cardsAnimation">
            <div className="card p-3 mb-5 bg-body rounded">
              <img
                src="https://i.ibb.co/wBwTFtw/Foods.png"
                className="card-img-top"
                alt="C&B"
              />
              <div className="card-body">
                <h5 className="card-title mb-0 fst-italic text-center mb-2 fs-30">
                  "Gap-Foods-Api"
                </h5>
                <div className="badges mb-2 d-flex justify-content-around d-flex">
                  <span className="rounded-pill bg-warning text-white p-1 ">
                    React
                  </span>
                  <span className="rounded-pill bg-info text-white p-1">
                    Redux
                  </span>
                  <span className="rounded-pill bg-warning text-white p-1">
                    JavaScript
                  </span>
                  <span className="rounded-pill bg-info text-white p-1">
                    Express
                  </span>
                  <span className="rounded-pill bg-warning text-white p-1">
                    Postgres
                  </span>
                </div>
                <p className="card-text">
                  Este fue el proyecto final (PF) para Soy Henry, en donde
                  aplicamos metodologías ágiles (SCRUM) para coordinar los
                  esfuerzos de los integrantes del equipo a través del software
                  “Trello”, además aplicamos distintas nuevas tecnologías como
                  “Mercado Pago”, “FireBase”, “Cloudinary”, “NotMailer”,“ React
                  Admin”, entre muchas otras.
                </p>
                <p>
                  Si quieres conocer este sitio has click{" "}
                  <a href="*" target="_blank" rel="noreferrer">
                    aquí
                  </a>
                  .{" "}
                  <a href="*" data-bs-toggle="modal" data-bs-target="#modalCyb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-images"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                    </svg>{" "}
                    galería
                  </a>
                  , o has click en{" "}
                  <a
                    href="https://www.youtube.com/watch?v=eyvWmnxu6-8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>{" "}
                  para dar un paseo..!
                </p>
              </div>
            </div>
          </div>
          {/* /TARJETA FOODS */}

          {/* TARJETA BOOTSTRAP */}
          <div className="col-12 col-md-6 col-lg-4  cardsAnimation">
            <div className="card p-3 mb-5 bg-body rounded">
              <img
                src="https://i.ibb.co/3WxCXMP/Platzi-Conf1.png"
                className="card-img-top"
                alt="Bootstrap"
              />
              <div className="card-body">
                <h5 className="card-title mb-0 fst-italic text-center mb-2 fs-30">
                  <a
                    href="https://github.com/GusPaga/Bootstrap-practice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    "Bootstrap"
                  </a>
                </h5>
                <div className="badges mb-2 d-flex justify-content-around d-flex">
                  <span className="rounded-pill bg-warning text-white p-1 ">
                    Bootstap
                  </span>
                  <span className="rounded-pill bg-info text-white p-1">
                    JavaScript
                  </span>
                  <span className="rounded-pill bg-warning text-white p-1">
                    HTML
                  </span>
                  <span className="rounded-pill bg-info text-white p-1">
                    CSS
                  </span>
                </div>
                <p className="card-text">
                  Este proyecto, contituye la práctica del curso de Bootstrap de
                  platzi, en donde pude aplicar los conocimientos aprendidos,
                  NavBar, Carousel, Modal, Buttons, Cards
                </p>
                <p>
                  Si quieres conocer este sitio has click{" "}
                  <a
                    href="https://tortas-y-torteras-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    aquí
                  </a>
                  , o entra a{" "}
                  <a href="*" data-bs-toggle="modal" data-bs-target="#modalCyb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-images"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                    </svg>{" "}
                    galería
                  </a>
                  , o has click en{" "}
                  <a
                    href="https://www.youtube.com/watch?v=eyvWmnxu6-8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>{" "}
                  para dar un paseo..!
                </p>
              </div>
            </div>
          </div>
          {/* /TARJETA BOOTSTRAP */}
        </div>
      </div>
      {/* MODAL C&B */}
      <div class="modal" id="modalCyb" tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">"Cake & Bases"</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row mx-auto">
                <div className="col col-md-6 col-lg-6">
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                </div>
                <div className="col col-md-6 col-lg-6">
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
      {/* /MODAL C&B */}

      {/* MODAL DOGS */}
      <div class="modal" id="modalDogs" tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">"Cake & Bases"</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row mx-auto">
                <div className="col col-md-6 col-lg-6">
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                </div>
                <div className="col col-md-6 col-lg-6">
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                  <img
                    src="https://i.ibb.co/b647h8Z/C-B.png"
                    className="w-100 mb-4 rounded"
                    alt="C&B"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
      {/* MODAL DOGS */}
    </div>
  );
};
