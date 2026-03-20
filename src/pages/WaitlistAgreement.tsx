import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WaitlistAgreement = () => (
  <Layout>
    <PageHeader title="Waitlist Agreement" subtitle="Secure your place in line for our upcoming elite litters" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <form className="space-y-8 bg-card rounded-xl p-8 border border-border shadow-sm" onSubmit={(e) => { e.preventDefault(); e.currentTarget.innerHTML = '<h3 class="text-primary text-center text-xl font-serif">Waitlist Agreement Submitted!</h3>'; }}>
          
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Buyer Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input placeholder="First Name *" required /></div>
              <div><Input placeholder="Last Name *" required /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input type="email" placeholder="Email Address *" required /></div>
              <div><Input type="tel" placeholder="Phone Number *" required /></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Address Information</h3>
            <div><Input placeholder="Address Line 1 *" required /></div>
            <div><Input placeholder="Address Line 2" /></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input placeholder="City *" required /></div>
              <div className="flex gap-2">
                 <select required className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="" disabled selected>State *</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="WA">Washington</option>
                  <option value="OTHER">Other</option>
                </select>
                <Input placeholder="Zip Code *" required className="w-24" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
             <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Puppy Preferences</h3>
             <div>
              <Textarea placeholder="Please describe what you are looking for in your puppy. Male or Female ? Weight? Color? You will always have the option to pick or pass or any puppy no matter what you describe you are looking for. This is just to help us get an idea, and let others on the list know who is ahead of them and what they are looking for. *" rows={4} required className="resize-none" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Waitlist Terms and Conditions</h3>
            <div className="h-72 overflow-y-auto pr-4 border border-border bg-background p-5 rounded-md text-sm leading-relaxed space-y-4 shadow-inner text-muted-foreground">
              <h3 className="font-serif text-base text-card-foreground">Section 1 - Fee</h3>
              <p>The deposit to the Breeder is $500 and is to reserve your place in line. When you pick your puppy, your deposit for your place in line will be applied to the price of the puppy.</p>
              
              <h3 className="font-serif text-base text-card-foreground">Section 2 - Non-Refundable</h3>
              <p>PAYMENT for reserving your place in line will not under any circumstance be refunded. If you have a situational life change that makes it so you can no longer get a dog, your deposit will not be refunded. If you decide to purchase a puppy from another breeder, your deposit will not be refunded because we have fulfilled the service you are purchasing, by giving you a place in line. A lot of time, effort, and financial website investment goes into the maintenance of the list.</p>

              <h3 className="font-serif text-base text-card-foreground">Section 3 - Pick Or Pass</h3>
              <p>After you have made your payment, and any litter becomes 6 weeks old, you have the right to pick one or pass on any of justice puppies in that litter that haven't already been picked by someone before you on the list. The morning the litter is 6 weeks old, we will text prices, pictures, and videos of available puppies starting at the top of the list. You will have 8 business hours from the time you are contacted to make your choice to pick or pass. Business hours is defined as 9 AM to 5 PM. Failure to contact us within 8 hours will result in an automatic pass. It is the Buyers responsibility to watch the website and be aware of the dates when they could be contacted, and being available to be contacted. If the Buyer passes on a puppy the Buyer will maintain current place in line.</p>

              <h3 className="font-serif text-base text-card-foreground">Section 4 - Pick Up / Delivery</h3>
              <p>The Puppy is the sole responsibility of the waitlisted person once the puppy is put in the possession of the lap nanny/part responsible for delivery. Please understand that we love to deliver our puppies, but we usually cannot due to taking care of other puppies and the parents. We can't leave town. Our lives revolve around taking care of the dogs 24-7. We appreciate your understanding, and want to make you aware there is a financial cost of getting your puppy to you. Safety is always number 1.</p>

              <h3 className="font-serif text-base text-card-foreground">Section 5 - Pick Up Arrangement Deadline</h3>
              <p>The day the litter is 6 weeks old, the buyer will be given 7 calendar days to make pick-up arrangements and complete final payment before the puppy is picked up, or dropped off to any lap nanny or shipping institution. Failure to meet either of these two time frames will result in a forfeit of your place in line. Any will not be refunded in either case.</p>

              <h3 className="font-serif text-base text-card-foreground">Section 6 - Breeder Pick</h3>
              <p>The Breeder reserves the right to keep any puppy back for breeding purposes. The Breeder must be able to pick puppies that are breeding quality. We reserve the right to pick any puppy at any time.</p>

              <h3 className="font-serif text-base text-card-foreground">Section 7 - Mutual Non-Disparagement</h3>
              <p>The Buyer agrees not to make public negative statements or communications disparaging The Breeder or its agents, products, members, directors or officers. Public communications also include electronic platforms. The Seller (Including its agents, members, directors and officers) agrees not to make public negative or disparaging statements or communications about the Buyer. This clause is not violated when statements and evidence is required in response to legal proceedings in which both parties have agreed to subject themselves to resolve a dispute outside the boundaries of this contract. Including, but not limited to, evidence supplied for court filings, depositions, and hearings.</p>

              <h3 className="font-serif text-base text-card-foreground">Section 8 - County Of Initiation and Finalization</h3>
              <p>It is deemed that this contract is initiated and finalized in the County and State the Breeder resides in. Any legal action brought by the Buyer or the Breeder will be preceded with a court-appointed mediator. Any legal action will be ignited only in the county of initialization and finalization which is County and State that the Breeder resides in.</p>

              <h3 className="font-serif text-base text-card-foreground">Section 9 - Agreement To Terms</h3>
              <p>Please sign below if you are the person listed in this agreement. This agreement is considered executed once the deposit is paid to The Breeder and this contract is submitted. Please sign your name below to enter into a legally binding agreement with the Breeder, and agree to the terms in section's 1-9 of this agreement. A copy of this contract will be sent to the email you entered earlier in this form. The website will store a copy of this agreement.</p>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Signature</h3>
             <div className="grid sm:grid-cols-2 gap-4">
              <div><Input type="date" required className="text-foreground" /></div>
              <div><Input type="time" required className="text-foreground" /></div>
            </div>
            <div className="bg-background p-6 rounded-md border border-border shadow-sm mt-4">
              <label className="block mb-3 font-serif text-foreground">Please sign below to agree to terms of this agreement, Signature: *</label>
              <div className="w-full h-32 border border-dashed border-muted-foreground bg-secondary/50 flex items-center justify-center text-muted-foreground cursor-crosshair rounded-sm">
                [Signature Pad Canvas]
              </div>
            </div>
            
            <div className="pt-4">
              <label className="flex items-center gap-3 cursor-pointer text-sm text-foreground">
                <input type="checkbox" required className="w-4 h-4 accent-primary" />
                I have read and agree to all 9 sections of the Waitlist Terms and Conditions.
              </label>
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase rounded-md hover:opacity-90 transition-opacity mt-8">
            Submit Agreement
          </button>
        </form>
      </div>
    </section>
  </Layout>
);

export default WaitlistAgreement;
