import { Help, InjectBot, On, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { actionButtons } from './bot.buttons';

@Update()
export class BotUpdate {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply(
      'Привет! Здесь ты можешь присмотреть и купить понравившиеся тебе товары. После успешного созадния заказа с тобой свяжется модератор и уточнит детали доставки.',
      actionButtons(),
    );
  }
  @Help()
  async help(ctx: Context) {
    await ctx.reply(
      'Этот бот предназначен для того, чтобы упростить покупку и продажу каких-либо вещей в интернете.',
    );
  }
  @On('sticker')
  @On('message')
  async on(ctx: Context) {
    await ctx.reply('👍');
  }
}
