import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { ShoppingBag } from "lucide-react";

const Shop = () => (
  <Layout>
    <PageHeader title="Shop" subtitle="Coming soon — curated accessories for your Bijou Baby" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto p-12 bg-secondary rounded-xl border border-border">
          <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl text-foreground mb-3">Coming Soon!</h2>
          <p className="text-muted-foreground">
            We're curating a collection of premium accessories, grooming supplies, 
            and essentials for your Maltese baby. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Shop;
