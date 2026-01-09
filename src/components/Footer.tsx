import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-bronze-dark to-bronze rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary">A</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg">Alu</span>
                <span className="font-display font-semibold text-lg text-bronze-light">Premium</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Spécialiste de la menuiserie aluminium sur mesure depuis plus de 20 ans. Qualité, savoir-faire et satisfaction client au cœur de notre métier.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-bronze/30 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-bronze/30 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-bronze/30 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Produits</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Fenêtres Aluminium</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Portes & Entrées</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Façades Vitrées</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Garde-corps</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Portes de Garage</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Fabrication Sur Mesure</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Installation</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Réparation</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Conseil Technique</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">Devis Gratuit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/70">123 Avenue de l'Aluminium</li>
              <li className="text-primary-foreground/70">75000 Paris, France</li>
              <li><a href="tel:+33123456789" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">01 23 45 67 89</a></li>
              <li><a href="mailto:contact@alupremium.fr" className="text-primary-foreground/70 hover:text-bronze-light transition-colors">contact@alupremium.fr</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 AluPremium. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">Mentions légales</a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">Politique de confidentialité</a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-bronze/20 flex items-center justify-center hover:bg-bronze/40 transition-colors duration-200"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5 text-bronze-light" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
