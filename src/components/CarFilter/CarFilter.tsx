import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./CarFilter.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CarFilter = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  interface Cars {
    id: number;
    name: string;
    type: string;
    price: string;
    src: string;
  }

  const cars = [
    {
      id: 1,
      name: "Renault Clio",
      type: "Economic",
      price: "13,26",
      src: "/tn_clio.png",
    },
    {
      id: 2,
      name: "Fiat Egea",
      type: "Compact",
      price: "14,33",
      src: "/tn_egea.png",
    },
    {
      id: 3,
      name: "Citroen C-Elysee",
      type: "Sedan",
      price: "15,58",
      src: "/tn_elysee.png",
    },
    {
      id: 4,
      name: "Kia Picanto Automatic",
      type: "Mini",
      price: "16,63",
      src: "/tn_picanto.png",
    },
    {
      id: 5,
      name: "Renault Zoe",
      type: "Mini",
      price: "18,91",
      src: "/tn_zoe.png",
    },
    {
      id: 6,
      name: "Fiat Florino",
      type: "Wagon",
      price: "17,88",
      src: "/tn_fiorino.png",
    },
    {
      id: 7,
      name: "Renault Clio Automatic",
      type: "Economic",
      price: "17,49",
      src: "/tn_clioauto.png",
    },
    {
      id: 8,
      name: "Renault Megane",
      type: "Sedan",
      price: "20,44",
      src: "/tn_megane.png",
    },
    {
      id: 9,
      name: "Egea Cross",
      type: "SUV",
      price: "20,86",
      src: "/tn_egeacross.png",
    },
    {
      id: 10,
      name: "Fiat Egea Automatic",
      type: "Compact",
      price: "20,20",
      src: "/tn_egeaauto.png",
    },
    {
      id: 11,
      name: "Toyota Corolla",
      type: "Sedan",
      price: "23,31",
      src: "/tn_corolla.png",
    },
    {
      id: 12,
      name: "Kia Stonic",
      type: "SUV",
      price: "25,36",
      src: "/tn_stonic.png",
    },
    {
      id: 13,
      name: "Toyota Proace City",
      type: "Minivan",
      price: "23,91",
      src: "/tn_proace.png",
    },
    {
      id: 14,
      name: "Opel Crossland",
      type: "SUV",
      price: "26,95",
      src: "/tn_crossland.png",
    },
    {
      id: 15,
      name: "Jeep Renegade Automatic",
      type: "SUV",
      price: "26,68",
      src: "/tn_renegade.png",
    },
    {
      id: 16,
      name: "Peugeot 3008",
      type: "SUV",
      price: "38,43",
      src: "/tn_3008.png",
    },
    {
      id: 17,
      name: "Nissan Qashqai",
      type: "SUV",
      price: "29,61",
      src: "/tn_qashqai.png",
    },
    {
      id: 18,
      name: "Alpha Romeo Tonale Automatic",
      type: "SUV",
      price: "44,85",
      src: "/tn_tonale.png",
    },
  ];

  const types = [
    "All",
    "Mini",
    "Economic",
    "Compact",
    "Sedan",
    "Wagon",
    "Minivan",
    "SUV",
  ];

  const filteredCars =
    activeFilter === "All"
      ? cars
      : cars.filter((car) => car.type === activeFilter);

  return (
    <section className="pt-5 pb-5">
      <Container>
        <Row>
          <Col md={9}>
            <Row>
              <div className="d-flex flex-wrap gap-3">
                {types.map((type) => (
                  <FilterButton
                    onclick={() => setActiveFilter(type)}
                    isActive={type === activeFilter}
                    key={type}
                    text={type}
                  />
                ))}
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-5">
          <AnimatePresence mode="wait">
            {filteredCars.map((car: Cars) => (
              <Col className="mt-3" key={car.id} md={4} sm={6}>
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  layout
                  className="d-flex flex-column"
                >
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
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  );
};

export default CarFilter;
