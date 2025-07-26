import React from 'react';
import { Star, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

interface BookingDetails {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
    reviewScore?: number;
    totalReviews?: number;
}

interface OrderSummaryProps {
    bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
    const {
        propertyName,
        price,
        bookingFee,
        totalNights,
        startDate,
        reviewScore = 4.76,
        totalReviews = 345
    } = bookingDetails;

    const subtotal = price * totalNights;
    const grandTotal = subtotal + bookingFee;

    return (
        <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Order Details</h2>

            {/* Property Information */}
            <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                    <Image
                        src="/assets/image 3.png"
                        alt={propertyName}
                        width={112} // w-28 = 112px
                        height={112} // h-28 = 112px
                        className="object-cover rounded-lg shadow-md"
                        priority={false} // Set to true if this image is above the fold
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {propertyName}
                    </h3>
                    <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-semibold text-gray-700">
                            {reviewScore}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                            ({totalReviews} reviews)
                        </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{startDate}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{totalNights} Night{totalNights > 1 ? 's' : ''}</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Price Breakdown */}
            <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Price Breakdown</h3>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                            ${price.toLocaleString()} × {totalNights} night{totalNights > 1 ? 's' : ''}
                        </span>
                        <span className="font-semibold text-gray-900">
                            ${subtotal.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Booking Fee</span>
                        <span className="font-semibold text-gray-900">
                            ${bookingFee.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Taxes & Service</span>
                        <span className="font-semibold text-gray-900">
                            Included
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Grand Total */}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Grand Total</span>
                    <span className="text-xl font-bold text-emerald-600">
                        ${grandTotal.toLocaleString()}
                    </span>
                </div>
            </div>

            {/* Additional Information */}
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Star className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-emerald-800">
                            Great choice!
                        </p>
                        <p className="text-sm text-emerald-700">
                            This property is highly rated by guests like you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;