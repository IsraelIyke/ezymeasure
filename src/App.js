import Bg from "./components/bg";
import Nav from "./components/nav";
import { MdDelete } from "react-icons/md";
import { CgArrowsExchangeAlt, CgArrowsExchangeV } from "react-icons/cg";
import "./App.css";
import "./bg.css";
import "./nav.css";
import { useState } from "react";

export default function App() {
  const [to, setTo] = useState(0);
  const [from, setFrom] = useState(0);

  return (
    <div className="main-container">
      <div>
        <Nav />
      </div>
      <Bg />
      <div className="container">
        <div className="title-container">
          <h1>PAPER TO UNIT CONVERTER</h1>
          <hr />
        </div>
        <div className="card-container">
          <div className="from">
            <input
              type="number"
              id="paper"
              value={from}
              onInput={(e) => {
                setFrom(e.target.value);
                setTo(e.target.value * 29.7);
              }}
            />
            A4
          </div>
          <div className="exchange">
            <CgArrowsExchangeAlt className="arrows-up" />
            <CgArrowsExchangeV className="arrows-down" />
            <div className="exchange-bg"></div>
          </div>
          <div className="to">
            <input
              type="number"
              id="paper"
              value={to}
              onInput={(e) => {
                setTo(e.target.value);
                setFrom(e.target.value / 29.7);
              }}
            />
            CM
          </div>
        </div>
        <div className="measurements">
          <h3>Saved measurements</h3>
          <ul>
            <li>
              table height: <span>20cm</span> <MdDelete />
            </li>
            <li>
              door: <span>900mm</span> <MdDelete />
            </li>
            <li>
              wire length: <span>1.2m</span> <MdDelete />
            </li>
            {/* <li>
              wire length: <span>1.2m</span>
            </li>
            <li>
              wire length: <span>1.2m</span>
            </li>
            <li>
              wire length: <span>1.2m</span>
            </li>
            <li>
              wire length: <span>1.2m</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
