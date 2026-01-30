import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Shield, Award, AlertCircle, CheckCircle, Phone, Instagram, Send, Menu, X, ChevronRight, Eye, Heart, Sun } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-rose-100 shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-2 rounded-xl">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Beauty Studio</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-rose-600 transition-colors font-medium">Процедури</button>
              <button onClick={() => scrollToSection('aftercare')} className="text-gray-600 hover:text-rose-600 transition-colors font-medium">Догляд</button>
              <button onClick={() => scrollToSection('contraindications')} className="text-gray-600 hover:text-rose-600 transition-colors font-medium">Протипокази</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-rose-600 transition-colors font-medium">Препарати</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-rose-600 transition-colors font-medium">Контакти</button>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+380123456789" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Зв'язатися
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-3">
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-600 hover:text-rose-600 py-2">Процедури</button>
                  <button onClick={() => scrollToSection('aftercare')} className="block w-full text-left text-gray-600 hover:text-rose-600 py-2">Догляд</button>
                  <button onClick={() => scrollToSection('contraindications')} className="block w-full text-left text-gray-600 hover:text-rose-600 py-2">Протипокази</button>
                  <button onClick={() => scrollToSection('products')} className="block w-full text-left text-gray-600 hover:text-rose-600 py-2">Препарати</button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-rose-600 py-2">Контакти</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 opacity-50" />
        <div className="relative z-10 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                  Перманентний макіяж та косметологія
                </h1>
                <p className="text-2xl md:text-3xl text-rose-600 mb-6 font-bold">
                  Ваша природня краса назавжди
                </p>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Професійний підхід, сучасні технології та преміальні препарати для досконалого результату
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2">
                    Записатися на консультацію
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => scrollToSection('services')} className="bg-white hover:bg-rose-50 text-rose-600 px-8 py-4 rounded-full text-lg font-bold transition-all border-2 border-rose-200 hover:border-rose-300">
                    Переглянути послуги
                  </button>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80" 
                  alt="Permanent makeup" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Наші <span className="text-rose-600">послуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Професійні процедури перманентного макіяжу та косметології
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Перманентний макіяж брів</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Природний ефект волосків або м'яка розтушовка. Індивідуальний підбір форми та кольору для ідеального результату.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Техніка волоскового методу
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Пудрові брови
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Комбінована техніка
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Перманентний макіяж губ</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Корекція форми, контуру та кольору губ. Природний ефект або яскравий акцент на ваш вибір.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Акварельні губи
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Контур з розтушовкою
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Повне заповнення
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Косметологічні процедури</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Професійний догляд за шкірою обличчя з використанням преміальних засобів.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Чистка обличчя
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Пілінги
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600" />
                  Омолоджуючі процедури
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section id="aftercare" className="py-20 px-6 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Рекомендації з <span className="text-rose-600">догляду</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Правильний догляд — запорука ідеального результату
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Перші 24 години</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Не мочити оброблену зону водою</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Уникати прямих сонячних променів</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Не торкатися зони руками</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Обробляти антисептиком (за призначенням)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Перший тиждень</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Наносити заспокійливий крем 3-4 рази на день</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Не відлущувати кірочки самостійно</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Уникати сауни, басейну, тренажерного залу</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Не використовувати декоративну косметику на зоні</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 p-3 rounded-xl">
                  <Sun className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Перший місяць</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Використовувати сонцезахисний крем SPF 50+</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Уникати агресивних пілінгів та скрабів</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Не відвідувати солярій</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Зволожувати шкіру спеціальними засобами</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Довготривалий догляд</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Корекція через 4-6 тижнів після першої процедури</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Оновлення кольору раз на 1-2 роки</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Регулярне використання SPF-захисту</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <span>Консультації з майстром при необхідності</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRAINDICATIONS */}
      <section id="contraindications" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <span className="text-rose-600">Протипокази</span>
            </h2>
            <p className="text-xl text-gray-600">
              Важлива інформація перед процедурою
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-white p-10 rounded-3xl border-2 border-rose-200 shadow-xl">
            <div className="flex items-start gap-4 mb-8 p-4 bg-red-50 rounded-2xl border border-red-200">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2">Абсолютні протипокази</h3>
                <p className="text-red-700 text-sm">Процедура категорично не рекомендується</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Цукровий діабет (інсулінозалежний)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Епілепсія</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Онкологічні захворювання</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>ВІЛ/СНІД в активній стадії</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Гепатит В, С в активній формі</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Порушення згортання крові</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Психічні розлади</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Схильність до келоїдних рубців</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Вагітність та період лактації</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Алергія на пігменти</span>
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-900 mb-2">Відносні протипокази</h3>
                <p className="text-yellow-700 text-sm mb-3">Процедура можлива після консультації з лікарем</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Гіпертонія (високий артеріальний тиск)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Прийом антибіотиків або гормональних препаратів</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Герпес в активній стадії (на зоні процедури)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Запальні процеси на шкірі</span>
                </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Менструація (знижена чутливість до болю)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 px-6 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Преміальні <span className="text-rose-600">препарати</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Використовуємо тільки сертифіковані препарати світових брендів
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-2xl">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-2xl inline-block mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Пігменти преміум-класу</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Сертифіковані пігменти з натуральних компонентів від провідних виробників США та Європи
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Hypoallergenic formula
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Стійкі кольори
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Без важких металів
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-2xl">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-2xl inline-block mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Анестетики нового покоління</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Сучасні знеболюючі засоби для комфортного проведення процедури
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Швидка дія
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Тривалий ефект
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Мінімум побічних ефектів
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-2xl">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-2xl inline-block mb-6">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Засоби для догляду</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Професійна косметика для відновлення та підтримки результату
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Прискорене загоєння
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Зволоження та живлення
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-600" />
                  Захист від UV
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-rose-600 to-pink-600 p-8 rounded-3xl text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Гарантія якості</h3>
            <p className="text-rose-100 max-w-2xl mx-auto">
              Всі препарати мають необхідні сертифікати якості та безпеки. Ми гарантуємо використання тільки оригінальної продукції від офіційних дистриб'юторів.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Зв'яжіться з <span className="text-rose-600">нами</span>
            </h2>
            <p className="text-xl text-gray-600">
              Оберіть зручний спосіб зв'язку для консультації та запису
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:+380123456789" className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-3xl border-2 border-rose-200 hover:border-rose-400 transition-all transform hover:scale-105 hover:shadow-2xl text-center">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Телефон</h3>
              <p className="text-rose-600 font-bold text-xl mb-2">+380 (12) 345-67-89</p>
              <p className="text-gray-600 text-sm">Дзвоніть щодня 9:00 - 20:00</p>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-3xl border-2 border-rose-200 hover:border-rose-400 transition-all transform hover:scale-105 hover:shadow-2xl text-center">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Instagram</h3>
              <p className="text-rose-600 font-bold text-xl mb-2">@beauty_studio</p>
              <p className="text-gray-600 text-sm">Наші роботи та відгуки</p>
            </a>

            <a href="https://t.me/beautystudio" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-3xl border-2 border-rose-200 hover:border-rose-400 transition-all transform hover:scale-105 hover:shadow-2xl text-center">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Telegram</h3>
              <p className="text-rose-600 font-bold text-xl mb-2">@beauty_studio</p>
              <p className="text-gray-600 text-sm">Швидкий зв'язок 24/7</p>
            </a>
          </div>

          <div className="mt-12 bg-gradient-to-br from-rose-600 to-pink-600 p-10 rounded-3xl text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Готові до перетворення?</h3>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Запишіться на безкоштовну консультацію вже сьогодні. Обговоримо всі деталі та оберемо ідеальний варіант для вас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+380123456789" className="bg-white hover:bg-rose-50 text-rose-600 px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Зателефонувати
              </a>
              <a href="https://t.me/beautystudio" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-bold transition-all backdrop-blur-sm border-2 border-white/30 hover:border-white/50 inline-flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Написати в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-12 px-6 border-t border-rose-900/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-2 rounded-xl">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Beauty Studio</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="tel:+380123456789" className="text-gray-400 hover:text-rose-400 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+380 (12) 345-67-89</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://t.me/beautystudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-800">
            © 2024 Beauty Studio. Перманентний макіяж та косметологія. Всі права захищені.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App