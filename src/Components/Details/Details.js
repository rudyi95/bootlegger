import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addItemInCart } from "../../Redux/Actions";
import Api from "../../Api";
import Item from "../Item/Item";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

import "./Details.css";



class ConnectedDetails extends Component {
  constructor(props) {
    super(props);

    this.isCompMounted = false;

    this.state = {
      relatedItems: [],
      quantity: 1,
      item: null,
      itemLoading: false
    };
  }

  async fetchProductAndRelatedItems(productId) {
    this.setState({ itemLoading: true });

    let item = await Api.getItemUsingID(productId);

    let relatedItems = await Api.searchItems({
      category: item.category,
    });

    // Make sure this component is still mounted before we set state..
    if (this.isCompMounted) {
      this.setState({
        item,
        quantity: 1,
        relatedItems: relatedItems.data.filter(x => x.id !== item.id),
        itemLoading: false,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    // If ID of product changed in URL, refetch details for that product
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProductAndRelatedItems(this.props.match.params.id);
    }

  }


  componentDidMount() {
    this.isCompMounted = true;
    this.fetchProductAndRelatedItems(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.isCompMounted = false;
  }



  render() {
    if (this.state.itemLoading) {
      return <CircularProgress className="circular" />;
    }

    if (!this.state.item) {
      return null;
    }

    return (
      <div className="details-container">

        <div className="details-title">
          {this.state.item.name}
        </div>
        <div className="details-item-container">

          <img src={this.state.item.imageUrls[0]} alt="" className="details-item-image" />
          <div className="details-item-content">

            <div className="item-price">
              Ціна: {this.state.item.price} грн.
            </div>
            {this.state.item.popular && (
              <div className="item-promotional-price">
                (Акційна ціна)
              </div>
            )}

            <div className="item-volume-txt">
              Об'єм: {this.state.item.volume}л.
            </div>
            <div className="item-category-txt">
              Категорія: {this.state.item.category}
            </div>

            <div className="item-input-cart-btn">
              <TextField
                type="number"
                value={this.state.quantity}
                style={{ marginTop: 20, marginBottom: 10, width: 70, }}
                label="Кількість"
                inputProps={{ min: 1, max: 10, step: 1 }}
                onChange={e => {
                  this.setState({ quantity: parseInt(e.target.value) });
                }}
              />
              <Button
                className="item-cart-btn"
                color="primary"
                variant="outlined"
                onClick={() => {
                  this.props.dispatch(
                    addItemInCart({
                      ...this.state.item,
                      quantity: this.state.quantity
                    })
                  );
                }}
              >
                У кошик <AddShoppingCartIcon style={{ marginLeft: 5 }} />
              </Button>
            </div>
          </div>

        </div>

        {/* Product description */}
        <div className="item-description-title">
          Опис
        </div>
        <div className="item-description">
          {this.state.item.description ? this.state.item.description : "Відсутній"}
        </div>

        {/* Relateditems */}
        <div
          style={{
            marginTop: 20,
            marginBottom: 10,
            fontSize: 22
          }}
        >
          Схожа продукція
        </div>
        {
          this.state.relatedItems.slice(0, 3).map(x => {
            return <Item key={x.id} item={x} />;
          })
        }
      </div >
    );
  }
}

let Details = connect()(ConnectedDetails);
export default Details;
