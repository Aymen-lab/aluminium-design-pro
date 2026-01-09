import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-facade.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Façade aluminium moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-bronze/20 border border-bronze/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Award className="w-4 h-4 text-bronze-light" />
            <span className="text-bronze-light text-sm font-medium">Excellence en aluminium depuis + de 20 ans</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Solutions Aluminium{" "}
            <span className="text-gradient-bronze">Sur Mesure</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Fabrication et installation de menuiseries aluminium haut de gamme. 
            Fenêtres, portes, façades et garde-corps pour particuliers et professionnels.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Découvrir nos Réalisations
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-bronze/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-bronze-light" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Garantie 10 ans</p>
                <p className="text-primary-foreground/60 text-xs">Sur tous nos produits</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-bronze/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-bronze-light" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Certifié Qualibat</p>
                <p className="text-primary-foreground/60 text-xs">Qualité professionnelle</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-bronze/20 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-bronze-light" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">+500 Projets</p>
                <p className="text-primary-foreground/60 text-xs">Réalisés avec succès</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
