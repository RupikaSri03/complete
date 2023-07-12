import { Container, Row } from "react-bootstrap";
import Collectionitem from "./Collectionitem";
import Img1 from "../coffeeimages/c1.jpg";
import Img2 from "../coffeeimages/c4.jpg";
import Img3 from "../coffeeimages/c6.jpg";
import Img4 from "../coffeeimages/c7.jpg";
import Img5 from "../coffeeimages/c8.jpg";
import Img6 from "../coffeeimages/c11.jpg";
import Img7 from "../coffeeimages/c12.jpg";
import Img8 from "../coffeeimages/c13.jpg";

export default function Collections() {
  return (
    <Container className="py-5">
      <h3 className="font-secondary color-primary fs-40">
        <u>Collections</u> <i class="bi bi-arrow-right"></i>
      </h3>
      <Row>
        <Collectionitem img={Img1} text="Cappacino" />
        <Collectionitem img={Img2} text="Esprecco" />
        <Collectionitem img={Img3} text="Latte" />
        <Collectionitem img={Img4} text="Americano" />
        <Collectionitem img={Img5} text="irish coffee" />
        <Collectionitem img={Img6} text="Iced coffee" />
        <Collectionitem img={Img7} text="Ristretto" />
        <Collectionitem img={Img8} text="Frappe" />
      </Row>
    </Container>
  );
}
