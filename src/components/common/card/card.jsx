import { Link } from "react-router-dom";

import "./styles.css";

export default function Card({ info, baseLink }) {
  return (
    <Link to={baseLink} className="card">
      {info.attributes.image.data.length ? (
        <img
          className="card_img"
          src={info.attributes.image.data[0].attributes?.url || ""}
          alt="card_img"
        />
      ) : (
        <img
          className="card_img"
          src={info.attributes.image.data.attributes?.url || ""}
          alt="card_img"
        />
      )}

      <p className="card_p">{info.attributes.name}</p>
      {info.price ? <p className="card_price">{info.price}$</p> : null}
    </Link>
  );
}
