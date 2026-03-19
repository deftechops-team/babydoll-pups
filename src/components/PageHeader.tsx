import { Heart } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="gradient-hero py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <Heart className="w-6 h-6 text-primary mx-auto mb-4 animate-float-heart" />
        <h1 className="font-display text-3xl md:text-5xl text-foreground mb-3">{title}</h1>
        {subtitle && (
          <p className="font-script text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="w-12 h-px bg-primary/40" />
          <Heart className="w-3 h-3 text-primary fill-primary" />
          <span className="w-12 h-px bg-primary/40" />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
