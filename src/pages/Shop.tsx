import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const products = [
  {
    title: "Luxury Indoor Puppy Play Pen",
    image: "/play_pen.png",
    link: "https://www.amazon.com/"
  },
  {
    title: "Premium Pastel Puppy Chew Toys",
    image: "/chew_toys.png",
    link: "https://www.amazon.com/"
  },
  {
    title: "Plush Orthopedic Puppy Bed",
    image: "/puppy_bed.png",
    link: "https://www.amazon.com/"
  },
  {
    title: "Ceramic & Rose Gold Food Bowls",
    image: "/food_bowls.png",
    link: "https://www.amazon.com/"
  },
  {
    title: "Designer Airline-Approved Travel Carrier",
    image: "/travel_carrier.png",
    link: "https://www.amazon.com/"
  }
];

const Shop = () => (
  <Layout>
    <PageHeader title="Shop" subtitle="Curated accessories for your Bijou Baby" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Recommendations</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Click on any of the products below to view and purchase them directly on Amazon. We only recommend products we personally use and trust for our Bijou Babies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {products.map((product, index) => (
            <a 
              key={index} 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center pb-8 h-full group"
            >
              <div className="w-full h-72 bg-secondary overflow-hidden mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-6 flex-1 flex flex-col justify-start items-center w-full">
                <h3 className="text-foreground font-serif text-xl mb-4 leading-snug">{product.title}</h3>
                <span className="mt-auto inline-block px-7 py-3 bg-transparent border border-primary text-primary text-xs tracking-widest uppercase transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground rounded-sm">
                  View on Amazon
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Shop;
