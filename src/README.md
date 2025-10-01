# Коррекционный сад өзгөчө

Одностраничный веб-сайт коррекционного сада «өзгөчө» в Бишкеке.

## 🚀 Как опубликовать на GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

1. Войдите в свой аккаунт на [GitHub](https://github.com)
2. Нажмите кнопку "New" или "+" в правом верхнем углу
3. Выберите "New repository"
4. Введите название репозитория (например, `ozgocho-kindergarten`)
5. Можете сделать репозиторий публичным или приватным
6. Нажмите "Create repository"

### Шаг 2: Загрузите код в репозиторий

```bash
# Инициализируйте git в папке проекта
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit"

# Добавьте remote репозиторий (замените YOUR-USERNAME и YOUR-REPO на свои)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Отправьте код на GitHub
git branch -M main
git push -u origin main
```

### Шаг 3: Настройте GitHub Pages

1. Перейдите в настройки репозитория (Settings)
2. В левом меню выберите "Pages"
3. В разделе "Build and deployment":
   - Source: выберите "GitHub Actions"
4. Сохраните настройки

### Шаг 4: Автоматический деплой

После настройки, каждый раз когда вы отправляете изменения в ветку `main`, GitHub автоматически:
1. Установит зависимости
2. Соберет проект
3. Опубликует на GitHub Pages

Ваш сайт будет доступен по адресу:
```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

## 📝 Локальная разработка

Если вы хотите запустить проект локально:

```bash
# Установите зависимости
npm install

# Запустите dev сервер
npm run dev

# Откройте http://localhost:5173 в браузере
```

## 🛠️ Команды

- `npm run dev` - Запуск dev сервера
- `npm run build` - Сборка проекта для production
- `npm run preview` - Предпросмотр production сборки

## 📦 Структура проекта

```
├── components/          # React компоненты
│   ├── About.tsx       # Секция "О нас"
│   ├── Contact.tsx     # Контактная форма
│   ├── Footer.tsx      # Футер
│   ├── Hero.tsx        # Главный баннер
│   ├── Services.tsx    # Услуги
│   └── ui/             # UI компоненты (shadcn/ui)
├── styles/
│   └── globals.css     # Глобальные стили и Tailwind
├── App.tsx             # Главный компонент
├── main.tsx            # Точка входа
└── index.html          # HTML шаблон
```

## 🎨 Технологии

- **React 18** - UI библиотека
- **TypeScript** - Типизация
- **Tailwind CSS v4** - Стилизация
- **Vite** - Сборщик
- **shadcn/ui** - UI компоненты
- **Lucide React** - Иконки

## 📞 Контакты

Для вопросов и предложений свяжитесь с нами через форму на сайте.

---

© 2024 Коррекционный сад өзгөчө
