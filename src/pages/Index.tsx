import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Soku AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              端到端AI广告自动化平台，让中小企业轻松掌控数字营销
            </p>
          </div>

          {/* Poster Image */}
          <div className="mb-12 max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/3e857fc5-232e-4483-a2a7-435d00ef7ce1.png" 
              alt="Adventures in AI Automation - Soku AI Platform" 
              className="w-full h-auto rounded-2xl shadow-strong hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Value Proposition */}
          <div className="mb-12">
            <p className="text-lg text-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              从产品分析到创意生成，从多平台投放到实时优化 - 
              <span className="font-semibold text-primary"> 一个平台搞定所有广告需求</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🎯 设置预算，让AI接管
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                ⚡ 即时A/B测试
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                🚀 一键多渠道投放
              </span>
            </div>
          </div>

          {/* Waitlist Form */}
          <WaitlistForm />
        </div>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              为什么选择 <span className="bg-gradient-hero bg-clip-text text-transparent">Soku AI</span>？
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              专为缺乏广告经验的中小企业营销人员设计，让AI成为您的专业广告顾问
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="🔗"
              title="一键连接"
              description="轻松连接Meta广告账户，无需复杂设置，几分钟即可开始"
            />
            <FeatureCard
              icon="🤖"
              title="AI智能分析"
              description="输入产品URL，AI自动分析您的产品和竞品，找出最佳营销策略"
            />
            <FeatureCard
              icon="🎨"
              title="创意自动生成"
              description="AI生成多个广告创意变体，A/B测试找出最佳表现方案"
            />
            <FeatureCard
              icon="📊"
              title="智能投放优化"
              description="实时监控广告表现，AI自动优化投放参数，提升ROI"
            />
            <FeatureCard
              icon="🎯"
              title="精准定向"
              description="基于产品特性和竞品分析，AI推荐最佳受众定向策略"
            />
            <FeatureCard
              icon="📈"
              title="数据洞察"
              description="清晰的数据报告和洞察，让您轻松了解广告效果和改进方向"
            />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            简单 <span className="bg-gradient-accent bg-clip-text text-transparent">6步流程</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            从产品分析到广告上线，全程AI驱动，让广告投放变得像发朋友圈一样简单
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "连接账户", desc: "连接Meta广告账户" },
              { step: "02", title: "产品分析", desc: "输入产品URL进行AI分析" },
              { step: "03", title: "创意生成", desc: "AI生成多个广告创意" },
              { step: "04", title: "参数设置", desc: "设置预算和投放参数" },
              { step: "05", title: "审核发布", desc: "一键审核并发布广告" },
              { step: "06", title: "实时优化", desc: "AI监控并自动优化" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-primary/20 hover:shadow-soft transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              准备好让AI革命化您的广告了吗？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              加入等待列表，成为首批体验Soku AI强大功能的用户
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              立即加入等待列表
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Soku AI. 让AI成为您的广告专家，释放营销潜能。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;