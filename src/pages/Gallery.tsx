import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import puppy1 from "@/assets/maltese-puppy-1.jpg";
import puppy2 from "@/assets/maltese-puppy-2.jpg";
import puppy3 from "@/assets/maltese-puppy-3.jpg";
import parent1 from "@/assets/maltese-parent-1.jpg";
import parent2 from "@/assets/maltese-parent-2.jpg";
import heroImage from "@/assets/hero-maltese.jpg";

const images = [heroImage, puppy1, puppy2, puppy3, parent1, parent2];

const Gallery = () => {
  return (
    <Layout>
      <PageHeader title="Gallery" subtitle="Precious moments captured forever" />
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-md border border-border group">
                <img src={img} alt={`Babydoll Pups Maltese gallery photo ${i + 1}`} className="w-full group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
