import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Package, Heart, Stethoscope, BookOpen } from "lucide-react";

const PuppyGoHome = () => (
  <Layout>
    <PageHeader title="Puppy Go Home" subtitle="Everything your baby needs for a smooth transition" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed text-lg mb-10 text-center">
          We want to make sure your new Bijou Baby has the smoothest transition possible into their 
          forever home. Here's what to expect and what comes with your puppy.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Package, title: "Puppy Care Package", items: ["Blanket with mama's scent", "Starter food supply", "Favorite toys", "Treats & accessories"] },
            { icon: Stethoscope, title: "Health Records", items: ["Veterinary health certificate", "Vaccination records", "Deworming schedule", "Microchip information"] },
            { icon: BookOpen, title: "Care Guide", items: ["Feeding instructions", "Grooming guide", "Training tips", "Health care schedule"] },
            { icon: Heart, title: "Ongoing Support", items: ["Lifetime breeder support", "Puppy parent community", "Health & care advice", "Updates & check-ins"] },
          ].map(({ icon: Icon, title, items }, i) => (
            <div key={i} className="p-6 bg-secondary rounded-xl border border-border">
              <Icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg text-foreground mb-3">{title}</h3>
              <ul className="space-y-2">
                {items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default PuppyGoHome;
