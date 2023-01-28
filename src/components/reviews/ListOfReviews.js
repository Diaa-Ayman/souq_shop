import Review from './review';
// UNUSED SECTION
const Reviews = (props) => {
  return (
    <div className='reviews-section'>
      {/*for test only */}
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <div className='hide-btn'>
        <button onClick={props.onHide} className='btn btn-dark'>
          Hide Reviews
        </button>
      </div>
    </div>
  );
};
export default Reviews;
