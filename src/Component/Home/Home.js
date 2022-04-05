import React from 'react';
import useReviews from './../../Hook/useReviews';
import ReviewItem from './../ReviewItem/ReviewItem';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2 className="text-3xl font-bold mt-5">Tree Store</h2>
            <div className="mt-5 p-5">
                <div>
                    <h1 className='text-2xl font-bold m-5'>WE PROVIDE</h1>
                    <h1 className='text-5xl font-bold m-5'>Life</h1>
                    <p className='m-5 text-left'>Tree plantation means planting trees in large numbers throughout the country. Trees help us by providing us with food, oxygen, and fuel. There would be no oxygen if there were no trees, and life would stop. Tree damage means loss of life.</p>
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold mt-5">Reviews</h1>
                <div className="review-items-container">
               
                {
                    reviews.map(review => <ReviewItem
                        key={review.id}
                        review ={review}
                    ></ReviewItem>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;