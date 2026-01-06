import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Home, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Dealing',
    description: 'From apartments to estates, we help you find homes that match your lifestyle and aspirations. Our curated approach ensures every property meets our exacting standards.'
  },
  {
    icon: Building,
    title: 'Commercial Properties',
    description: 'Strategic commercial real estate solutions for businesses seeking premium spaces. We understand that your workspace reflects your brand.'
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Data-driven investment guidance to build and grow your property portfolio. We identify opportunities that align with your financial goals.'
  },
  {
    icon: Users,
    title: 'Property Consulting',
    description: 'Expert consultation services for buyers, sellers, and developers. Our insights help you make informed decisions in any market condition.'
  }
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="Comprehensive real estate services delivered with precision and care. We approach every engagement with the same dedication to excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border bg-transparent hover:bg-secondary/50 transition-colors duration-500 h-full">
                  <CardContent className="p-8 lg:p-10">
                    <service.icon size={32} strokeWidth={1} className="mb-6 text-foreground" />
                    <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-8 uppercase">
              Our Approach
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12">
              We believe in a process that prioritizes understanding. Before we show you a single property, we learn what matters most to you.
            </h2>

            <div className="space-y-8">
              {['Discovery', 'Curation', 'Guidance', 'Completion'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <span className="text-sm text-muted-foreground w-8">0{index + 1}</span>
                  <span className="text-lg">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
