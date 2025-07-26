import React, { useState } from 'react';
import Image from 'next/image';
import { Search, CircleUser } from 'lucide-react';
import Button from '@/components/common/Button';
// import Link from 'next/link';

const Header: React.FC = () => {
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

    return (
        <header className='bg-white border-b border-gray-300'>
            <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 md:px-8 '>
                {/* Main Header */}
                <div className='flex flex-1 items-center justify-between gap-6'>
                    {/* Logo */}
                    <div className='hidden lg:block'>
                        <Image
                            src="/assets/Logo Showcase.png"
                            alt="Logo"
                            width={120}
                            height={32}
                            className="w-auto h-15"
                        />
                    </div>

                    {/* Search Bar */}
                    <div className='flex-grow overflow-hidden'>
                        <div className='flex items-center border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full overflow-x-auto'>
                            {/* Search Section */}
                            <div className='flex flex-1 min-w-0 divide-x divide-gray-200'>

                                {/* Location */}
                                <div className='flex-1 min-w-0 px-4 py-3 border-r border-gray-200'>
                                    <p className='text-xs font-semibold text-gray-800'>Location</p>
                                    <input
                                        type="text"
                                        placeholder="Search for destination"
                                        className="w-full text-xs text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                    />
                                </div>

                                {/* Check In */}
                                <div className='flex-1 min-w-0 px-4 py-3 border-r border-gray-200'>
                                    <p className='text-sm font-semibold text-gray-800'>Check In</p>
                                    <input
                                        type="date"
                                        placeholder="Add date"
                                        className="w-full text-xs text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                    />
                                </div>

                                {/* Check Out */}
                                <div className='hidden md:flex-1 min-w-0 px-4 py-3 border-r border-gray-200'>
                                    <div className='text-sm font-semibold text-gray-800'>Check Out</div>
                                    <input
                                        type="date"
                                        placeholder="Add date"
                                        className="w-full text-xs text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                    />
                                </div>
                                {/* People */}
                                <div className='flex-1 min-w-0 px-4 py-3'>
                                    <div className='text-sm font-semibold text-gray-800'>People</div>
                                    <input
                                        type="number"
                                        placeholder="Add guests"
                                        min="1"
                                        className="w-full text-xs text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className='px-2'>
                                <button
                                    className='bg-orange-500 hover:bg-orange-600 text-white p-2 md:p-3 rounded-full transition-colors'
                                    aria-label="Search properties"
                                    title="Search properties"
                                >
                                    <Search className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Login in/ Sign Up  */}
                    <div className='hidden lg:flex items-center gap-4'>
                        <Button
                            variant='primary'
                            size='sm'
                            onClick={() => window.location.href = '/login'}
                        >
                            Login
                        </Button>
                        <Button
                            variant='outline'
                            size='sm'
                            onClick={() => window.location.href = '/signup'}
                        >
                            Sign Up
                        </Button>
                    </div>

                    {/* Mobile/Medium User Icon - visible on mobile/medium screens */}
                    <div className='lg:hidden relative'>
                        <button
                            onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
                            className='p-2 text-green-600 hover:text-green-700 transition-colors'
                            aria-label="User menu"
                        >
                            <CircleUser className='w-12 h-10' />
                        </button>

                        {/* Auth Menu DropDown */}
                        {isAuthMenuOpen && (
                            <div className="absolute right-0 top-15 bg-green-500 rounded-lg shadow-lg w-25 z-50">
                                <div className='py-2'>
                                    <button
                                        onClick={() => {
                                            window.location.href = '/login';
                                            setIsAuthMenuOpen(false);
                                        }}
                                        className='w-full mx-2 mb-0.5 hover:underline hover:scale-105 text-white '
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.location.href = '/signup';
                                            setIsAuthMenuOpen(false);
                                        }}
                                        className='w-full hover:underline hover:scale-105 text-white mx-2'
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );

};

export default Header;