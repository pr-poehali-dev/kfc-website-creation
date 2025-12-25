import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuItems = [
    {
      id: 1,
      name: "Баскет Оригинальный",
      description: "Сочные кусочки курицы в оригинальной панировке",
      price: "599₽",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/0cf7de37-3110-4695-b90a-79c608c57c07.jpg",
      category: "Баскеты"
    },
    {
      id: 2,
      name: "Острые Крылышки",
      description: "Хрустящие крылышки с острым соусом",
      price: "349₽",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/ab3dd932-a44e-47cd-ab21-a996cccad21c.jpg",
      category: "Закуски"
    },
    {
      id: 3,
      name: "Чикен Бургер",
      description: "Сочная куриная котлета, свежий салат и фирменный соус",
      price: "299₽",
      image: "https://cdn.poehali.dev/projects/5acfcc3f-d2f1-4239-bc0b-2b4df1f0ec54/files/2d5e5a25-d326-4ed6-924b-cacfe3423ee7.jpg",
      category: "Бургеры"
    }
  ];

  const offers = [
    {
      id: 1,
      title: "Комбо на двоих",
      description: "2 баскета + 2 напитка + картофель фри",
      discount: "30%",
      price: "899₽",
      oldPrice: "1290₽"
    },
    {
      id: 2,
      title: "Острая среда",
      description: "Острые крылышки со скидкой 40%",
      discount: "40%",
      price: "209₽",
      oldPrice: "349₽"
    },
    {
      id: 3,
      title: "Семейный баскет",
      description: "16 кусочков курицы + большой картофель фри",
      discount: "25%",
      price: "1199₽",
      oldPrice: "1599₽"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">KFC</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
              <a href="#offers" className="text-foreground hover:text-primary transition-colors">Акции</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Легендарный вкус курицы
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Оригинальная рецептура с 11 травами и специями. Хрустящая корочка снаружи, сочное мясо внутри.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            Заказать доставку
          </Button>
        </div>
      </section>

      <section id="offers" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Специальные предложения
            </h2>
            <p className="text-muted-foreground text-lg">
              Выгодные комбо и акции только для вас
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                <div className="bg-primary text-primary-foreground p-4">
                  <Badge className="bg-white text-primary mb-3">
                    Скидка {offer.discount}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-primary-foreground/90">{offer.description}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">{offer.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{offer.oldPrice}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Добавить в корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Наше меню
            </h2>
            <p className="text-muted-foreground text-lg">
              Выбирайте из наших популярных блюд
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-border bg-white">
                <div className="aspect-square overflow-hidden bg-muted/20">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-muted text-muted-foreground">
                    {item.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{item.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="Plus" size={20} className="mr-2" />
                      Добавить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KFC</h3>
              <p className="text-secondary-foreground/80">
                Легендарный вкус с 1952 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Меню</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Баскеты</li>
                <li>Бургеры</li>
                <li>Закуски</li>
                <li>Напитки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-secondary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>8 800 555 55 55</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@kfc.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>© 2024 KFC. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
