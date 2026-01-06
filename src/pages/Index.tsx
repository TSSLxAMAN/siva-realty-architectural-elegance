import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

const Index = () => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <Layout>
      <Hero />

      {/* Featured Properties */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Featured"
            title="Selected Properties"
            description="A curated selection of our finest properties, each representing our commitment to exceptional design and thoughtful living."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/work" 
              className="inline-block text-sm tracking-wide border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              View All Properties
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-xs tracking-[0.3em] text-muted-foreground mb-8 uppercase">
                Our Philosophy
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8">
                We believe that exceptional spaces shape exceptional lives. 
                Every property we represent embodies a commitment to 
                <span className="italic"> thoughtful design</span>, 
                <span className="italic"> quality craftsmanship</span>, and 
                <span className="italic"> timeless elegance</span>.
              </h2>
              <Link 
                to="/about" 
                className="inline-block text-sm tracking-wide border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
          >
            <div>
              <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
                Ready to Begin?
              </p>
              <h2 className="text-2xl md:text-3xl font-light">
                Let's find your next home.
              </h2>
            </div>
            <Link 
              to="/contact" 
              className="text-sm tracking-wide border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
