import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MyButton from "../ProductsList/styled/MyButton";
import { addToCart } from "../../../../actions/actionAddToCart";

class Product extends Component {
  addToCart = () => {
    const id = window.location.pathname.replace(/\D+/g, "");
    const item = this.props.data[id];

    this.props.addToCart(item);
  };

  render() {
    const { addToCart } = this;
    const id = window.location.pathname.replace(/\D+/g, "");
    const item = this.props.data[id];

    return (
      <Fragment>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            fontSize: "20px"
          }}
        >
          <img
            src={item.image}
            alt="product_image"
            style={{
              margin: "auto",
              width: "100%",
              maxWidth: "300px",
              maxHeight: "300px"
            }}
          />
          <ul>
            <li>
              <h1>{item.product_name}</h1>
            </li>
            <li style={{ display: "flex" }}>
              <h2 style={item.sale && { textDecorationLine: "line-through" }}>
                {item.price}
              </h2>
              {item.sale && (
                <h2 style={{ marginLeft: "10px" }}>
                  {`$${item.price.replace(/[^.\d]+/g, "") - 2000}`}
                </h2>
              )}
            </li>
            <li>Model: {item.model}</li>
            <li>Year: {item.year}</li>

            <li style={{ borderBottom: "2px solid #fff", margin: "10px" }} />

            <li>ID: {item.product_id}</li>
            <br />
            <h3>Parametrs:</h3>
            <ul>
              <li>
                Motor: {item.motor} cm<sup>3</sup>
              </li>
              <li>Max speed: {item.max_speed}</li>
              <li>Cylinder: {item.cylinder}</li>
            </ul>
            <div style={{ margin: "20px 0", textAlign: "center" }}>
              <MyButton color1="#eccf7c" color2="#cca332" onClick={addToCart}>
                <b>ADD TO CART</b>
              </MyButton>
            </div>
          </ul>
        </div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        quidem quae
        <del>
          ipsam quibusdam iste saepe omnis sunt exercitationem officia?
          Laudantium dolores
        </del>
        recusandae reprehenderit. Cum dignissimos placeat commodi? Dicta nulla
        impedit quibusdam magni, nisi ipsum, libero qui expedita inventore
        doloribus ipsa hic possimus, similique nihil nam esse ea. Blanditiis aut
        reprehenderit dolorem aliquid fugiat tenetur sapiente. Necessitatibus
        nulla magni id repudiandae, voluptate provident fugiat praesentium,
        officiis, voluptatibus rerum nostrum sit cum. Animi quae architecto
        dicta, corrupti atque non dolores soluta illum provident quidem hic nam.
        Beatae, ea tenetur hic dicta ullam magni error facilis reiciendis
        obcaecati doloremque explicabo deleniti assumenda alias non, numquam
        ipsa reprehenderit ut itaque at! At eius eos vitae dolor adipisci
        commodi amet ad recusandae voluptatem odio molestias, sit asperiores
        quas ipsum aliquam saepe esse fuga dolores laudantium non, hic repellat!
        Quos officia, ut recusandae esse alias nostrum facere qui eligendi
        ratione omnis nulla quis commodi sit illum impedit praesentium repellat
        at, incidunt dicta eum! Illo, doloremque aperiam aliquid, ex quos
        commodi delectus animi architecto corporis, maxime enim deserunt nostrum
        consequatur error quam sint. Dignissimos fugit exercitationem
        consequatur voluptas maxime, quos molestias iste quibusdam corporis
        debitis, natus sequi ea inventore! Hic velit at esse laboriosam placeat
        sint nesciunt.
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: car => dispatch(addToCart(car))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Product)
);
