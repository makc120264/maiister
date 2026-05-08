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
