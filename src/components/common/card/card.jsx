import { Link } from "react-router-dom";

import "./styles.css";

export default function Card({ info, price }) {
  return (
    <Link to="/catalog/subcatalog/item" className="card">
      <img className="card_img" src={info.previewImage} alt="card_img" />
      <p className="card_p">{info.name}</p>
      {info.price ? <p className="card_price">{info.price}$</p> : null}
    </Link>
  );
}
