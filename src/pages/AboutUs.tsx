import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Heart, Star, Shield } from "lucide-react";

const AboutUs = () => (
  <Layout>
    <PageHeader title="About Us" subtitle="Our story, our passion, our love for these precious babies" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose max-w-none">
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Welcome to Bijou Babies — a boutique breeding program dedicated to producing the finest 
            Extreme Babydoll Korean Maltese. Our journey began with a deep love for this extraordinary 
            breed and a commitment to preserving their most cherished qualities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Each of our babies is raised in our home with round-the-clock care, early socialization, 
            and endless love. We believe that every puppy deserves the best start in life, and we pour 
            our hearts into ensuring they are healthy, happy, and well-adjusted before joining their 
            forever families.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Heart, title: "Love First", desc: "Every decision we make starts with what's best for our babies" },
              { icon: Star, title: "Quality", desc: "We maintain the highest standards in our breeding program" },
              { icon: Shield, title: "Integrity", desc: "Transparent, honest, and always here for our puppy families" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center p-6 bg-secondary rounded-xl">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutUs;
