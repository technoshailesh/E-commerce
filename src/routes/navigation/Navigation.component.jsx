import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';
import  { ReactComponent as CrwnLogo} from '../../assests/crown.svg';
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
         < CrwnLogo className="logo" />
        </Link>
        <div className="nav-link-container" style={{marginTop:"37px"}}>
          <Link className="nav-link" to="/Shop">
               <b>SHOP</b>
          </Link>
          <Link className="nav-link" to="/SignIn">
            <b>SIGNIN</b>
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
