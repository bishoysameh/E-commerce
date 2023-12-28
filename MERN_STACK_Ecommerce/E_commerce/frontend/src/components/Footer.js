import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          E-COMMERCE
          <span>
            <img
              style={{ height: "20vh" }}
              src="../../assets/Images/logp.png"
              alt="nnn"
            />
          </span>
        </h3>

        <p className="footer-company-name">Sell Cart © 2023</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>Hadayek Helwan</span>
          </p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>01223794062</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p style={{ color: "white" }} className="footer-company-about">
          <span>About the website</span>
          E-commerce (electronic commerce) is the buying and selling of goods
          and services, or the transmitting of funds or data, over an electronic
          network, primarily the internet.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
