import { 
  LayoutGrid, 
  DoorOpen, 
  Building2, 
  Fence, 
  ShowerHead, 
  Store,
  Car,
  Zap,
  Waves
} from "lucide-react";

const products = [
  {
    icon: LayoutGrid,
    title: "Fenêtres Aluminium",
    description: "Fenêtres à la française, coulissantes, oscillo-battantes. Isolation thermique et acoustique optimale.",
  },
  {
    icon: DoorOpen,
    title: "Portes & Portes-fenêtres",
    description: "Entrées principales, portes-fenêtres coulissantes, portes de service en aluminium renforcé.",
  },
  {
    icon: Building2,
    title: "Façades & Murs-rideaux",
    description: "Solutions architecturales pour bâtiments commerciaux et résidentiels de prestige.",
  },
  {
    icon: Fence,
    title: "Garde-corps & Rampes",
    description: "Garde-corps design, rampes d'escalier, balustrades en aluminium et verre.",
  },
  {
    icon: ShowerHead,
    title: "Cabines de Douche",
    description: "Parois de douche sur mesure, cabines intégrales avec profilés aluminium élégants.",
  },
  {
    icon: Store,
    title: "Vitrines Commerciales",
    description: "Devantures de magasins, vitrines sécurisées, entrées automatiques pour commerces.",
  },
  {
    icon: Car,
    title: "Portes de Garage",
    description: "Portes sectionnelles, basculantes et enroulables avec finitions aluminium premium.",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "Motorisation de portails, portes automatiques, contrôle d'accès intelligent.",
  },
  {
    icon: Waves,
    title: "Portes Sécurit",
    description: "Vitrages de sécurité, portes blindées aluminium, solutions anti-effraction.",
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bronze font-medium text-sm uppercase tracking-wider mb-4 block">
            Nos Produits
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Gamme Complète de <span className="text-gradient-bronze">Menuiseries Aluminium</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions adaptées à tous vos projets, du résidentiel au commercial.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-bronze/40 hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0 group-hover:bg-bronze/20 transition-colors duration-300">
                  <product.icon className="w-6 h-6 text-bronze" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-bronze transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
