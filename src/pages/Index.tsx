import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuCategories = [
    { id: "all", name: "Все", icon: "LayoutGrid" },
    { id: "baskets", name: "Баскеты", icon: "ShoppingBasket" },
    { id: "burgers", name: "Бургеры", icon: "Beef" },
    { id: "snacks", name: "Снэки", icon: "Pizza" },
    { id: "drinks", name: "Напитки", icon: "Coffee" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Баскет на компанию",
      category: "baskets",
      price: 1299,
      description: "12 кусочков острой курочки + 4 крыла",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/3c71380b-23d2-4e58-8467-6451e4eeec51.jpg",
      popular: true,
    },
    {
      id: 2,
      name: "Твистер Делюкс",
      category: "burgers",
      price: 299,
      description: "Сочная курица в пшеничной лепёшке с овощами",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/df7f9579-ea12-4592-92c5-7383eead7d21.jpg",
      popular: false,
    },
    {
      id: 3,
      name: "Крылышки Острые",
      category: "snacks",
      price: 249,
      description: "8 острых крылышек с фирменным соусом",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/1f0195a8-5b17-4691-b5c2-ad665554e59b.jpg",
      popular: true,
    },
    {
      id: 4,
      name: "Баскет Мини",
      category: "baskets",
      price: 449,
      description: "6 кусочков оригинальной курочки",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/3c71380b-23d2-4e58-8467-6451e4eeec51.jpg",
      popular: false,
    },
    {
      id: 5,
      name: "Чизбургер Де Люкс",
      category: "burgers",
      price: 349,
      description: "Двойная котлета, сыр чеддер, соус",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/df7f9579-ea12-4592-92c5-7383eead7d21.jpg",
      popular: true,
    },
    {
      id: 6,
      name: "Наггетсы",
      category: "snacks",
      price: 179,
      description: "9 хрустящих куриных наггетсов",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/1f0195a8-5b17-4691-b5c2-ad665554e59b.jpg",
      popular: false,
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: "Комбо на двоих",
      description: "2 твистера + картофель фри + 2 напитка",
      oldPrice: 899,
      newPrice: 599,
      discount: 30,
      validUntil: "До 31 декабря",
    },
    {
      id: 2,
      title: "Среда - день курицы",
      description: "Баскет 12 кусочков по суперцене",
      oldPrice: 1299,
      newPrice: 999,
      discount: 23,
      validUntil: "Каждую среду",
    },
    {
      id: 3,
      title: "Утренняя классика",
      description: "Бургер + кофе + хашбраун",
      oldPrice: 449,
      newPrice: 299,
      discount: 33,
      validUntil: "До 12:00",
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-open-sans">
      <header className="bg-secondary text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-montserrat font-bold text-primary">KFC</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#menu" className="hover:text-primary transition-colors">Меню</a>
            <a href="#offers" className="hover:text-primary transition-colors">Акции</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="ShoppingCart" size={20} />
            <span className="ml-2">Корзина</span>
          </Button>
        </div>
      </header>

      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-white text-primary mb-4">🔥 Хит сезона</Badge>
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-4">
                Легендарная курочка KFC
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Секретный рецепт из 11 трав и специй. Хрустящая снаружи, нежная внутри.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Icon name="ShoppingBag" size={20} />
                  <span className="ml-2">Заказать сейчас</span>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Смотреть меню
                </Button>
              </div>
            </div>
            <div className="animate-scale-in hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/3c71380b-23d2-4e58-8467-6451e4eeec51.jpg" 
                alt="KFC Bucket" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-montserrat font-bold mb-3">Специальные предложения</h2>
            <p className="text-muted-foreground text-lg">Лучшие акции только для вас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specialOffers.map((offer, index) => (
              <Card 
                key={offer.id} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-primary text-white">-{offer.discount}%</Badge>
                  <Icon name="Clock" size={20} className="text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">{offer.newPrice}₽</span>
                  <span className="text-lg text-muted-foreground line-through mb-1">{offer.oldPrice}₽</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{offer.validUntil}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Заказать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-montserrat font-bold mb-3">Наше меню</h2>
            <p className="text-muted-foreground text-lg">Выбирайте любимые блюда</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="font-semibold"
              >
                <Icon name={category.icon} size={18} />
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-56 object-cover"
                  />
                  {item.popular && (
                    <Badge className="absolute top-3 right-3 bg-primary text-white">
                      ⭐ Популярное
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{item.price}₽</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Plus" size={18} />
                      <span className="ml-1">В корзину</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-montserrat font-bold text-primary mb-4">KFC</div>
              <p className="text-white/80">Легендарная курочка с 1952 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Меню</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Баскеты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Бургеры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Снэки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8-800-555-55-55</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@kfc.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 KFC. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
