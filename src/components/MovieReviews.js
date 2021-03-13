// Code MovieReviews Here

import React from 'react';

const MovieReviews = ({reviews}) => (
  <div className='review-list'>
    reviews.map(Review)
  </div>
  )

export default MovieReviews;