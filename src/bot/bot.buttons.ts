import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.inlineKeyboard([
    [
      {
        text: 'Магазин',
        web_app: {
          url: `${process.env.BOT_WEB_APP_FRONT_URL}`,
        },
      },
    ],
  ]);
}
