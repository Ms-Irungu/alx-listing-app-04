import React from 'react'
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Review } from '@/interfaces';

interface ReviewSectionProps {
    reviews: Review[];
    rating: number;
    totalReviews: number;
}


const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, rating, totalReviews }) => {

    // Function to render stars based on rating (handles decimals)
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating); // Full stars (4 for 4.5)
        const hasHalfStar = rating % 1 !== 0;  // Check if there's a decimal
        const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars
        
        return (
            <div className='flex items-center space-x-1'>
                {/* Full stars */}
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} className='text-yellow-500 w-4 h-4 fill-current' />
                ))}
                
                {/* Half star */}
                {hasHalfStar && (
                    <div className="relative">
                        <Star className='text-gray-300 w-4 h-4' />
                        <Star className='text-yellow-500 w-4 h-4 fill-current absolute top-0 left-0' 
                              style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    </div>
                )}
                
                {/* Empty stars */}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`empty-${i}`} className='text-gray-300 w-4 h-4' />
                ))}
            </div>
        );
    };

    return (
        <div>
            <div className='flex items-center space-x-2 mb-2'>
                <Star className='text-yellow-500' />
                <span className='text-gray-700'>{rating}</span>
                <span className='text-gray-700'>{totalReviews} Reviews</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {reviews.map((review, index) => (
                    <div key={index} className='bg-white p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-3 mb-3'>
                            <Image
                                src={review.avatar}
                                alt={review.name}
                                width={40}
                                height={40}
                                className='rounded-full'
                            />
                            <div>
                                <h4 className='font-semibold'>{review.name}</h4>
                                <div className='flex items-center space-x-2'>
                                    {renderStars(review.rating)}
                                    <span className='text-sm text-gray-600'>({review.rating})</span>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-700'>{review.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewSection;