import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Our Story"
            title="About SIVA REALTY"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Founded with a clear vision: to redefine how people experience real estate. 
                We approach each property not as a transaction, but as an opportunity to 
                match exceptional spaces with the people who will appreciate them most.
              </p>
              <p>
                Our team brings together decades of experience in architecture, design, 
                and real estate. This unique perspective allows us to see beyond square 
                footage and price points—we understand how spaces feel, how light moves 
                through rooms, and how design choices impact daily life.
              </p>
              <p>
                We've built our reputation on discretion, expertise, and an unwavering 
                commitment to our clients' interests. Whether you're seeking a home 
                or an investment, we bring the same level of dedication to every engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <p className="text-4xl lg:text-5xl font-light mb-2">15+</p>
                <p className="text-sm text-muted-foreground tracking-wide">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-light mb-2">$2B+</p>
                <p className="text-sm text-muted-foreground tracking-wide">In Property Sales</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-light mb-2">500+</p>
                <p className="text-sm text-muted-foreground tracking-wide">Properties Sold</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-8 uppercase">
              Our Values
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  title: 'Integrity',
                  description: 'We operate with complete transparency. Our advice is always in your best interest, even when it means recommending against a sale.'
                },
                {
                  title: 'Excellence',
                  description: 'We hold ourselves to the highest standards. Every property we represent, every interaction we have, reflects our commitment to quality.'
                },
                {
                  title: 'Discretion',
                  description: 'We understand that real estate decisions are deeply personal. Your privacy and confidentiality are paramount to how we operate.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
