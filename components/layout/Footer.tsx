import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-400 py-6 mt-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
                <div>
                    <Image
                        src="/assets/Footer Logo.png"
                        alt="Footer-Logo"
                        width={50}
                        height={32}
                    />
                    <p className="mt-2 text-sm">
                        ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-2">Explore</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Apartments in Dubai
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Hotels in New York
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Villa in Spain
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Mansion in Indonesia
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-2">Company</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="/about" className="hover:underline">
                                About Us
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/blog" className="hover:underline">
                                Blog
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/career" className="hover:underline">
                                Career
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/customers" className="hover:underline">
                                Customers
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/brand" className="hover:underline">
                                Brand
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-2">Help</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="/support" className="hover:underline">
                                Support
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/cancelBooking" className="hover:underline">
                                Cancel Booking
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/refundsProcess" className="hover:underline">
                                Refunds Process
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom section with full width */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="flex flex-col items-center lg:flex-row justify-between gap-4">
                    <p className="text-sm">
                        Some hotel requires you cancel more than 24 hours before check-in. Details{" "}
                        <Link href="/details" className="text-green-400 hover:text-green-300 transition-colors">
                            Here
                        </Link>
                    </p>

                    <div>
                        <ul className="flex flex-wrap gap-4 md:gap-6">
                            <li>
                                <Link href="/terms" className="text-sm hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/policy" className="text-sm hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-sm hover:text-white transition-colors">
                                    Cookies Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners" className="text-sm hover:text-white transition-colors">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;