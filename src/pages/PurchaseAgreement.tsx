import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";

const PurchaseAgreement = () => (
  <Layout>
    <PageHeader title="Purchase Agreement" subtitle="The final legal commitment to bringing your new companion home safely" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <form className="space-y-8 bg-card rounded-xl p-8 border border-border shadow-sm" onSubmit={(e) => { e.preventDefault(); e.currentTarget.innerHTML = '<h3 class="text-primary text-center text-xl font-serif">Purchase Agreement Submitted!</h3>'; }}>
          
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
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Puppy Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input placeholder="Puppy's Temporary Name *" required /></div>
              <div><Input placeholder="Names of the Parents of the Puppy *" required /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input placeholder="Puppy Birthday? (e.g., MM/DD/YYYY) *" required /></div>
              <div>
                 <select required className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="" disabled selected>Sex of the Puppy *</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                 <select required className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="" disabled selected>Buying as pet, or for breeding? *</option>
                  <option value="Pet">Pet</option>
                  <option value="Breeding">Breeding</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>
              <div><Input placeholder="Total purchase price of the Puppy? *" required /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input placeholder="AKC registration # of the puppy? *" required /></div>
              <div><Input placeholder="What is the date of transfer? *" required /></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Purchase Contract Terms</h3>
            <div className="h-72 overflow-y-auto pr-4 border border-border bg-background p-5 rounded-md text-sm leading-relaxed space-y-4 shadow-inner text-muted-foreground">
              <h3 className="font-serif text-base text-card-foreground">SECTION 1 - HEALTH RECORD</h3>
              <p>The Breeder guarantees that at the time of delivery and a following 24 hours, the puppy is in good health.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 2 - VET CHECKUP</h3>
              <p>The Buyer is to arrange a check-up by a qualified veterinarian within 2 business days of receiving the puppy. During this initial exam should a veterinarian detect a Genetic defect threatening the life of the dog, you must contact the seller immediately. We do this with only a 2-business-day time frame to have a point of reference as to the health of the dog. Unfortunately, we cannot control how the dog is handled after it leaves our care. Failure to have the initial vet check done within 2 days or to notify the Breeder of illness or poor eating before the initial exam will void the warranty.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 3 - NOT COVERED</h3>
              <p>Not covered is common ailments and breed related ailments including but not limited to: internal or external parasites, hernia, hypoglycemia, undescended testicles, under/overbite, injury, allergies, heat exhaustion, luxating Patellas, collapsing trachea, breathing issues, palate deformities, Coccidia, Giardia, mites, hookworm, whipworm, leg calve perthese, Under no circumstance will the Buyer be refunded any money for any of these conditions or any common ailment or common breed related ailment. Buyer waives any and all liability in relation to these common conditions listed.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 4 - BREEDING QUALITY NOT GUARANTEED</h3>
              <p>No dog or puppy sold with or without breeding rights is guaranteed to be breeding quality. Determining a dog's breeding quality is 100% opinion. There are things like hernias, that some breeders think are ok to breed and some think are not. Some breeders weigh all the good traits as enough to outweigh another bad trait and decide to breed even with small defects. The Breeder cannot control what one breeder will or will not consider breeding quality or what does or does not compliment the traits of the Buyer's breeding program. The Buyer will not be refunded any money or traded back for another puppy or given a stud fee for any reason or trait found to be present in the puppy regarding this contract, including but not limited to any physical disease or defect.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 5 - HEALTH GUARANTEE</h3>
              <p>If your puppy is diagnosed with a fatal hereditary or congenital defect, it will be replaced with one of equal value as soon as one is available. The value of the puppy being sent as the replacement will be determined by the Breeder. All registration papers or papers of record given to the buyer at the time of sale must be signed and/or turned over to the breeder and returned to breeder or the guarantee is void. Buyer is responsible for all transportation of puppies or replacement puppy. The Puppy listed in this agreement must not be euthanized without prior written approval from the breeder or this guarantee is void. Text or email being considered acceptable written approval. Buyer understands that replacement option and fulfillment/use of the health guarantee is only valid when any condition or ailment is fatal within the first year of the puppies life. A necropsy will be required to determine if death is due to a hereditary/congenital genetic problem in order to have the puppy replaced. Sometimes in the case of necropsy, if there is not an obvious defect, further blood testing can be done to determine cause of death. The buyer will be required to do and pay for all available tests to determine cause of death and make use/fulfillment of the Health Guarantee. Failure to follow the veterinarians recommended medical advice and/or treatment while the dog is in the care of the buyer will void this guarantee. The Buyer understands that the financial cost and burden of proof for veterinary care and testing to determine the presence of a fatal life threatening Hereditary or Congenital Defect is the sole responsibility of the Buyer. The Breeder guarantees the puppy against life-ending congenital or hereditary defects within the puppy's first year of life. The guarantee is limited to a replacement puppy of the same value , the value of replacement Puppy will determined by the Breeder, and will be given as soon as the Breeder has one available. If a congenital or hereditary defect is found in the puppy that is not life ending there will be no replacement puppy given by the Seller, nor any kind of financial assistance for medications. The Buyer releases any liability regarding the puppy's care for non-fatal hereditary or congenital defect to the Breeder and its owners. The Buyer understands that they are only entitled to a replacement puppy of the same value as the puppy listed in this agreement.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 6 - VETERINARY DIAGNOSIS</h3>
              <p>Veterinarians can have different medical opinions. Because of this - The Breeder retains the right to pick a veterinarian of they’re choosing to examine the dog to confirm the diagnosis given by the Veterinarian selected by the Buyer. If the Breeder requests that the dog be taken to a specific veterinarian to confirm the diagnosis - the Breeder will pay for the examination and any tests or procedures approved/requested to be done by the Breeder.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 7 - SHIPPING AND DELIVERY</h3>
              <p>If shipping has been approved by the Breeder, arrangements will be made between the Breeder and Buyer. The puppy becomes the sole responsibility of the buyer physically and financially once the breeder delivers the puppy to transport personnel and the puppy is in their care. Once the breeder has delivered the puppy to the agreed-upon transport personnel the burden of delivery to the owner is considered fulfilled.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 8 - FULFILLMENT OF HEALTH GUARANTEE</h3>
              <p>This health guarantee applies only to the original owner of the puppy listed in this contract as the Buyer. The Health Guarantee is not transferable to another owner. In the event the guarantee is needed in a situation where the puppy is still living and a fatal diagnosis is given within the first year of life, the puppy/dog must be returned to the Breeder with any AKC papers. A refund will not be given in any situation, only a replacement puppy as soon as one of equal value can be given. The Breeder determines the value of the replacement puppy. Shipping arrangements for an additional puppy are at the expense of the buyer, and return of the original puppy to fulfill the guarantee are also at the expense of the buyer.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 9 - UNDER NO CIRCUMSTANCE</h3>
              <p>Never at any point with the Buyer be allowed to both keep a living puppy and get a replacement puppy or any monies refunded.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 10 - CARE OF PUPPY</h3>
              <p>Buyer agrees this puppy is not being bought for resale and shall be maintained and kept under the personal control of the buyer, this puppy shall be given adequate housing, food and vet care, and shall in no manner be mistreated, neglected, or allowed to roam freely. If circumstances become so that the buyer cannot keep this dog, buyer promises not to discard the dog at any shelter, humane society, or rescue group, and make every effort to place the dog in another suitable home. If the buyer is unable to find a suitable home for the dog. The dog shall be returned to the breeder.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 11 - BREEDING RIGHTS (FULL AKC)</h3>
              <p>AKC papers are only provided to the buyer if they are purchasing breeding rights also known as “Full AKC”. If you are not interested in breeding, no papers will be provided. The breeder may provide copies of parents AKC papers to prove the puppy is from AKC purebred bloodlines. The guarantee is void if the dog has been sold as a pet but has been bred either accidentally or intentionally to any dog including dogs owned by the buyer. The buyer is to be responsible in not letting an accidental breeding regarding the puppy in this contract to occur before paying A $10,000 breeding fee. A fine of $10,000 must be paid to the breeder in the event of an accidental or purposeful breeding of the puppy aforementioned and no AKC papers will be provided after the fee is paid. This fine must be paid within 30 days of the day of notice from the Breeder via text, email, or in writing. Failure to pay within the 30 days from notice - will result in legal recourse to be filed and carried out in the county where the buyer resides. The buyer agrees to pay Filing fee’s, serving fee’s, and attorney’s fees incurred when the suit is filed at the county courthouse.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 12 - FINANCIAL BURDEN OF CARE</h3>
              <p>The buyer will assume any and all veterinarian cost and any other expenses that might be incurred in connection with my puppy and waive any cost or claim whatsoever against the Breeder. Buyer understands that full price is due when puppy is picked up or before puppy is delivered to transport personnel.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 13 - NO GUARANTEE ON SIZE</h3>
              <p>We do our best to use all the predictors of size to give you an estimated adult weight. We do not take returns on puppies or refund any money for a puppy becoming either to large or to small. Buyer agrees they will not seek any form of restitution for the puppy at adult weight.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 14 - FAILURE TO PICK UP</h3>
              <p>Buyer agrees to pick their puppy up by 12 weeks of age unless otherwise arranged. If the puppy is not picked up at 12 weeks old or the agreed upon day, a $45 per day boarding fee will apply. The breeder has the right to sell the puppy to another person at anytime after the 1st missed pick up. The breeder can elect to move you to the waiting list or ask you to work with another breeder. You will not be refunded your waiting list payment. The breeder also has the right to deduct the $45 per day boarding fee from any monies paid to the breeder; starting the 1st calendar after the 1st time of missed pickup.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 15 - MUTUAL NON-DISPARAGEMENT</h3>
              <p>The Buyer agrees not to make public negative statements or communications disparaging The Breeder or its agents, products, members, directors or officers. Public communications also include electronic platforms. The Seller (Including its agents, members, directors and officers) agrees not to make public negative or disparaging statements or communications about the Buyer. This clause is not violated when statements and evidence is required in response to legal proceedings in which both parties have agreed to subject themselves to resolve a dispute outside the boundaries of this contract. Including, but not limited to, evidence supplied for court filings, depositions, and hearings.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 16 - FINANCIAL RESPONSIBILITY FOR HEALTH CARE</h3>
              <p>It is highly recommended by the Breeder to the Buyer to obtain health insurance on their puppy. We do this because veterinary costs can be high, especially to diagnose or treat an illness. We also make this recommendation because puppies have their immune systems very fresh and beginning to work on their own at 7-8 weeks old. They are susceptible to all types of viruses, parasites, and illness at this age. If you are seeking a diagnosis on your puppy to fulfill the health guarantee and get a replacement puppy, the health insurance may be able to cover some of those costs. Buyer is aware of this recommendation.</p>

              <h3 className="font-serif text-base text-card-foreground">SECTION 17 - AGREEMENT TO TERMS</h3>
              <p>Buyer agrees by signing below, to all the terms of this agreement included in sections 1-17. This agreement by the Buyer and the Seller is a binding contract, and is the only expressed agreement between the buyer and the Seller . I understand that I (Buyer) will assume any and all costs and any other expenses that might be incurred in connection with my puppy and waive any cost or claim whatsoever against the Breeder and its owners. I understand that full price is due when puppy is picked up or before puppy is delivered for flight. I understand that no other guarantees are meant or implied and I understand this contract is legally binding.</p>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Signature</h3>
             <div className="grid sm:grid-cols-2 gap-4">
              <div><Input type="date" required className="text-foreground" /></div>
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
                I have read and agree to all 17 sections of the Purchase Contract.
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

export default PurchaseAgreement;
