# Projects & Tasks (Auth Only Implementation)

Це спрощена версія системи керування проєктами, що зосереджена на функціоналі авторизації та реєстрації, як було уточнено в ТЗ.

## Технологічний стек
- **Backend:** Laravel 12.
- **Frontend:** Vue 3 (Composition API), Vue Router, Pinia, Tailwind CSS.
- **Аутентифікація:** Laravel Sanctum (Token-based API).

## Реалізований функціонал
- Реєстрація користувача з вибором ролі (`admin`, `member`).
- Логін та логаут.

## Зміни в структурі
- До моделі `User` та міграції додано поле `role`.
- Оновлено `AuthController` для валідації та збереження ролі.
- Оновлено Vue-компонент `Register.vue` для вибору ролі.

## Інструкція з розгортання

### 1. Передумови
Переконайтеся, що у вас встановлені:
- PHP ^8.2
- Composer
- Node.js та NPM
- MySQL/MariaDB

### 2. Встановлення
Виконайте наступні команди для швидкого налаштування проекту:

```bash
# Клонування репозиторію (якщо ще не зроблено)
# git clone <repository-url>
# cd maiister.loc

# Встановлення залежностей та налаштування (автоматично через скрипт у composer.json)
composer run setup
```

Або виконайте кроки вручну:
```bash
# Встановлення PHP залежностей
composer install

# Створення файлу оточення
cp .env.example .env

# Генерація ключа додатка
php artisan key:generate

# Налаштування БД в .env та запуск міграцій
php artisan migrate

# Встановлення JS залежностей
npm install

# Збірка фронтенду
npm run build
```

### 3. Запуск
```bash
# Запуск Laravel сервера
php artisan serve

# Запуск Vite (для розробки фронтенду)
npm run dev
```
