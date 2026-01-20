import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <h3 className="text-lg tracking-[0.3em] font-medium mb-6">
              SIVA REALTY
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Thoughtfully curated properties for discerning clients. We believe
              in minimal design and maximum value.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6 tracking-wide">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                to="/services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6 tracking-wide">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p>@sivarealty.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                Janta Vidyalay, Kursi Road,
                <br />
                Lucknow, UP 226003
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SIVA REALTY. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
