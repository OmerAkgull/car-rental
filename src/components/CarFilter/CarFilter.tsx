import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./CarFilter.module.css";
import FilterButton from "../FilterButton/FilterButton";

const CarFilter = () => {
  interface Cars {
    name: string;
    type: string;
    price: string;
    src: string;
  }

  const cars = [
    {
      name: "Renault Clio",
      type: "Economic",
      price: "13,26",
      src: "/tn_clio.png",
    },
    {
      name: "Fiat Egea",
      type: "Compact",
      price: "14,33",
      src: "/tn_egea.png",
    },
    {
      name: "Citroen C-Elysee",
      type: "Sedan",
      price: "15,58",
      src: "/tn_elysee.png",
    },
    {
      name: "Kia Picanto Automatic",
      type: "Mini",
      price: "16,63",
      src: "/tn_picanto.png",
    },
    {
      name: "Renault Zoe",
      type: "Mini",
      price: "18,91",
      src: "/tn_zoe.png",
    },
    {
      name: "Fiat Florino",
      type: "Wagon",
      price: "17,88",
      src: "/tn_fiorino.png",
    },
    {
      name: "Renault Clio Automatic",
      type: "Economic",
      price: "17,49",
      src: "/tn_clioauto.png",
    },
    {
      name: "Renault Megane",
      type: "Sedan",
      price: "20,44",
      src: "/tn_megane.png",
    },
    {
      name: "Egea Cross",
      type: "SUV",
      price: "20,86",
      src: "/tn_egeacross.png",
    },
    {
      name: "Fiat Egea Automatic",
      type: "Compact",
      price: "20,20",
      src: "/tn_egeaauto.png",
    },
    {
      name: "Toyota Corolla",
      type: "Sedan",
      price: "23,31",
      src: "/tn_corolla.png",
    },
    {
      name: "Kia Stonic",
      type: "SUV",
      price: "25,36",
      src: "/tn_stonic.png",
    },
    {
      name: "Toyota Proace City",
      type: "Minivan",
      price: "23,91",
      src: "/tn_proace.png",
    },
    {
      name: "Opel Crossland",
      type: "SUV",
      price: "26,95",
      src: "/tn_crossland.png",
    },
    {
      name: "Jeep Renegade Automatic",
      type: "SUV",
      price: "26,68",
      src: "/tn_renegade.png",
    },
    {
      name: "Peugeot 3008",
      type: "SUV",
      price: "38,43",
      src: "/tn_3008.png",
    },
    {
      name: "Nissan Qashqai",
      type: "SUV",
      price: "29,61",
      src: "/tn_qashqai.png",
    },
    {
      name: "Alpha Romeo Tonale Automatic",
      type: "SUV",
      price: "44,85",
      src: "/tn_tonale.png",
    },
  ];

  return (
    <section className="pt-5 pb-5">
      <Container>
        <Row>
          <Col md={9}>
            <Row>
              <div className="d-flex flex-wrap gap-3">
                <FilterButton text="All" />
                <FilterButton text="Automatic" />
                <FilterButton text="Mini" />
                <FilterButton text="Economic" />
                <FilterButton text="Compact" />
                <FilterButton text="Sedan" />
                <FilterButton text="Wagon" />
                <FilterButton text="Minivan" />
                <FilterButton text="SUV" />
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-5">
          {cars.map((car: Cars) => (
            <Col md={4} sm={6}>
              <div className="d-flex flex-column">
                <div className={classes.infoContainer}>
                  <strong className={classes.carName}>{car.name}</strong>
                  <p className={classes.carType}>{car.type}</p>
                  <Image src={car.src}></Image>
                </div>
                <div className={classes.priceContainer}>
                  <p className={classes.priceHeader}>Starting from:</p>
                  <p className={classes.price}>{`${car.price}$`}</p>
                  <div className="mt-3 d-flex justify-content-center align-items-center">
                    <button className={classes.chooseButton}>CHOOSE</button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CarFilter;
