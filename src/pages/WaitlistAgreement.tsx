import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const WaitlistAgreement = () => (
  <Layout>
    <PageHeader title="Waitlist Agreement" subtitle="Securing your spot for a Bijou Baby" />
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-secondary rounded-xl p-8 border border-border">
          <h2 className="font-display text-2xl text-foreground mb-6">Waitlist Agreement Terms</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>By joining our waitlist, you agree to the following terms:</p>
            <ul className="space-y-3 list-disc pl-5">
              <li>A non-refundable deposit is required to secure your place on the waitlist.</li>
              <li>Deposits are applied toward the total purchase price of your puppy.</li>
              <li>Waitlist position is determined by the date of deposit received.</li>
              <li>We reserve the right to match puppies with families based on best fit.</li>
              <li>You will be notified when puppies are available for selection based on your waitlist position.</li>
              <li>If you choose to pass on available puppies, your deposit carries over to the next available litter.</li>
            </ul>
            <p className="pt-4 text-sm italic">
              Please contact us for the full waitlist agreement document and deposit information.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default WaitlistAgreement;
