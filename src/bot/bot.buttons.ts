import {Markup} from "telegraf";

export function actionButtons(){
    return Markup.inlineKeyboard([
      [{text: "Сайт", web_app: {url: 'https://google.com'}}]
    ],
    )
}