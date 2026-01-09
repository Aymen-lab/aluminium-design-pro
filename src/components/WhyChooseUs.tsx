import { Award, Ruler, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Savoir-faire Expert",
    description: "Plus de 20 ans d'expérience dans la fabrication et l'installation de menuiseries aluminium de qualité supérieure.",
  },
  {
    icon: Ruler,
    title: "100% Sur-Mesure",
    description: "Chaque projet est unique. Nous concevons des solutions parfaitement adaptées à vos besoins et contraintes techniques.",
  },
  {
    icon: Shield,
    title: "Qualité Aluminium",
    description: "Matériaux premium, profilés certifiés et finitions impeccables pour une durabilité exceptionnelle.",
  },
  {
    icon: Clock,
    title: "Sécurité & Durabilité",
    description: "Des installations conformes aux normes les plus strictes, garanties 10 ans pour votre tranquillité d'esprit.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bronze font-medium text-sm uppercase tracking-wider mb-4 block">
            Pourquoi Nous Choisir
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            L'Excellence au Service de <span className="text-gradient-bronze">Vos Projets</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nous combinons expertise artisanale et technologies modernes pour vous offrir des solutions aluminium d'exception.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:border-bronze/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bronze-dark to-bronze flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-bronze-dark to-bronze rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
