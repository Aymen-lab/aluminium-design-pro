import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-bronze rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-bronze rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - CTA Content */}
              <div>
                <span className="text-bronze-light font-medium text-sm uppercase tracking-wider mb-4 block">
                  Prêt à Démarrer ?
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  Obtenez Votre <span className="text-gradient-bronze">Devis Gratuit</span>
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                  Notre équipe d'experts est à votre disposition pour étudier votre projet et vous proposer une solution sur mesure. Contactez-nous dès maintenant !
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    Demander un Devis
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="heroOutline" size="xl">
                    <Phone className="w-5 h-5" />
                    Nous Appeler
                  </Button>
                </div>
              </div>

              {/* Right - Contact Info */}
              <div className="space-y-6">
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bronze/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-bronze-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">Téléphone</h4>
                      <p className="text-primary-foreground/70">01 23 45 67 89</p>
                      <p className="text-primary-foreground/50 text-sm">Lun - Ven : 8h - 18h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bronze/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-bronze-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">Email</h4>
                      <p className="text-primary-foreground/70">contact@alupremium.fr</p>
                      <p className="text-primary-foreground/50 text-sm">Réponse sous 24h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bronze/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-bronze-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">Showroom</h4>
                      <p className="text-primary-foreground/70">123 Avenue de l'Aluminium</p>
                      <p className="text-primary-foreground/50 text-sm">75000 Paris</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
