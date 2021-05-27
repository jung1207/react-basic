import React from "react";

function Header(props) {
  return (
    <>
      <img src="../public/logo.png" alt="" />
      <div className="input-group input-group-lg">
        <img src="/images/logo.png" alt="" />
        <h2>Youtube</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
        ></input>
        <span className="input-group-text" id="basic-addon1">
          <i className="fas fa-search fa-sm"></i>
        </span>
      </div>
    </>
  );
}

export default Header;
