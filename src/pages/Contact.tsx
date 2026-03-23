import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have questions about our puppies or the adoption process? We're here to help! 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@yourbizbabydollpups.com" },
                { icon: Phone, label: "Phone", value: "Contact for number" },
                { icon: MapPin, label: "Location", value: "United States" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div><Label htmlFor="name" className="text-foreground">Name</Label><Input id="name" className="mt-1" /></div>
              <div><Label htmlFor="contactEmail" className="text-foreground">Email</Label><Input id="contactEmail" type="email" className="mt-1" /></div>
              <div><Label htmlFor="subject" className="text-foreground">Subject</Label><Input id="subject" className="mt-1" /></div>
              <div><Label htmlFor="message" className="text-foreground">Message</Label><Textarea id="message" className="mt-1" rows={5} /></div>
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase rounded-md hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
