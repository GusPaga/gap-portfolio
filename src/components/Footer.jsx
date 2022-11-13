export const Footer = () => {
  return (
    <footer id="footer" className="bg-dark mt-5">
      <div className="container align-middle">
        <div className="row text-center">
          <div className="col-12 col-md-1 p-2">
            <a
              href="https://github.com/GusPaga"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.ibb.co/9qgn753/github.png" alt="GitHub" />
            </a>
            <br />
            <spam>GitHub </spam>
          </div>
          <div className="col-12 col-md-1 p-2">
            <a
              href="https://www.linkedin.com/in/gustavopagano-5b39b4154/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.ibb.co/0ZKZjdP/linkedin.png" alt="LinkedIn" />
            </a>
            <br />
            <spam>Linkedin </spam>
          </div>
          <div className="col-12 col-md-10 text-md-end p-2">
            <spam id="firma">- Gustavo Pagano Developer -</spam>
          </div>
        </div>
      </div>
    </footer>
  );
};
