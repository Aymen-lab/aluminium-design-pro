import { MessageSquare, Pencil, Hammer, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Étude & Conseil",
    description: "Prise de contact, analyse de vos besoins et étude technique gratuite sur site.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Fabrication Sur Mesure",
    description: "Conception et fabrication dans notre atelier avec des matériaux de qualité premium.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Installation Professionnelle",
    description: "Pose soignée par nos équipes qualifiées, dans le respect des normes et des délais.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Suivi & Maintenance",
    description: "Service après-vente réactif et accompagnement pour l'entretien de vos installations.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processus" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bronze font-medium text-sm uppercase tracking-wider mb-4 block">
            Notre Processus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une Méthode <span className="text-gradient-bronze">Éprouvée</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un accompagnement structuré pour des projets réussis, du premier contact à la livraison finale.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-bronze/20 via-bronze to-bronze/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center group hover:border-bronze/30 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="relative mx-auto w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bronze-dark to-bronze flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-primary">{step.number}</span>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-bronze/20 animate-ping opacity-0 group-hover:opacity-50" style={{ animationDuration: "2s" }} />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto rounded-lg bg-bronze/10 flex items-center justify-center mb-4 group-hover:bg-bronze/20 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-bronze" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile & Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-bronze/30 rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
