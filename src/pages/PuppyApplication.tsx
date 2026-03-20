import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PuppyApplication = () => (
  <Layout>
    <PageHeader title="Puppy Application" subtitle="Take the first step toward your Bijou Baby" />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <form className="space-y-8 bg-card rounded-xl p-8 border border-border shadow-sm" onSubmit={(e) => { e.preventDefault(); e.currentTarget.innerHTML = '<h3 class="text-primary text-center text-xl font-serif">Application Submitted successfully! We will be in touch.</h3>'; }}>
          
          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Applicant Information</h3>
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
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Address Details</h3>
            <div><Input placeholder="Address Line 1" required /></div>
            <div><Input placeholder="Address Line 2" /></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input placeholder="City" required /></div>
              <div className="flex gap-2">
                <Input placeholder="State" required className="flex-1" />
                <Input placeholder="Zip Code" required className="w-24" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Experience & Household</h3>
            <div>
              <select required className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="" disabled selected>Have you ever owned a puppy? *</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div><Input placeholder="How many dogs currently live in your home? *" required /></div>
          </div>

          <div className="space-y-4">
             <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Puppy Preferences</h3>
             <div>
              <select required className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="" disabled selected>Are you wanting a puppy for breeding, or as a pet? *</option>
                <option value="breeding">For Breeding</option>
                <option value="pet">As a Pet</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Input placeholder="What size of Puppy do you want? *" required /></div>
              <div><Input placeholder="What color of puppy do you want? *" required /></div>
            </div>
            <div>
              <select required className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="" disabled selected>Do you want a boy or a girl? Or either? *</option>
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
                <option value="either">Either</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary pb-2">How will you be getting your puppy home? <span className="text-red-500">*</span></h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer text-foreground">
                <input type="radio" name="delivery" value="nanny" required className="w-4 h-4 accent-primary" />
                Using the lap nanny. (cost's around $650-$1200)
              </label>
              <label className="flex items-center gap-3 cursor-pointer text-foreground">
                <input type="radio" name="delivery" value="meet" required className="w-4 h-4 accent-primary" />
                Meet in a Public location that ensures the safety of both parties.
              </label>
              <label className="flex items-center gap-3 cursor-pointer text-foreground">
                <input type="radio" name="delivery" value="airport" required className="w-4 h-4 accent-primary" />
                I will fly into your Airport to get my puppy.
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">About You</h3>
            <div><Textarea placeholder="Please tell me any information about yourself and your family that you think I should know. I would love to hear about you. *" rows={4} required className="resize-none" /></div>
            <div><Textarea placeholder="Please tell us what you are looking for in your companion. What is most important to you to have in your puppy? *" rows={4} required className="resize-none" /></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2 uppercase tracking-wide">Contact Preferences</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <select required className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="" disabled selected>How did you hear about us? *</option>
                <option value="friend">A friend</option>
                <option value="google">Google</option>
                <option value="social">Social Media</option>
                <option value="other">Other</option>
              </select>
              <select required className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="" disabled selected>Best way to contact you? *</option>
                <option value="text">Text</option>
                <option value="call">Call</option>
                <option value="email">Email</option>
                <option value="any">any is fine.</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase rounded-md hover:opacity-90 transition-opacity mt-8">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  </Layout>
);

export default PuppyApplication;
