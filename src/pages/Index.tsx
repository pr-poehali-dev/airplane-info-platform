import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [assistantOpen, setAssistantOpen] = useState(false);

  const aircraftCategories = [
    {
      id: 'passenger',
      title: 'Пассажирские',
      icon: 'Plane',
      description: 'Современные лайнеры для комфортных перелётов',
      image: 'https://cdn.poehali.dev/projects/dfe7137d-3805-4867-9773-b094c2bd9509/files/8fca7586-d7af-40e6-bfb4-f0291cbb9635.jpg',
      specs: ['Boeing 747', 'Airbus A380', 'Boeing 787 Dreamliner'],
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      id: 'military',
      title: 'Военные',
      icon: 'Rocket',
      description: 'Истребители и боевая авиация',
      image: 'https://cdn.poehali.dev/projects/dfe7137d-3805-4867-9773-b094c2bd9509/files/da4a6980-1b25-4bef-bbcd-ff68754a84d8.jpg',
      specs: ['F-22 Raptor', 'Su-57', 'F-35 Lightning II'],
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      id: 'historical',
      title: 'Исторические',
      icon: 'Archive',
      description: 'Классические самолёты прошлого века',
      image: 'https://cdn.poehali.dev/projects/dfe7137d-3805-4867-9773-b094c2bd9509/files/7fcbffcc-aabf-4929-86ac-1cf3c1562ea6.jpg',
      specs: ['Spitfire', 'P-51 Mustang', 'Messerschmitt Bf 109'],
      gradient: 'from-accent/20 to-accent/5'
    }
  ];

  const techSpecs = [
    {
      title: 'Boeing 747-8',
      maxSpeed: '988 км/ч',
      range: '14,815 км',
      passengers: '467',
      engines: '4 × GEnx-2B67'
    },
    {
      title: 'Airbus A380',
      maxSpeed: '945 км/ч',
      range: '15,200 км',
      passengers: '853',
      engines: '4 × Trent 900'
    },
    {
      title: 'F-22 Raptor',
      maxSpeed: '2,410 км/ч',
      range: '2,960 км',
      passengers: '1 (пилот)',
      engines: '2 × F119-PW-100'
    }
  ];

  return (
    <div className="min-h-screen bg-background tech-grid">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-blue">
                <Icon name="Plane" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AeroTech Portal
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors">Категории</a>
              <a href="#specs" className="text-foreground/80 hover:text-primary transition-colors">Характеристики</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О проекте</a>
              <Button 
                onClick={() => setAssistantOpen(!assistantOpen)}
                className="bg-gradient-to-r from-primary to-secondary glow-blue"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Помощник
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Всё про авиацию
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Мир Авиации
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Исследуйте технологии, историю и будущее воздушного транспорта. 
              От классических винтовых самолётов до современных сверхзвуковых истребителей.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-blue">
                <Icon name="Compass" size={20} className="mr-2" />
                Исследовать
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                <Icon name="BookOpen" size={20} className="mr-2" />
                База знаний
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Категории самолётов</h3>
            <p className="text-muted-foreground">Выберите интересующую вас область авиации</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aircraftCategories.map((category, index) => (
              <Card 
                key={category.id} 
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-blue cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-50`} />
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name={category.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{category.title}</h4>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground/80">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Технические характеристики</h3>
            <p className="text-muted-foreground">Детальные спецификации известных моделей</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {techSpecs.map((aircraft, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <Icon name="Settings" size={20} className="text-primary" />
                      </div>
                      <span className="text-xl font-semibold">{aircraft.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <Icon name="Gauge" size={20} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Макс. скорость</div>
                          <div className="font-semibold">{aircraft.maxSpeed}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <Icon name="MapPin" size={20} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Дальность</div>
                          <div className="font-semibold">{aircraft.range}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <Icon name="Users" size={20} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Пассажиры</div>
                          <div className="font-semibold">{aircraft.passengers}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <Icon name="Zap" size={20} className="text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Двигатели</div>
                          <div className="font-semibold text-sm">{aircraft.engines}</div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {assistantOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] z-50 animate-fade-in">
          <Card className="border-primary/50 bg-card/95 backdrop-blur-md glow-blue">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center glow-purple animate-glow-pulse">
                    <Icon name="Bot" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold">Асока</h4>
                    <p className="text-xs text-muted-foreground">Голос: Эльвира Ишмуратова</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => setAssistantOpen(false)}
                >
                  <Icon name="X" size={18} />
                </Button>
              </div>
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm">
                    Привет! Я Асока, твой виртуальный помощник по авиации. 
                    Задай мне вопрос о любом самолёте, и я расскажу всё, что знаю!
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    История Boeing
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Как летают самолёты?
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    Сравнить модели
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 AeroTech Portal. Исследуем мир авиации вместе.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
