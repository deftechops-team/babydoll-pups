import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import puppy1 from "@/assets/maltese-puppy-1.jpg";
import puppy2 from "@/assets/maltese-puppy-2.jpg";
import puppy3 from "@/assets/maltese-puppy-3.jpg";

const puppies = [
  { name: "Available Soon", img: puppy1, status: "Coming Soon", desc: "Gorgeous teacup babydoll with stunning round eyes" },
  { name: "Available Soon", img: puppy2, status: "Coming Soon", desc: "Precious baby with the sweetest expression" },
  { name: "Available Soon", img: puppy3, status: "Coming Soon", desc: "Tiny crowned jewel with perfect babydoll features" },
];

const Puppies = () => {
  return (
    <Layout>
      <PageHeader title="Our Puppies" subtitle="Precious babies looking for their forever homes" />
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {puppies.map((puppy, i) => (
              <div key={i} className="bg-secondary rounded-xl overflow-hidden shadow-md border border-border group">
                <div className="overflow-hidden relative">
                  <img src={puppy.img} alt={puppy.desc} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full tracking-wider uppercase">
                    {puppy.status}
                  </span>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg text-foreground">{puppy.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{puppy.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 p-8 bg-secondary rounded-xl border border-border">
            <h3 className="font-display text-xl text-foreground mb-2">Interested in a Bijou Baby?</h3>
            <p className="text-muted-foreground mb-4">Fill out our puppy application to get on our waitlist.</p>
            <Link to="/puppy-application" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase rounded-md hover:opacity-90 transition-opacity">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Puppies;
