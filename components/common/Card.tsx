import React from 'react';
import { PropertyProps } from '../../interfaces';
import Link from 'next/link';
import Image from 'next/image';
import { Star, BedDouble, Bath, Users, BadgeDollarSign } from 'lucide-react';

const Card: React.FC<PropertyProps> = ({
  image,
  discount,
  category,
  name,
  rating,
  address,
  offers,
  price
}) => {
  return (
    <Link href={`/property/${name}`} className="no-underline text-inherit">
      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105">
        {/* Image Section */}
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className='absolute top-3 left-3 bg-green-500 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1'>
            <BadgeDollarSign className='w-4 h-4 text-white' />
            <span className='text-sm font-semibold text-white'>{discount} Off</span>
          </div>
        </div>
        {/* Other Information */}
        <div className="p-5">
          {/* First Div with span texts */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {category.map((aCategory, index) => (
              <span
                key={index}
                className='text-xs bg-gray-100 rounded-lg p-1 text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-200 transition-colors duration-200'>
                {aCategory}
              </span>
            ))}
          </div>
          {/* Title, Rating */}
          <div className='flex items-center justify-between mb-3'>
            <h3 className='font-semibold text-lg text-gray-900'>{name}</h3>
            <div className='flex items-center gap-1'>
              <Star className='text-yellow-400 fill-current w-4 h-4' />
              <span className='text-sm font-medium'>{rating}</span>
            </div>
          </div>
          {/* Description */}
          <p className='text-sm text-gray-600 mb-4 line-clamp-2'>{address.state}, {address.city}, {address.country}</p>
          {/* Amenities and Price */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between border border-gray-200 rounded-lg p-2 text-black text-sm gap-2'>
              <div className='flex items-center gap-1'>
                <BedDouble className='w-4 h-4' />
                <span>{offers.bed}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Bath className='w-4 h-4' />
                <span>{offers.shower}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Users className='w-4 h-4' />
                <span>{offers.occupants}</span>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-xl font-bold text-gray-900'>${price}</span>
              <span className='text-gray-900 text-sm'>/ night</span>
            </div>
          </div>

        </div>
      </div>
    </Link>

  );
};

export default Card;
