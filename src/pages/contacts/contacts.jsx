import MapYandex from "../../components/mapYandex/MapYandex";
import Container from "../../components/common/container/container";
import contacts from "../../data/contacts.json";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="contacts">
      <Container className="contacts_wrapper">
        <div className="left_title">{"Контакты"}</div>
        <div className="contacts_right">
          <div className="right_info">
            <div className="label">{"Адрес"}:</div>
            <div className="text">{contacts.address}</div>
          </div>
          <div className="right_info">
            <div className="label">{"Телефон"}:</div>
            <a href={"tel:" + contacts.phone} className="text">
              {contacts.phone}
            </a>
            <a href={"tel:" + contacts.phone2} className="text">
              {contacts.phone2}
            </a>
          </div>
          <div
            className={"right_info display_none"}
            style={{
              display: "flex",
              gap: "35px",
              flexDirection: "row",
              marginTop: "10px",
            }}
          >
            <Link to={contacts.telegram || ""} className="text">
              <img
                src={"/icons/contact_tg.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
            <Link to={contacts.instagram || ""} className="text">
              <img
                src={"/icons/contact_insta.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
          </div>
          <div className={"right_info div4"}>
            <div className={`$"label" notranslate`}>Email:</div>
            <a href={"mailto:" + contacts.email} className="text notranslate">
              {contacts.email}
            </a>
          </div>
          <div
            className={"right_info display_block"}
            style={{ display: "flex", gap: "35px", flexDirection: "row" }}
          >
            <Link to={contacts.telegram || ""} className="text">
              <img
                src={"/icons/contact_tg.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
            <Link to={contacts.instagram || ""} className="text">
              <img
                src={"/icons/contact_insta.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
      </Container>
      <div className="map">
        <MapYandex />
      </div>
    </div>
  );
}
