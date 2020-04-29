import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { showCartDlg, /* setCheckedOutItems */ } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";
import CartRow from "./CartRow";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PhoneIcon from '@material-ui/icons/Phone';
/* import IconButton from "@material-ui/core/IconButton"; */

const mapStateToProps = state => {
  return { open: state.showCartDialog, items: state.cartItems };
};

class ConnectedCartDialog extends Component {
  render() {
    let totalPrice = this.props.items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={() => {
            this.props.dispatch(showCartDlg(false));
          }}
        >
          <AppBar position="static" style={{ backgroundColor: "#3863aa" }}>
            <Toolbar>
              <ShoppingCartIcon
                fontSize="large"
                style={{ color: "white", marginRight: 20 }}
              />
              Кошик
            </Toolbar>
          </AppBar>

          <div
            style={{
              maxHeight: 400,
              padding: 10,
              overflow: "auto"
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Назва</TableCell>
                  <TableCell>Ціна</TableCell>
                  <TableCell>Кількість</TableCell>
                  <TableCell>Дія</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.items.map((item, index) => {
                  return <CartRow item={item} key={item.id} {...this.props} />;
                })}
              </TableBody>
            </Table>
          </div>

          <div style={{ display: "flex", padding: 20, alignItems: "center" }}>
            <div
              style={{
                flex: 1
              }}
            >
              {" "}
              Загальна вартість: {totalPrice} грн.
            </div>

            <div style={{ marginLeft: 20}}> Замовити: 

            <Button
              style={{ width: 200, marginLeft: 10 }}
              variant="outlined"
              color="primary"
              href="tel:+380632112003"
              disabled={totalPrice === 0}
            >
            < PhoneIcon style={{ marginRight: 15 }} />
            +380936389876
            </Button>
            </div>
            {/* <Button
              variant="outlined"
              color="primary"
              disabled={totalPrice === 0}
              onClick={() => {
                this.props.dispatch(showCartDlg(false));
                this.props.dispatch(setCheckedOutItems(this.props.items));
                this.props.history.push("/order");
              }}
            >
              Підтвердити
            </Button> */}
          </div>
        </Dialog>
      </div>
    );
  }
}
const CartDialog = withRouter(connect(mapStateToProps)(ConnectedCartDialog));
export default CartDialog;
