import Link from "next/link";
import { Sparkles, Zap, Image, FileText, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-steampunk-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-steampunk-bronze via-steampunk-copper to-steampunk-brass" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative pt-32 pb-40 sm:pt-40 sm:pb-48">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main headline with dramatic typography */}
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
              СОЗДАЙ
              <br />
              <span className="text-steampunk-pink text-7xl sm:text-9xl lg:text-[12rem] block -mt-4">
                КРУТУЮ
              </span>
              <span className="text-steampunk-brass text-5xl sm:text-7xl lg:text-8xl block -mt-8">
                КАТОЧКУ ТОВАРА
              </span>
            </h1>

            <div className="mb-16">
              <p className="text-2xl sm:text-3xl text-steampunk-copper mb-6 font-bold max-w-4xl mx-auto">
                Генератор дизайна и описния на основе ИИ
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Создайте потрясающий карточки товаров для своего
                интернет-магазина с картинками и убедительным опсанием,
                созданных с помощью ИИ
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link
                href="/dashboard"
                className="group inline-flex items-center px-12 py-6 text-white bg-steampunk-pink rounded-xl hover:bg-steampunk-accent transition-all duration-300 text-xl font-black shadow-2xl hover:shadow-steampunk-pink/25 hover:scale-105"
              >
                <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                НАЧАТЬ СОЗДАНИЕ
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center px-12 py-6 text-steampunk-brass bg-transparent border-2 border-steampunk-brass rounded-xl hover:bg-steampunk-brass hover:text-steampunk-dark transition-all duration-300 text-xl font-black"
              >
                ФИШКИ
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-steampunk-bronze rounded-full flex items-center justify-center mb-4">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-steampunk-brass font-bold text-lg mb-2">
                  ИИ Генерция картинок
                </h3>
                <p className="text-gray-400 text-sm">
                  Создавайте уникальные визуальные образы товара
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-steampunk-copper rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-steampunk-brass font-bold text-lg mb-2">
                  Умные описания
                </h3>
                <p className="text-gray-400 text-sm">
                  Привлекательный текст о товаре на основе ИИ
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-steampunk-pink rounded-full flex items-center justify-center mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-steampunk-brass font-bold text-lg mb-2">
                  Экспорт в один клик
                </h3>
                <p className="text-gray-400 text-sm">
                  Мгновенно скачайте, делитесь или копируйте
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
