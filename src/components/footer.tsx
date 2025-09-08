import Link from "next/link";
import { Twitter, Linkedin, Github, Cog } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-steampunk-bronze">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-black text-steampunk-brass mb-6 text-lg">
              ПРОДУКТ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Фищки
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Цены
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Генератор карточек
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  API доступ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-black text-steampunk-brass mb-6 text-lg">
              КОМПАНИЯ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Карьера
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Подборка материалов
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-black text-steampunk-brass mb-6 text-lg">
              РЕСУРСЫ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Документация
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Центр помощи
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Сообщество
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Статус
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-black text-steampunk-brass mb-6 text-lg">
              ЗАКОННОСТЬ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Условия обслуживания
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Бесзопасность
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-steampunk-pink transition-colors font-medium"
                >
                  Политика использования файлов cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-steampunk-bronze">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <Cog className="w-6 h-6 text-steampunk-brass" />
            <span className="text-steampunk-brass font-black text-lg">
              ЭЛЕМЕНТАРНО
            </span>
          </div>

          <div className="flex items-center text-gray-400 mb-6 md:mb-0 font-medium">
            © {currentYear} Элементарно AI. Все права защищены.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-steampunk-pink transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-steampunk-pink transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-steampunk-pink transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
