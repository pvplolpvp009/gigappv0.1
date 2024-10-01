const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7495148581:AAHCVuWUZramiFkmyMpLaQPOkLF5gTuaBEY";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "gigacoin.store";
const community_link = "https://t.me/tongigacoin";


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Привет, ${userName}! Я здесь главный гигачад, Добро пожаловать в мою игру!*
Играй в эту игру и зарабатывай токены $GiGa

Начни играть уже сейчас и стань самым популярным чадом!

Есть друзья, коллеги или знакомые?
Приглашай их присоединиться в игру!
Больше людей - больше токенов!`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "👋 Начни сейчас!", web_app: { url: urlSent } }],
              [{ text: "Присоединяйся к нам!", url: community_link }]
            
            ],
            in: true
        },
    });
  });

  
  bot.launch();
  
app.listen(3000, () => {
    console.log("server is me and now running")
})
