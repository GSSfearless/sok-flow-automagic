import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "欢迎加入等待列表！",
      description: "我们会尽快联系您，分享Soku AI的最新进展。",
    });

    setEmail("");
    setCompany("");
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-medium hover:shadow-strong transition-all duration-300 border-primary/20">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          加入等待列表
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          抢先体验AI广告自动化的革命性平台
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="您的邮箱地址"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="公司名称"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="border-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "加入中..." : "立即加入等待列表"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            加入后您将第一时间收到产品上线通知和独家优惠
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default WaitlistForm;