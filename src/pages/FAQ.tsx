import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is an Extreme Babydoll Korean Maltese?", a: "Extreme Babydoll Korean Maltese are a specific type of Maltese bred for their distinctive features: very large, round eyes, extremely short and flat noses (babydoll face), compact body, and luxurious silky white coat. They originate from Korean breeding lines known for these exaggerated adorable features." },
  { q: "How much do your puppies cost?", a: "Our puppies are priced based on quality, size, and features. Please fill out a puppy application or contact us directly for current pricing information." },
  { q: "Do you ship puppies?", a: "We offer various delivery options including hand delivery and flight nanny services. Details are discussed during the application process." },
  { q: "What health guarantees do you offer?", a: "All our puppies come with a comprehensive health guarantee, up-to-date vaccinations, deworming, and a veterinary health certificate. Specific details are included in our purchase agreement." },
  { q: "How do I get on the waitlist?", a: "Simply fill out our Puppy Application form. Once approved, you'll be invited to sign our Waitlist Agreement and place a deposit to secure your spot." },
  { q: "How big do your Maltese get?", a: "Our Maltese typically range from 3-6 pounds as adults. The exact size depends on the individual puppy's genetics and lineage." },
  { q: "Are your puppies AKC registered?", a: "Please contact us for details about registration and pedigree information for our puppies." },
  { q: "What comes with my puppy?", a: "Each puppy goes home with a puppy care package, health records, vaccination records, a blanket with their mama's scent, food, and detailed care instructions." },
];

const FAQ = () => {
  return (
    <Layout>
      <PageHeader title="Frequently Asked Questions" subtitle="Everything you need to know about our babies" />
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5 bg-secondary">
                <AccordionTrigger className="font-display text-left text-foreground hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
