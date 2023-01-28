import Rating from '../ui/Rating';

const Review = () => {
  return (
    <div className='card review-item' style={{ maxWidth: '22rem' }}>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item reviewer'>Name</li>
        <li className='list-group-item review-stars'>
          <Rating />
        </li>
        <li className='list-group-item review-date'>22-5-2022</li>
        <li className='list-group-item review-rate'>Excllent</li>
      </ul>
    </div>
  );
};
export default Review;
