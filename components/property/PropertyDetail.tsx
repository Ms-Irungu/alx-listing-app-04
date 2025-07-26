import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { Star, MapPin, BedDouble, Bath, Users, Waves, Car, Flame, Wifi, Clock, Key, Mountain, Building, Heart, ChefHat, Coffee, Home, Share, MoveLeft } from "lucide-react";
import Button from "../common/Button";
import { useState, useEffect, ReactNode } from "react";
import clsx from "clsx";
import ReviewSection from "./ReviewSection";
import BookingSection from "./BookingSection";
import { useRouter } from "next/router";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("description");
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % property.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [property.images.length]);

    const tabs = [
        { id: "description", label: "Description" },
        { id: "offers", label: "What we offer" },
        { id: "reviews", label: "Reviews" },
        { id: "host", label: "About host" }
    ]

    const getAmenityIcon = (amenity: string) => {
        const iconMap: { [key: string]: ReactNode } = {
            // Match category values
            "Pool": <Waves className="w-5 h-5" />,
            "Private Pool": <Waves className="w-5 h-5" />,
            "Infinity Pool": <Waves className="w-5 h-5" />,
            "Free Parking": <Car className="w-5 h-5" />,
            "Fireplace": <Flame className="w-5 h-5" />,
            "Free WiFi": <Wifi className="w-5 h-5" />,
            "24h Checkin": <Clock className="w-5 h-5" />,
            "Self Checkin": <Key className="w-5 h-5" />,
            "Mountain View": <Mountain className="w-5 h-5" />,
            "City View": <Building className="w-5 h-5" />,
            "Ocean View": <Waves className="w-5 h-5" />,
            "Sea View": <Waves className="w-5 h-5" />,
            "Beachfront": <Waves className="w-5 h-5" />,
            "Pet Friendly": <Heart className="w-5 h-5" />,
            "Hot Tub": <Waves className="w-5 h-5" />,
            "Chef Service": <ChefHat className="w-5 h-5" />,
            "Guided Tours": <MapPin className="w-5 h-5" />,
            "Free Breakfast": <Coffee className="w-5 h-5" />,
            "Luxury Villa": <Home className="w-5 h-5" />,
            "Historical": <Building className="w-5 h-5" />,
            default: <Home className="w-5 h-5" />
        };
        return iconMap[amenity] || iconMap.default;
    }

    return (
        <div className="container mx-auto px-1 sm:px-4 lg:px-6 py-6 overflow-hidden">
            {/* Header Section */}
            <div>
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold">{property.name}</h1>
                <div className="flex xs:flex-col items-center justify-between gap-2 mt-2">
                    <div className="md:flex items-center space-x-6 hidden">
                        <div className="flex items-center space-x-2">
                            <Star className="md:w-5 md:h-5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 text-yellow-500 " />
                            <span className="font-semibold text-gray-900">{property.rating}</span>
                            {/* <span className="text-gray-600">{property.reviewCount} reviews</span> */}
                        </div>
                        <div className="flex items-center space-x-2 ">
                            <MapPin className="md:w-5 md:h-5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 text-gray-500" />
                            <span className="text-gray-600">{property.address.city}, {property.address.country}</span>
                        </div>
                    </div>

                    {/* Return Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 md:hidden"
                        onClick={() => router.back()} // Goes back to previous page
                    >
                        <MoveLeft className="w-4 h-4 mr-1" />
                        <span className="">Return</span>
                    </Button>

                    {/* Share and Save Button */}
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-600"
                            onClick={() => alert("Shared successfully!")}
                        >
                            <Share className="w-4 h-4 mr-1" />
                            <span className="">Share</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-600"
                            onClick={() => alert("Saved to your list!")}
                        >
                            <Heart className="w-4 h-4 mr-1" />
                            <span className="">Save</span>
                        </Button>
                    </div>
                </div>
                {/* End of Header Section */}
            </div>


            {/* Image Grid */}
            <div className="w-full overflow-hidden mt-4 rounded-xl">
                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-3 gap-2 h-[400px]">
                    {/* Large Left Image */}
                    <div className="col-span-2 relative h-full ">
                        <Image
                            src={property.images[0]}
                            alt="Large Left Image"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    {/* Right Side Images */}
                    <div className="grid grid-rows-2 gap-2">
                        <div className="relative row-span-1">
                            <Image
                                src={property.images[1]}
                                alt="Right Side Image 1"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2 h-full">
                            <div className="relative">
                                <Image
                                    src={property.images[2]}
                                    alt="Right Side Image 2"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={property.images[3]}
                                    alt="Right Side Image 3"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Slider View */}
                <div className="md:hidden relative w-full h-[250px] sm:h-[300px]">
                    <Image
                        src={property.images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        fill
                        className="object-cover rounded-lg"
                    />
                    {/* Dots */}
                    <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                        {property.images.map((_, index) => (
                            <span
                                key={index}
                                className={clsx(
                                    "w-2 h-2 rounded-full",
                                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                )}
                            />
                        ))}
                    </div>
                </div>
                {/* End of Image grid/gallery */}
            </div>

            {/* Amenities Available */}
            <div className="mt-6 flex sm:flex-row sm:items-center sm:justify-between gap-4 text-black text-sm">
                {/* Amenities Section */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 border border-gray-300 p-1 rounded-md">
                        <BedDouble className="w-3 h-3 md:w-5 md:h-5 " />
                        <span>{property.offers.bed} Bedrooms</span>
                    </div>
                    <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md">
                        <Bath className="w-3 h-3 md:w-5 md:h-5 " />
                        <span>{property.offers.shower} Bathrooms</span>
                    </div>
                    <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md">
                        <Users className="w-3 h-3 md:w-5 md:h-5 " />
                        <span>{property.offers.occupants} Guests</span>
                    </div>
                </div>
                {/* Add other divs is needed */}
                {/* Last div-End of Amenities available */}
            </div>

            {/* Tabs Navigation and Booking Section*/}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Tab Navigation */}
                <div className="border-t border-b border-gray-300 col-span-1 md:col-span-2 mb-4 md:mb-0">
                    <div className="border-b border-gray-300">
                        <nav className="-mb-px flex gap-2 md:flex-nowrap md:space-x-8 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={clsx(
                                        "whitespace-nowrap py-4 px-1 font-medium text-sm md:text-base transition-colors duration-200",
                                        activeTab === tab.id
                                            ? "border-b-2 border-blue-500 text-blue-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    )}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-2">
                        {activeTab === "description" && (
                            <div className="p-4">
                                <p className="text-gray-700  leading-relaxed">
                                    {property.description || "No description available..."}
                                </p>
                            </div>
                        )}

                        {activeTab === "offers" && (
                            <div className="p-4">
                                <h2 className="md:text-2xl text-lg font-semibold">What this place offers</h2>
                                <p className="mt-3 text-xs md:text-sm">Each home is fully equipped to meet your needs with ample space and privacy.</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                    {property.category.map((amenity, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                                        >
                                            {getAmenityIcon(amenity)}
                                            <span className="text-gray-700 text-sm">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Reviews */}
                        {activeTab === "reviews" && (
                            <ReviewSection
                                propertyId={property.name}
                                reviews={property.reviews || []}
                            />
                        )}
                        {/* Host Information - Add in here */}
                        {activeTab === "host" && (
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Meet your host</h3>
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Alex Rodriguez</h4>
                                        <p className="text-gray-500">Superhost • Hosting for 3 years</p>
                                        <p className="text-gray-700 leading-relaxed mt-2">
                                            I&apos;m passionate about hospitality and love sharing the beauty of this amazing location with guests from around the world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Booking Section */}
                <div className=" col-span-1 w-full">
                    <BookingSection price={property.price} />
                </div>
                {/* End of Tab Navigation and Booking section */}
            </div>

        </div>
    )

}

export default PropertyDetail;