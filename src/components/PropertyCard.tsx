import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
}

const PropertyCard = ({ id, title, location, type, image }: PropertyCardProps) => {
  return (
    <Link to={`/work/${id}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden aspect-[4/5] mb-6">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-xs tracking-wider text-muted-foreground mb-2">{type}</p>
          <h3 className="text-lg font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </motion.div>
      </motion.article>
    </Link>
  );
};

export default PropertyCard;
