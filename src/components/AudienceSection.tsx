import { Home, Compass, Building, Store } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Particuliers",
    description: "Rénovation ou construction neuve, nous créons vos menuiseries sur mesure pour un intérieur confortable et sécurisé.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Compass,
    title: "Architectes",
    description: "Partenaire technique de confiance pour vos projets architecturaux. Solutions innovantes et respect du cahier des charges.",
    color: "from-bronze/20 to-bronze-light/10",
  },
  {
    icon: Building,
    title: "Promoteurs",
    description: "Accompagnement de vos programmes immobiliers. Capacité de production adaptée et respect des délais chantiers.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Store,
    title: "Commerçants",
    description: "Vitrines attractives et sécurisées, devantures sur mesure pour valoriser votre commerce et attirer la clientèle.",
    color: "from-violet-500/20 to-violet-600/10",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bronze-light font-medium text-sm uppercase tracking-wider mb-4 block">
            À Qui S'adresse Notre Offre
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Des Solutions Pour <span className="text-gradient-bronze">Chaque Projet</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Que vous soyez un particulier ou un professionnel, nous avons l'expertise pour répondre à vos besoins.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-bronze/40 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-bronze/20 flex items-center justify-center mb-6 group-hover:bg-bronze/30 transition-colors duration-300">
                  <audience.icon className="w-7 h-7 text-bronze-light" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {audience.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
