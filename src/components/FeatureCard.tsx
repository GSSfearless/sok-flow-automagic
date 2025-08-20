import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-medium border-primary/20 bg-gradient-to-br from-background to-muted/30">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;