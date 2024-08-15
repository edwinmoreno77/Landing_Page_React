import PropTypes from "prop-types";
import { Card } from "./Card";

export const PageBody = ({ cardNum }) => {
  //creates an array of card components the size of the received number (cardNum)
  const cardArray = [];

  for (let i = 0; i < cardNum; i++) {
    const cardComponent = <Card num={i} key={i} />;
    cardArray.push(cardComponent);
  }

  return (
    <div className="container-fluid">
      <div className="row vh-55">{cardArray}</div>
    </div>
  );
};

PageBody.propTypes = {
  cardNum: PropTypes.number.isRequired,
};
