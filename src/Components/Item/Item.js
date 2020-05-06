import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import "./Item.css";

class ConnectedItem extends Component {
  render() {
    return (
      
        <Card className="card-container"
          style={{ width: 200, height: 270, margin: 10, display: "inline-block", maxWidth: "300px" }}
        >
          <CardActionArea
            onClick={() => {
              this.props.history.push("/details/" + this.props.item.id);
            }}
          >
            <CardMedia
              className="card-media"
              style={{ height: 140, backgroundSize: "contain" }}
              image={this.props.item.imageUrls[0]}
            />
            <CardContent className="card-content" style={{ height: 50 }}>
              <div
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {this.props.item.name}
              </div>
              <div style={{ margin: 5 }}>Об'єм: {this.props.item.volume}л.</div>
              <div style={{ margin: 5 }}>Ціна: {this.props.item.price} грн.</div>
              <div style={{ color: "#1a9349", fontWeight: "bold", margin: 5 }}>
                {this.props.item.popular && "Акційна ціна"}
              </div>
            </CardContent>
          </CardActionArea>

          <CardActions
          className="card-actions"
            style={{ display: "flex", alignItems: "center", height: 45 }}
          >
            <Button
            className="card-detail-btn"
              style={{ marginRight: 60, marginLeft: 8 }}
              onClick={() => {
                this.props.history.push("/details/" + this.props.item.id);
              }}
            >
              {" "}
            Деталі
          </Button>
            <Tooltip title="Додати у кошик">
              <IconButton
                size="small"
                onClick={e => {
                  e.stopPropagation();
                  this.props.dispatch(
                    addItemInCart({ ...this.props.item, quantity: 1 })
                  );
                }}
                color="primary"
                aria-label="Add to shopping cart"
              >
                <AddShoppingCartIcon  />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      
    );
  }
}

export default withRouter(connect()(ConnectedItem));
