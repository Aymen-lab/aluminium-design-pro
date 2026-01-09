import { Factory, Hammer, Wrench, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Fabrication",
    description: "Atelier équipé des dernières technologies. Découpe, assemblage et finition de précision pour des produits parfaits.",
    features: ["Découpe numérique", "Assemblage précis", "Contrôle qualité"],
  },
  {
    icon: Hammer,
    title: "Installation",
    description: "Équipes de poseurs qualifiés pour une installation soignée et conforme aux normes en vigueur.",
    features: ["Pose professionnelle", "Respect des délais", "Finitions impeccables"],
  },
  {
    icon: Wrench,
    title: "Réparation",
    description: "Service après-vente réactif pour l'entretien et la réparation de vos menuiseries aluminium.",
    features: ["Intervention rapide", "Pièces d'origine", "Garantie travaux"],
  },
  {
    icon: MessageCircle,
    title: "Conseil & Diagnostic",
    description: "Accompagnement personnalisé de A à Z. Étude technique, conseils et solutions sur mesure.",
    features: ["Étude gratuite", "Devis détaillé", "Suivi projet"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bronze font-medium text-sm uppercase tracking-wider mb-4 block">
            Nos Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un Accompagnement <span className="text-gradient-bronze">Complet</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De la conception à la maintenance, nous vous accompagnons à chaque étape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 hover:border-bronze/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-bronze/5 to-transparent rounded-bl-full" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bronze-dark to-bronze flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-bronze" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
