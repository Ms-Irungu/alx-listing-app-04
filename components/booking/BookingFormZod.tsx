import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, User, Phone, Mail, MapPin } from 'lucide-react';

// Zod Validation Schema
const bookingSchema = z.object({
    // Personal Information
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),

    // Payment Information
    cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format: MM/YY"),
    cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),

    // Billing Address Information
    streetAddress: z.string().min(5, "Street address is required"),
    aptSuite: z.string().optional(),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    zipCode: z.string().regex(/^\d{5}$/, "Invalid ZipCode format"),
    country: z.string().min(2, "Country is required")
})

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm = () => {
    // React Hook Form Setup with Zod Resolver
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        mode: 'onChange' //Validates as user types
    });

    // Form Submission Handler
    const onSubmit = async (data: BookingFormData) => {
        try {
            console.log("Form Data:", data)
            // Here you would send data to your API
            //  Await submitBooking(data)
            alert("Booking Submitted Successfully!");
            reset();
        } catch (error) {
            console.error('Submission error:', error);
            alert("Submission Failed. Please try again.")
        }
    }

    return (
        <div className='bg-white p-8 shadow-lg rounded-xl border border-gray-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                {/* Contact Information */}
                <div>
                    <div className='flex items-center gap-2 mb-6'>
                        <User className='w-5 h-5 text-emerald-600 mr-1' />
                        <h2 className='text-2xl font-bold text-gray-900'>
                            Contact Details
                        </h2>
                    </div>
                    {/* First Name and Last Name */}
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                First Name
                            </label>
                            <input
                                type='text'
                                {...register("firstName")}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your first name'
                            />
                            {errors.firstName && (
                                <p className='text-red-500 text-sm mt-1'>{errors.firstName.message}</p>
                            )}
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                {...register("lastName")}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your last name'
                            />
                            {errors.lastName && (
                                <p className='text-red-500 text-sm mt-1'>{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>
                    {/* Email and Phone Number */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                <Mail className='w-5 h-5 mr-1' />
                                Email
                            </label>
                            <input
                                type='email'
                                {...register("email")}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your email'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                <Phone className='w-5 h-5 inline mr-1' />
                                Phone Number
                            </label>
                            <input
                                type='tel'
                                {...register("phone")}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='Enter your phone number'
                            />
                            {errors.phone && (
                                <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>
                            )}
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
                                {...register("cardNumber")}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='1234567890123456'
                                maxLength={16}
                            />
                            {errors.cardNumber && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.cardNumber.message}
                                </p>
                            )}
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className='block text-sm text-gray-700 mb-2'>
                                    Expiration Date
                                </label>
                                <input
                                    type='text'
                                    {...register("expirationDate")}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='MM/YY'
                                    maxLength={5}
                                />
                                {errors.expirationDate && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.expirationDate.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className='block text-sm text-gray-700 mb-2'>
                                    CVV
                                </label>
                                <input
                                    type='text'
                                    {...register("cvv")}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='123'
                                    maxLength={3}
                                />
                                {errors.cvv && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.cvv.message}
                                    </p>
                                )}
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
                                {...register("streetAddress")}
                                className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                placeholder='123 Muindi Mbingu Street'
                            />
                            {errors.streetAddress && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.streetAddress.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Apt/Suite
                            </label>
                            <input
                                type='text'
                                {...register("aptSuite")}
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
                                    {...register("city")}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='Nairobi'
                                />
                                {errors.city && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.city.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                    State
                                </label>
                                <input
                                    type='text'
                                    {...register("state")}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='Nairobi County'
                                />
                                {errors.state && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.state.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                    Zip Code
                                </label>
                                <input
                                    type='text'
                                    {...register("zipCode")}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='00100'
                                />
                                {errors.zipCode && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.zipCode.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                    Country
                                </label>
                                <input
                                    type='text'
                                    {...register("country")}
                                    className='bg-gray-50 w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:bg-white'
                                    placeholder='Kenya'
                                />
                                {errors.country && (
                                    <p className='text-red-500 text-sm mt-1'>
                                        {errors.country.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Submit Button */}
                <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full  bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                    >
                        {isSubmitting ? 'Processing...' : 'Confirm & Pay'}
                    </button>
            </form>
        </div>
    );
};

export default BookingForm;