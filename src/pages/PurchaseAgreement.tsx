import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const PurchaseAgreement = () => (
  <Layout>
    <PageHeader title="Purchase Agreement" subtitle="Final steps to welcome your Bijou Baby home" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-secondary rounded-xl p-8 border border-border">
          <h2 className="font-display text-2xl text-foreground mb-6">Purchase Agreement Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Our purchase agreement outlines the terms and conditions of your puppy purchase, including:</p>
            <ul className="space-y-3 list-disc pl-5">
              <li>Health guarantee details and coverage period</li>
              <li>Spay/neuter requirements and timeline</li>
              <li>Return and refund policies</li>
              <li>Care requirements and expectations</li>
              <li>Breeding rights (if applicable)</li>
              <li>Registration and pedigree information</li>
            </ul>
            <p className="pt-4 text-sm italic">
              The full purchase agreement will be provided to approved applicants prior to finalizing their puppy purchase. 
              Please contact us if you have any questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PurchaseAgreement;
