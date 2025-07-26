import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropertyDetails from '@/components/property/PropertyDetail';
import { PropertyProps } from '@/interfaces';

const PropertyDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState<PropertyProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const response = await axios.get<PropertyProps>(`/api/properties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error("Error fetching property details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!property) {
        return <p>Property not found.</p>;
    }

    return <PropertyDetails property={property} />;
};

export default PropertyDetailPage;