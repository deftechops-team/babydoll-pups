import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import parent1 from "@/assets/maltese-parent-1.jpg";
import parent2 from "@/assets/maltese-parent-2.jpg";

const parents = [
  { name: "Princess Belle", img: parent1, desc: "Our stunning mama with the most exquisite babydoll face, silky white coat, and the sweetest temperament. She produces the most beautiful babies with her signature big round eyes.", weight: "5 lbs", color: "Pure White" },
  { name: "Queen Bijou", img: parent2, desc: "Our show-quality queen with flowing floor-length coat, perfect babydoll features, and a gentle, loving personality that she passes on to all her babies.", weight: "4.5 lbs", color: "Pure White" },
];

const Parents = () => {
  return (
    <Layout>
      <PageHeader title="Our Parents" subtitle="The finest extreme babydoll Korean Maltese bloodlines" />
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {parents.map((parent, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-border">
                    <img src={parent.img} alt={parent.name} className="w-full h-[400px] object-cover" />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">{parent.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{parent.desc}</p>
                  <div className="flex gap-6">
                    <div><span className="text-xs uppercase tracking-wider text-muted-foreground">Weight</span><p className="font-display text-foreground">{parent.weight}</p></div>
                    <div><span className="text-xs uppercase tracking-wider text-muted-foreground">Color</span><p className="font-display text-foreground">{parent.color}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Parents;
