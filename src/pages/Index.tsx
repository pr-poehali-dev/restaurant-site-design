import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bookingDate, setBookingDate] = useState<Date>();
  const [bookingTime, setBookingTime] = useState('');
  const [guests, setGuests] = useState('');

  const menuItems = [
    { name: 'Морские гребешки', description: 'Обжаренные гребешки с лимонным маслом и спаржей', price: 2800, image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400' },
    { name: 'Стейк Рибай', description: 'Мраморная говядина, картофель гратен, трюфельный соус', price: 3500, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400' },
    { name: 'Паста с трюфелем', description: 'Домашняя паста, черный трюфель, пармезан', price: 2200, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
    { name: 'Тартар из тунца', description: 'Свежий тунец, авокадо, имбирный соус', price: 2400, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400' },
    { name: 'Утиная грудка', description: 'Томленая утка, ягодный соус, овощи гриль', price: 2900, image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400' },
    { name: 'Тирамису', description: 'Классический итальянский десерт с маскарпоне', price: 890, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
  ];

  const features = [
    { icon: 'ChefHat', title: 'Авторская кухня', description: 'Шеф-повар с мишленовским опытом' },
    { icon: 'Wine', title: 'Винная карта', description: 'Более 200 позиций премиальных вин' },
    { icon: 'UtensilsCrossed', title: 'Свежие продукты', description: 'Ежедневные поставки фермерских продуктов' },
    { icon: 'Calendar', title: 'Онлайн-бронь', description: 'Удобное бронирование столиков 24/7' },
  ];

  const events = [
    { title: 'Винная дегустация', date: '25 октября', description: 'Знакомство с винами Тосканы' },
    { title: 'Мастер-класс от шефа', date: '2 ноября', description: 'Секреты приготовления пасты' },
    { title: 'Джазовый вечер', date: '8 ноября', description: 'Живая музыка каждую пятницу' },
  ];

  const reviews = [
    { name: 'Анна Петрова', rating: 5, text: 'Невероятная атмосфера и изысканная кухня! Обязательно вернемся.' },
    { name: 'Дмитрий Соколов', rating: 5, text: 'Лучший ресторан в городе. Идеальное место для романтического ужина.' },
    { name: 'Елена Иванова', rating: 5, text: 'Профессиональное обслуживание и восхитительные блюда. Рекомендую!' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !bookingTime || !guests) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }
    toast.success('Бронирование отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено! Мы ответим в ближайшее время.');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-primary">RESTAURANT</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-secondary transition-colors">Главная</a>
            <a href="#menu" className="hover:text-secondary transition-colors">Меню</a>
            <a href="#booking" className="hover:text-secondary transition-colors">Бронирование</a>
            <a href="#events" className="hover:text-secondary transition-colors">События</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            <Icon name="Phone" className="mr-2" size={18} />
            +7 (495) 123-45-67
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-6 text-primary">
              Изысканная кухня<br />для настоящих ценителей
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Авторские блюда от шеф-повара с мишленовским опытом в атмосфере роскоши и комфорта
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#booking">Забронировать столик</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#menu">Посмотреть меню</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-playfair font-bold mb-4 text-primary">О ресторане</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали пространство, где каждый ужин становится незабываемым событием
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800" 
                alt="Интерьер ресторана" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Наш ресторан — это уникальное сочетание европейской элегантности и современного комфорта. 
                Мы тщательно отбираем продукты от лучших фермеров и поставщиков, чтобы каждое блюдо 
                отражало нашу философию качества и вкуса.
              </p>
              <p className="text-lg leading-relaxed">
                Наш шеф-повар, прошедший стажировку в мишленовских ресторанах Европы, создает авторские 
                блюда, которые удивят даже самых взыскательных гурманов.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-playfair font-bold text-secondary mb-2">15+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-playfair font-bold text-secondary mb-2">200+</div>
                  <div className="text-muted-foreground">Позиций в меню</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-4 text-primary">Наше меню</h2>
            <p className="text-xl text-muted-foreground">Избранные блюда от шеф-повара</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 border-transparent hover:border-secondary">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-secondary">{item.price} ₽</span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-playfair font-bold mb-4 text-primary">Забронировать столик</h2>
              <p className="text-xl text-muted-foreground">Выберите удобную дату и время</p>
            </div>
            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label>Дата</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Icon name="Calendar" className="mr-2" size={18} />
                            {bookingDate ? format(bookingDate, 'PP', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={bookingDate}
                            onSelect={setBookingDate}
                            locale={ru}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Время</Label>
                      <Select value={bookingTime} onValueChange={setBookingTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {['12:00', '13:00', '14:00', '15:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guests">Гостей</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger>
                          <SelectValue placeholder="Количество" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'гость' : 'гостя'}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий (опционально)</Label>
                    <Textarea id="comment" placeholder="Особые пожелания, аллергии, предпочтения..." />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-4 text-primary">Наши преимущества</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                    <Icon name={feature.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400" alt="Атмосфера" className="rounded-lg shadow-lg" />
              <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=400" alt="Кухня" className="rounded-lg shadow-lg mt-8" />
              <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400" alt="Блюда" className="rounded-lg shadow-lg" />
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400" alt="Интерьер" className="rounded-lg shadow-lg mt-8" />
            </div>
            <div>
              <h2 className="text-5xl font-playfair font-bold mb-6 text-primary">Атмосфера ресторана</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Мы создали пространство, где каждая деталь продумана до мелочей. 
                Мягкое освещение, стильный интерьер и уютная атмосфера создают идеальные 
                условия для романтического ужина или деловой встречи.
              </p>
              <p className="text-lg leading-relaxed">
                Наш ресторан — это место, куда хочется возвращаться снова и снова.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-4 text-primary">Отзывы гостей</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-all">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                    ))}
                  </div>
                  <p className="mb-4 text-foreground/80 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-4 text-primary">События и акции</h2>
            <p className="text-xl text-muted-foreground">Не пропустите наши специальные мероприятия</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent">
                <CardHeader>
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Icon name="Calendar" size={20} />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <CardTitle className="font-playfair text-2xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-playfair font-bold mb-6">Наша команда</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300" 
                alt="Шеф-повар" 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-secondary"
              />
              <h3 className="text-3xl font-playfair font-bold mb-2">Алексей Морозов</h3>
              <p className="text-xl mb-4 text-primary-foreground/80">Шеф-повар</p>
              <p className="text-lg text-primary-foreground/90">
                Прошел стажировку в лучших ресторанах Европы. Обладатель премии "Лучший шеф года" 
                и создатель уникальных авторских блюд, сочетающих классику и современность.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-playfair font-bold mb-8 text-primary">Свяжитесь с нами</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 12:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@restaurant.ru</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Напишите нам</CardTitle>
                <CardDescription>Мы ответим в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContact} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Ваше сообщение..." rows={4} required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-4">RESTAURANT</h3>
              <p className="text-primary-foreground/80">
                Изысканная кухня для настоящих ценителей
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#home" className="block hover:text-secondary transition-colors">Главная</a>
                <a href="#menu" className="block hover:text-secondary transition-colors">Меню</a>
                <a href="#booking" className="block hover:text-secondary transition-colors">Бронирование</a>
                <a href="#contact" className="block hover:text-secondary transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" className="hover:text-secondary cursor-pointer transition-colors" size={24} />
                <Icon name="Facebook" className="hover:text-secondary cursor-pointer transition-colors" size={24} />
                <Icon name="Twitter" className="hover:text-secondary cursor-pointer transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Restaurant. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
