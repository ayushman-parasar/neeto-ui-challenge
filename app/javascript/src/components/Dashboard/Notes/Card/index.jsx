import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note, setIsDeleteAlertOpen }) => {
  return (
    <div className="neeto-ui-shadow-xs border my-4 p-4">
      <Header note={note} setIsDeleteAlertOpen={setIsDeleteAlertOpen} />
      <Body note={note} />
      <Footer />
    </div>
  );
};

export default Card;
