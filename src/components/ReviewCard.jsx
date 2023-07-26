import Link from 'next/link';
import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card w-64 md:w-96 bg-base-100 shadow-xl text-left shadow-green-500">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{review.username}</h2>
                <p>{review.comment}</p>
                <p className="font-thin text-purple-800 text-xl">Rating : {review.rating}</p>
            </div>
        </div>
    );
};

export default ReviewCard;