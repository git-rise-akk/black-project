# Black project
Краткое описание проекта 🔦 🔆

## Управение ботом
**/add** - Добавляет пользователя отправшего команду в список получателей заявок.  
**/del** - Удаляет добавленного пользователя.  
**/list** - Показывает список пользователей подписавшихся на получение заявок.  

## Документация API

**1.** Отправка заявки на почту:

| Тип  | адрес     | данные                                            |
|------|-----------|---------------------------------------------------|
| POST | /api/feed | title?: Заголовок письма <br/> text: Тело письма |

⚠ Данные отправляются в формате json через запрос **body**;

## Yandex mail doc
[Настроить по протоколу IMAP](https://yandex.ru/support/mail/mail-clients/others.html)  
[Настройка собственного SMTP](https://habr.com/ru/companies/ruvds/articles/325356/)


## Look at
the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

