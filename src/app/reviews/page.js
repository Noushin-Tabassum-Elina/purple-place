import React from 'react';
import getAllReviews from '@/utils/getAllReview';
import ReviewCard from '@/components/ReviewCard';

const Review = async () => {
  const reviews = await getAllReviews();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {reviews.length ? (
        reviews.map((review, index) => <ReviewCard key={index} review={review} />)
      ) : (
        <p>data unavailable</p>
      )}

    </div>
  );
};

export default Review;