import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { properties } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <Layout>
        <div className="pt-32 pb-24 container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-2xl font-light mb-4">Property not found</h1>
          <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground">
            Back to Work
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              Back to Work
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
                  {property.type}
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
                  {property.title}
                </h1>
                <p className="text-muted-foreground mb-8">{property.location}</p>

                <p className="text-muted-foreground leading-relaxed mb-12">
                  {property.description}
                </p>

                <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
                  <div>
                    <p className="text-xs tracking-wider text-muted-foreground mb-2">Area</p>
                    <p className="text-lg">{property.specs.area}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-wider text-muted-foreground mb-2">Year</p>
                    <p className="text-lg">{property.specs.year}</p>
                  </div>
                  {property.specs.bedrooms && (
                    <div>
                      <p className="text-xs tracking-wider text-muted-foreground mb-2">Bedrooms</p>
                      <p className="text-lg">{property.specs.bedrooms}</p>
                    </div>
                  )}
                  {property.specs.bathrooms && (
                    <div>
                      <p className="text-xs tracking-wider text-muted-foreground mb-2">Bathrooms</p>
                      <p className="text-lg">{property.specs.bathrooms}</p>
                    </div>
                  )}
                </div>

                <Link 
                  to="/contact" 
                  className="mt-12 inline-block text-sm tracking-wide border border-foreground px-8 py-4 text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  Inquire About This Property
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;
