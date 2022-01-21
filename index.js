const express = require("express");
const path = require("path")
const axios = require("axios");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('static'))
app.use(express.json());
require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/index", (req, res) => {
  res.redirect("/")
});


app.listen(port, () => console.log(`Listening on ${port}`));

bot.command('start', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'ברוכים הבאים לבוט של ליאור נרקיס!', {
  })
})

bot.launch();