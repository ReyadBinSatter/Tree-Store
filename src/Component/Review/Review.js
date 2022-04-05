import React from 'react';
import useReviews from './../../Hook/useReviews';
import ReviewItem from './../ReviewItem/ReviewItem';

const Review = () => {
    const [reviews, setReviews] = useReviews();

    return (
     
            <div className="review-items-container">
               
                {
                    reviews.map(review => <ReviewItem
                        key={review.id}
                        review ={review}
                    ></ReviewItem>)
                }
            </div>
    );
};

export default Review;