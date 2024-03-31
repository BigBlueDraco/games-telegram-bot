"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
console.log(process.env.TELEGRAM_TOKEN);
bot.command("start", (ctx) => {
    console.log(ctx.update.message);
    ctx.reply(`Hello @${ctx.update.message.from.username}`);
});
bot.command("hipster", Telegraf.reply("λ"));
bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
//# sourceMappingURL=index.js.map