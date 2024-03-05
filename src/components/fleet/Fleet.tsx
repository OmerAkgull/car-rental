import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";

import classes from "./Fleet.module.css";

const Fleet = () => {
    const ref = useBlazeSlider({
        all: {
          slidesToShow: 3,
          enableAutoplay: true,
          autoplayInterval: 1800,
          stopAutoplayOnInteraction: false,
        },
      })

  return (
    <section className="bg-light pt-5 pb-5">
    <h1 className={`text-center fw-bold ${classes.fleetHeader}`}>
      OUR FLEET
    </h1>
    <p className="text-center">See the latest additions.</p>
    <div className="blaze-slider" ref={ref}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            <div className="d-flex flex-column align-items-center">
              <img src="/fiat-500-hybrid-2022.png" alt="Fiat 500 Hybrid" />
              <p className="text-center fw-bold fs-5 mt-2">Fiat 500 Hybrid</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/opel-mokka.png" alt="Opel Mokka" />
              <p className="text-center fw-bold fs-5 mt-2">Opel Mokka</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/peugeot_308.png" alt="Peugeot 308" />
              <p className="text-center fw-bold fs-5 mt-2">Peugeot 308</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/mercedes-v-class.png" alt="Mercedes V Class" />
              <p className="text-center fw-bold fs-5 mt-2">Mercedes V Class</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Fleet;
