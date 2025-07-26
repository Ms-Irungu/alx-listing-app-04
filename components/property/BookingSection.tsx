import React from 'react'

const BookingSection:React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white border p-6 mx-auto shadow-md rounded-lg">
        <h3 className="text-xl font-semibold border-b border-gray-400">${price}/night</h3>
        <div className="mt-4">
            <label htmlFor='check-in'>Check-in</label>
            <input
                id="check-in"
                type="date"
                className="border p-2 w-full mt-2 rounded-lg"
            />
        </div>
        <div className="mt-4">
            <label htmlFor="check-out">Check out</label>
            <input 
                id="check-out"
                type="date"
                className="border p-2 w-full mt-2 rounded-lg"
            />
        </div>

        {/* Total Payment */}
        <div className="mt-4">
            <p>Total payment: <strong>${price * 7}</strong></p>
        </div>

        {/* Reserve Button */}
        <button className='mt-4 mx-auto block bg-green-500 w-full text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200'>
            Reserve Now
        </button>
    </div>
  )
}

export default BookingSection;