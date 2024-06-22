import { Link } from "react-router-dom";
import Container from "../container/container";
import categories from "../../../data/categories.json";
import contacts from "../../../data/contacts.json";

import "./styles.css";

export default function Footer() {
  return (
    <Container className="footer">
      <div className="left">
        <div>
          <Link to={``} className="logo">
            <img src="/icons/logo.svg" alt="logo" />
          </Link>
          <p>{"Официальный представитель\n Ledtao, Absen, Novastar, Huidu"}</p>
          <div className="icons">
            <a href={contacts?.telegram || ""}>
              <img src="/icons/header_telegram.svg" alt="header icon" />
            </a>
          </div>
        </div>
        {/* <LangSwitcher lng={lng} backColor="#222222" /> */}
        <p>UZ</p>
      </div>
      <div className="middle">
        <h6>
          <Link to={`/catalog`}>Каталог</Link>
        </h6>
        <p>
          {categories && categories.length
            ? categories.map(({ name, slug }, index) => {
                return (
                  <Link key={index} to={`/catalog?categorySlug=${slug}`}>
                    {name}
                  </Link>
                );
              })
            : ""}
        </p>

        <h6>
          <Link to={`/#about`}>About</Link>
        </h6>
        <h6>
          <Link to={`/contacts`}>Контакты</Link>
        </h6>
      </div>
      <div className="right">
        <div className="right_inner">
          <a href={contacts?.address_link}>{contacts?.address}</a>
          <p>{contacts?.working_time}</p>
          <h6>
            <a href={"mailto:" + contacts?.email}>{contacts?.email}</a>
          </h6>
          <h6>
            <a href={"tel:" + contacts?.phone}>{contacts?.phone}</a>
          </h6>
        </div>
        <Link to="https://abduxalilov.uz">Designed with ❤️ by 🪐</Link>
      </div>
    </Container>
  );
}
