# React Blog
![image](https://github.com/user-attachments/assets/17c27261-52d2-4534-9639-fee77495190c)
Добро пожаловать в React Blog! Это приложение для ведения личного блога, созданное с использованием React и JSON Server. Оно позволяет пользователям просматривать, добавлять и удалять посты.

## Содержание

- Описание
- Установка
- Запуск приложения
- Использование
- Технологии

## Описание

React Blog - это приложение, демонстрирующее основные концепции React, такие как компоненты, состояние и обработка событий. Также для управления данными используется JSON Server, который эмулирует RESTful API на локальном сервере.

## Установка

Для начала работы с приложением, выполните следующие шаги:

1. Склонируйте репозиторий:

   
   git clone https://github.com/VladimirBogomol/react-blog
   

2. Перейдите в директорию проекта:

   
   cd react-blog
   

3. Установите зависимости:

   
   npm install
   

4. Установите JSON Server глобально (если он ещё не установлен):

   
   npm install -g json-server
   

## Запуск приложения

После установки зависимостей выполните следующие команды в отдельных терминалах:

1. Запустите JSON Server:

   
   npx json-server --watch data/data.json --port 8000
   

   Это запустит сервер на порту 8000 и будет отслеживать файл data.json для любых изменений.

2. Запустите React приложение:

   
   npm run start
   

   Приложение будет доступно по адресу http://localhost:3000.

## Использование

1. Откройте приложение в браузере.
2. Вы можете просматривать все доступные посты, добавлять новые и удалять их.
3. Все изменения данных будут сохраняться в data.json благодаря JSON Server.

## Технологии
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- JSON Server
