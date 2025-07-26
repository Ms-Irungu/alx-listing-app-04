import React, { useState } from 'react';
import { CreditCard, User, Phone, Mail, MapPin } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        streetAddress: '',
        aptSuite: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // This will handle form submission
    };

    return (
        <div className='bg-white px-4 py-3 shadow-md hover:shadow-lg border border-gray-100 rounded-xl'>
            {/* The Form */}
            <form onSubmit={handleSubmit} className='space-y-8'>
                {/* Contact Information */}
                <div>
                    <div className='flex items-center gap-2 mb-6'>
                        <User className='w-5 h-5 text-emerald-600 mr-1' />
                        <h2 className='text-2xl font-bold text-gray-900'>
                            Contact Details
                        </h2>
                    </div>
                    {/* First Name and Last Name */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                First Name
                            </label>
                            <input
                                type='text'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your first name'
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your last name'
                                required
                            />
                        </div>
                    </div>
                    {/* Email and Phone Number */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                <Mail className='w-5 h-5 inline mr-2' />
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your email'
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                <Phone className='w-5 h-5 inline mr-2' />
                                Phone Number
                            </label>
                            <input
                                type='tel'
                                name='phone'
                                value={formData.phone}
                                onChange={handleInputChange}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your phone number'
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Payment Information */}
                <div>
                    <div className='flex items-center gap-2 mb-6'>
                        <CreditCard className='w-5 h-5 mr-1 text-emerald-600' />
                        <h2 className='text-2xl font-bold text-gray-900'>
                            Payment Information
                        </h2>
                    </div>

                    <div className='space-y-6'>
                        <div>
                            <label className='block text-sm text-gray-700 mb-2'>
                                Card Number
                            </label>
                            <input
                                type='text'
                                name='cardNumber'
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='1234567890123456'
                                required
                                maxLength={16}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className='block text-sm text-gray-700 mb-2'>
                                    Expiration Date
                                </label>
                                <input
                                    type='text'
                                    name='expirationDate'
                                    value={formData.expirationDate}
                                    onChange={handleInputChange}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='MM/YY'
                                    required
                                    maxLength={5}
                                />
                            </div>
                            <div>
                                <label className='block text-sm text-gray-700 mb-2'>
                                    CVV
                                </label>
                                <input
                                    type='text'
                                    name='cvv'
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='123'
                                    required
                                    maxLength={4}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Billing Address */}
                <div>
                    <div className='flex items-center gap-2 mb-6'>
                        <MapPin className='w-5 h-5 mr-1 text-emerald-600' />
                        <h2 className='text-2xl font-bold text-gray-900'>
                            Billing Address
                        </h2>
                    </div>

                    <div className='space-y-6'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2 '>
                                Street Address
                            </label>
                            <input
                                type='text'
                                name='streetAddress'
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='123 Muindi Mbingu Street'
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Apt/Suite
                            </label>
                            <input
                                type='text'
                                name='aptSuite'
                                value={formData.aptSuite}
                                onChange={handleInputChange}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Apt, Suite, etc. (optional)'
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                    City
                                </label>
                                <input
                                    type='text'
                                    name='city'
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='Nairobi'
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                    State
                                </label>
                                <input
                                    type='text'
                                    name='state'
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='Nairobi County'
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                    Zip Code
                                </label>
                                <input
                                    type='text'
                                    name='zipCode'
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='00100'
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                    Country
                                </label>
                                <input
                                    type='text'
                                    name='country'
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='Kenya'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Submit Button */}
                <button
                    type='submit'
                    className='w-full  bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                >
                    Confirm & Pay
                </button>
            </form>
        </div>
    )
}

export default BookingForm;