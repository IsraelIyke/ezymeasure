import Bg from "./components/bg";
import Nav from "./components/nav";
import { CgArrowsExchangeAlt, CgArrowsExchangeV } from "react-icons/cg";
import "./App.css";
import "./bg.css";
import "./nav.css";

export default function App() {
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
          <div className="from">2PAPER</div>
          <div className="exchange">
            <CgArrowsExchangeAlt className="arrows-up" />
            <CgArrowsExchangeV className="arrows-down" />
            <div className="exchange-bg"></div>
          </div>
          <div className="to">29.7CM</div>
        </div>
        <div className="measurements">
          <h3>Saved measurements</h3>
          <ul>
            <li>
              table height: <span>20cm</span>
            </li>
            <li>
              door: <span>900mm</span>
            </li>
            <li>
              wire length: <span>1.2m</span>
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
