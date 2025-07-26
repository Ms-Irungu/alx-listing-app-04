import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";

interface PropertyPageProps {
    property: PropertyProps | null;
}


export default function PropertyPage({ property }: PropertyPageProps) {
    if (!property) return <p>Property not found</p>
    return <PropertyDetail property={property} />;
    
}

//Generate Paths based on property names (assuming name is unique)
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = PROPERTYLISTINGSAMPLE.map((property) => ({
        params: { id: property.name },
    }));

    return { 
        paths, 
        fallback: false 
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params!;
    const property = PROPERTYLISTINGSAMPLE.find((property) => property.name === id) || null;

    return {
        props: {
            property,
        }
    }
}