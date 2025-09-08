import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Palette,
  Zap,
  Download,
  Crown,
  Star,
  ArrowUpRight,
  Cog,
  Wrench,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Placeholder user data - replace with actual API call later
  const user = null; // Set to null for logged out state, or { id: '1', email: 'user@example.com' } for logged in

  return (
    <div className="min-h-screen bg-steampunk-dark">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section
        id="features"
        className="py-32 bg-gradient-to-b from-steampunk-dark to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
              ФИШКИ{" "}
              <span className="text-steampunk-pink">ИИ КАТОЧЕК ТОВАРА</span>
            </h2>
            <p className="text-xl text-steampunk-copper max-w-3xl mx-auto font-medium">
              Революционные инструменты для оригинального дизайна на основе
              новейшего искусственного интеллекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "ИИ Генератор изображений",
                description:
                  "Создавайте потрясающие визуальные образы в оригинальном стиле с помощью передовых технологий искусственного интеллекта",
                color: "steampunk-pink",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Индивидуальная эстетика",
                description: "Исключительно уникальный и индивидуальный подход",
                color: "steampunk-brass",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Умные описания",
                description:
                  "Привлекательный текст о товаре на основе ИИ, который привлекает посетителей",
                color: "steampunk-copper",
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Export в один клик",
                description:
                  "Мгновенно загружайте изображения, делитесь ими в соцсетях или копируйте HTML/CSS",
                color: "steampunk-bronze",
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Адаптивный дизайн",
                description:
                  "Идеальное отображение на настольных компьютерах, планшетах и мобильных устройствах",
                color: "steampunk-pink",
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Premium шаблоны",
                description: "Эксклюзивные дизайны и макеты карточек",
                color: "steampunk-brass",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-black/50 border-steampunk-bronze hover:border-steampunk-pink transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <CardHeader>
                  <div
                    className={`text-${feature.color} mb-4 p-3 bg-steampunk-dark rounded-full w-fit`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-black text-white mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-32 bg-gradient-to-b from-black to-steampunk-dark"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
              ВЫБЕРИ СВОЙ <span className="text-steampunk-pink">ПЛАН</span>
            </h2>
            <p className="text-xl text-steampunk-copper max-w-3xl mx-auto font-medium">
              Раскройте весь потенциал создания дизайна с помощью ИИ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-black/50 border-steampunk-bronze hover:border-steampunk-copper transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-steampunk-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-black text-white mb-2">
                  НАЧАЛЬНЫЙ
                </CardTitle>
                <div className="text-5xl font-black text-steampunk-brass mb-2">
                  FREE
                </div>
                <CardDescription className="text-gray-400">
                  Идеально подходит для тестирования нашей платформы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "5 AI-генераций карточек каждый месяц",
                    "Базовый шаблон",
                    "Стандартные опции экспорта",
                    "Поддержка сообщества",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-steampunk-brass" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-steampunk-bronze hover:bg-steampunk-copper text-white font-bold py-3 mt-8">
                  Начни с Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-black/50 border-steampunk-pink hover:border-steampunk-accent transition-all duration-300 scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-steampunk-pink text-white px-6 py-2 rounded-full text-sm font-bold">
                  ПОПУЛЯРНЫЙR
                </div>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-steampunk-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-black text-white mb-2">
                  PRO
                </CardTitle>
                <div className="text-5xl font-black text-steampunk-pink mb-2">
                  2500₽
                </div>
                <CardDescription className="text-gray-400">
                  в месяц
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Безлимитная AI-генерация карточек",
                    "Премиум шаблоны",
                    "Расширенные возможности настройки",
                    "Приоритетная поддержка",
                    "Права на коммерческое использование",
                    "Экспорт в все форматы",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-steampunk-pink" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-steampunk-pink hover:bg-steampunk-accent text-white font-bold py-3 mt-8">
                  Начни в PRO
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-black/50 border-steampunk-brass hover:border-steampunk-copper transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-steampunk-brass rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-black text-white mb-2">
                  ENTERPRISE
                </CardTitle>
                <div className="text-5xl font-black text-steampunk-brass mb-2">
                  8500₽
                </div>
                <CardDescription className="text-gray-400">
                  в месяц
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Все функции PRO",
                    "Индивидуальная интеграция с брендом",
                    "API доступ",
                    "Специальный менеджер по работе с клиентами",
                    "24/7 premium поддержки",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-steampunk-brass" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-steampunk-brass hover:bg-steampunk-copper text-white font-bold py-3 mt-8">
                  Свяжитесь с отделом продаж
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-steampunk-dark to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8 tracking-tight">
            ГОТОВ ТВОРИТЬ <span className="text-steampunk-pink">МАГИЮ?</span>
          </h2>
          <p className="text-xl text-steampunk-copper mb-12 max-w-3xl mx-auto font-medium">
            Присоединяйтесь к тысячам авторов, которые уже создают потрясающие
            карточки товаров с помощью нашей платформы на базе искусственного
            интеллекта.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-12 py-6 text-white bg-steampunk-pink rounded-xl hover:bg-steampunk-accent transition-all duration-300 text-xl font-black shadow-2xl hover:shadow-steampunk-pink/25 hover:scale-105"
          >
            <Sparkles className="mr-3 w-6 h-6" />
            НАЧНИ ТВОРИТЬ
            <ArrowUpRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
