import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ label, title, description, align = 'left' }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className={`mb-16 lg:mb-20 ${align === 'center' ? 'text-center' : ''}`}
    >
      {label && (
        <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
