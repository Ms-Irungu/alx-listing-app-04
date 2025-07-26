import React from 'react';
import Layout from '@/components/layout/Layout';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import Card from '@/components/common/Card';

const Home: React.FC = () => {
    return (
        <Layout>
            <section className='py-6 overflow-x-hidden'>
                <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {PROPERTYLISTINGSAMPLE.map((property, index) => (
                            <Card key={index} {...property}/>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;