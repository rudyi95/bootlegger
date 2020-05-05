import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  showCartDlg,
  toggleMenu,
  logout
} from "../../Redux/Actions";
import cartImage from "../../Images/logo2.png";
import Auth from "../../Auth";
import { categories } from "../../Data";
import PhoneIcon from '@material-ui/icons/Phone';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
/* import Person from "@material-ui/icons/PersonOutline";
import Avatar from "@material-ui/core/Avatar"; */
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const mapStateToProps = state => {
  return {
    nrOfItemsInCard: state.cartItems.length,
    loggedInUser: state.loggedInUser
  };
};

// Option items for product categories.
const categoryOptions = categories.map(x => {
  return (
    <MenuItem key={x.title} value={x.title}>
      {x.name}
    </MenuItem>
  );
});

class ConnectedHeader extends Component {
  state = {
    searchTerm: "",
    anchorEl: null,
    categoryFilterValue: categories[0].title
  };

  render() {
    let { anchorEl } = this.state;

    return (
      <AppBar className="header"
        position="static"
        style={{ backgroundColor: "#FAFAFB" }}
      >
        <Toolbar>
          <div className="left-part"
          >
            <IconButton className="header-menu-btn"
            style={{
              marginLeft: -10
            }}
              onClick={() => {
                this.props.dispatch(toggleMenu());
              }}
            >
              <MenuIcon size="small" />
            </IconButton>

            <img
              className="logo"
              src={cartImage}
              alt={"Logo"}
              style={{  width: 100, height: 70 }}
            />
            
            <TextField
              className="search-txt"
              label="Пошук..."
              value={this.state.searchTerm}
              onChange={e => {
                this.setState({ searchTerm: e.target.value });
              }}
              style={{ marginLeft: 40,  marginBottom: 15}}
            />


            <Select
              className="category-search"
              style={{ maxWidth: 200, marginLeft: 20 }}
              value={this.state.categoryFilterValue}
              MenuProps={{
                style: {
                  maxHeight: 500
                }
              }}
              onChange={e => {
                this.setState({ categoryFilterValue: e.target.value });
              }}
            >
              {categoryOptions}
            </Select>

            <Button 
              className="search-btn"
              style={{ marginLeft: 20, border: "2px #4282ad solid" }}
              onClick={() => {
                this.props.history.push(
                  "/?category=" +
                  this.state.categoryFilterValue +
                  "&term=" +
                  this.state.searchTerm
                );
              }}
            >
              {" "}
              <span className="search-btn-txt">Шукати</span>
              <span className="search-icon"><SearchIcon 
              style={{
                fontSize: "15px",
                color: "gray"
              }}
              /></span>
            </Button>
          </div>
          <div className="right-part">
          <IconButton 
          style={{borderRadius: 50 }}
          href="tel:+380936389876"
          >
            <PhoneIcon className="phone-btn" />
              <span className="phone-txt"> +380936389876 </span>
            </IconButton>

            <Button className="insta-btn" style={{ borderRadius: 50}}>
              <a href="https://www.instagram.com/13_bootlegger/">
              <InstagramIcon className="insta-btn" style={{marginTop: 5, color: "gray"}} />
              </a>
            </Button>
            
            {/* {!this.props.loggedInUser ? (
              <Button
                variant="outlined"
                style={{ marginRight: 20 }}
                color="primary"
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Увійти
              </Button>
            ) : (
                <Avatar
                  onClick={event => {
                    this.setState({ anchorEl: event.currentTarget });
                  }}
                  style={{ backgroundColor: "#3f51b5", marginRight: 10 }}
                >
                  <Person />
                </Avatar>
              )} */}
            <IconButton
              aria-label="Cart"
              onClick={() => {
                this.props.dispatch(showCartDlg(true));
              }}
            >
              <Badge  badgeContent={this.props.nrOfItemsInCard} color="primary">
                <ShoppingCartIcon className="cart-btn" />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => {
                this.setState({ anchorEl: null });
              }}
            >
              <MenuItem
                onClick={() => {
                  this.setState({ anchorEl: null });
                  this.props.history.push("/order");
                }}
              >
                Оформити замовлення
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Auth.signout(() => {
                    this.props.dispatch(logout());
                    this.props.history.push("/");
                  });
                  this.setState({ anchorEl: null });
                }}
              >
                Вийти
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const Header = withRouter(connect(mapStateToProps)(ConnectedHeader));
export default Header;
