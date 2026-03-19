import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PuppyApplication = () => (
  <Layout>
    <PageHeader title="Puppy Application" subtitle="Take the first step toward your Bijou Baby" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label htmlFor="firstName" className="text-foreground">First Name</Label><Input id="firstName" className="mt-1" /></div>
            <div><Label htmlFor="lastName" className="text-foreground">Last Name</Label><Input id="lastName" className="mt-1" /></div>
          </div>
          <div><Label htmlFor="email" className="text-foreground">Email</Label><Input id="email" type="email" className="mt-1" /></div>
          <div><Label htmlFor="phone" className="text-foreground">Phone</Label><Input id="phone" type="tel" className="mt-1" /></div>
          <div><Label htmlFor="city" className="text-foreground">City & State</Label><Input id="city" className="mt-1" /></div>
          <div><Label htmlFor="experience" className="text-foreground">Do you have experience with small breed dogs?</Label><Textarea id="experience" className="mt-1" /></div>
          <div><Label htmlFor="home" className="text-foreground">Describe your home environment</Label><Textarea id="home" className="mt-1" /></div>
          <div><Label htmlFor="why" className="text-foreground">Why do you want a Bijou Baby?</Label><Textarea id="why" className="mt-1" /></div>
          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase rounded-md hover:opacity-90 transition-opacity">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  </Layout>
);

export default PuppyApplication;
