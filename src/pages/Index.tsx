import { Link } from "react-router-dom";
import { Heart, Star, Shield, Award } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-maltese.jpg";
import puppy1 from "@/assets/maltese-puppy-1.jpg";
import puppy2 from "@/assets/maltese-puppy-2.jpg";
import puppy3 from "@/assets/maltese-puppy-3.jpg";
import parent1 from "@/assets/maltese-parent-1.jpg";
import parent2 from "@/assets/maltese-parent-2.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left animate-fade-in-up">
                <Heart className="w-6 h-6 text-primary mx-auto md:mx-0 mb-4 animate-float-heart" />
                <h1 className="text-5xl md:text-7xl text-foreground leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
                  Bijou Babies
                </h1>
                <p className="font-display text-lg md:text-xl text-muted-foreground mt-2 italic">
                  Extreme Babydoll Korean Maltese
                </p>
                <p className="font-body text-sm text-muted-foreground mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
                  Where elegance meets irresistible charm. Our exquisite Maltese babies are raised with 
                  love, care, and devotion to bring joy to your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center md:justify-start">
                  <Link
                    to="/puppies"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-xs tracking-[0.15em] uppercase rounded-md hover:opacity-90 transition-opacity"
                  >
                    <Heart className="w-3 h-3" />
                    View Our Puppies
                  </Link>
                  <Link
                    to="/puppy-application"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-body text-xs tracking-[0.15em] uppercase rounded-md hover:bg-primary/5 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
                  <img
                    src={heroImage}
                    alt="Adorable extreme babydoll Korean Maltese puppy with big eyes and pink bow"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
                {/* Decorative hearts */}
                <Heart className="absolute -top-3 -right-3 w-8 h-8 text-primary/30 fill-primary/20 animate-float-heart" />
                <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-primary/20 fill-primary/10 animate-float-heart" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-card text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-16 h-px bg-primary/30" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="w-16 h-px bg-primary/30" />
          </div>
          <blockquote className="font-script text-2xl md:text-3xl text-foreground italic max-w-3xl mx-auto">
            "...oh so unique features that make you melt"
          </blockquote>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-16 h-px bg-primary/30" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="w-16 h-px bg-primary/30" />
          </div>
        </div>
      </section>

      {/* Featured Puppies */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Precious Babies</h2>
            <p className="font-script text-lg text-muted-foreground mt-2 italic">
              Each one raised with love and devotion
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: puppy1, name: "Coming Soon", desc: "Teacup babydoll beauty" },
              { img: puppy2, name: "Coming Soon", desc: "Big eyes, big love" },
              { img: puppy3, name: "Coming Soon", desc: "A tiny crowned jewel" },
            ].map((puppy, i) => (
              <div
                key={i}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
              >
                <div className="overflow-hidden">
                  <img
                    src={puppy.img}
                    alt={`Extreme babydoll Korean Maltese puppy - ${puppy.desc}`}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg text-foreground">{puppy.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{puppy.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/puppies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-xs tracking-[0.15em] uppercase rounded-md hover:opacity-90 transition-opacity"
            >
              See All Puppies
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Parents */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Meet Our Parents</h2>
            <p className="font-script text-lg text-muted-foreground mt-2 italic">
              The finest bloodlines, the sweetest temperaments
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { img: parent1, name: "Our Mama", desc: "Exquisite babydoll face with silky coat" },
              { img: parent2, name: "Our Queen", desc: "Show-quality flowing white coat" },
            ].map((parent, i) => (
              <div key={i} className="text-center group">
                <div className="rounded-full w-64 h-64 mx-auto overflow-hidden border-4 border-primary/20 shadow-lg group-hover:border-primary/40 transition-colors">
                  <img
                    src={parent.img}
                    alt={`Extreme babydoll Korean Maltese parent - ${parent.desc}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl text-foreground mt-4">{parent.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{parent.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/parents"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-body text-xs tracking-[0.15em] uppercase rounded-md hover:bg-primary/5 transition-colors"
            >
              Meet All Parents
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 gradient-rose">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Why Bijou Babies?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Raised with Love", desc: "Every puppy is hand-raised in our home with constant love and socialization" },
              { icon: Star, title: "Extreme Babydoll", desc: "Specializing in extreme babydoll faces with big round eyes and short noses" },
              { icon: Shield, title: "Health Guaranteed", desc: "All puppies come with health certificates and genetic testing documentation" },
              { icon: Award, title: "Premium Bloodlines", desc: "Imported Korean bloodlines producing the finest quality Maltese" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card text-center">
        <div className="container mx-auto px-4">
          <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-float-heart" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Ready to Find Your Bijou Baby?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Start your journey to bringing home one of our precious babies. Fill out our puppy application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/puppy-application"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-xs tracking-[0.15em] uppercase rounded-md hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary font-body text-xs tracking-[0.15em] uppercase rounded-md hover:bg-primary/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
