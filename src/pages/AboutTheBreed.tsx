import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import puppy1 from "@/assets/maltese-puppy-1.jpg";

const AboutTheBreed = () => (
  <Layout>
    <PageHeader title="About the Breed" subtitle="The Extreme Babydoll Korean Maltese" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <img src={puppy1} alt="Extreme babydoll Korean Maltese" className="rounded-2xl shadow-lg w-full" />
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-foreground">What Makes Them Special?</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Extreme Babydoll Korean Maltese is distinguished by their incredibly flat, round face 
              with enormous dark eyes and a very short nose — giving them an irresistible "babydoll" 
              appearance that captures hearts instantly.
            </p>
            <h3 className="font-display text-lg text-foreground pt-2">Key Characteristics:</h3>
            <ul className="space-y-2">
              {[
                "Very large, round, dark eyes",
                "Extremely short, flat nose (babydoll face)",
                "Compact, cobby body structure",
                "Luxurious, silky white coat",
                "Sweet, gentle temperament",
                "Typically 3-6 pounds as adults",
                "Hypoallergenic and non-shedding",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutTheBreed;
