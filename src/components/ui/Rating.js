import { Fragment } from "react";
import StarIcon from "./Staricon";

const Rating = () => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <Fragment>
      {rating.map((ele) => (
        <StarIcon />
      ))}
    </Fragment>
  );
};

export default Rating;
