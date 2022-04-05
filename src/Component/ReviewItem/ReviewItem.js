import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, ratings, review } = props.review;
    return (
        <div className='grid grid-cols-3'>
            <div></div>
            <div className='review '>
                <h2>{name}</h2>
                <p>{ratings}</p>
                <p>{review}</p>
            </div>
            <div></div>
        </div>

    );
};

export default ReviewItem;