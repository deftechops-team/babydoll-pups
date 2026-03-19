import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ClipboardList, FileCheck, CreditCard, Heart, Home, Send } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "1. Submit Application", desc: "Fill out our puppy application form with your information and preferences." },
  { icon: FileCheck, title: "2. Application Review", desc: "We carefully review each application to ensure the best match for our babies." },
  { icon: CreditCard, title: "3. Waitlist & Deposit", desc: "Once approved, sign the waitlist agreement and place your deposit to secure your spot." },
  { icon: Heart, title: "4. Puppy Selection", desc: "When a litter arrives, we'll work with you to match the perfect baby for your family." },
  { icon: Send, title: "5. Purchase Agreement", desc: "Sign the purchase agreement and finalize the remaining balance." },
  { icon: Home, title: "6. Welcome Home!", desc: "Your Bijou Baby is ready to come home and start their new life with you!" },
];

const HowItWorks = () => (
  <Layout>
    <PageHeader title="How It Works" subtitle="Your journey to bringing home a Bijou Baby" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-5 p-6 bg-secondary rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">{title}</h3>
                <p className="text-muted-foreground mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
