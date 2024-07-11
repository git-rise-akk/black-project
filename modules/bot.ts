import TelegramBotApi from 'node-telegram-bot-api';

export default function (opt: object) {
    opt = {
        token: '',
        userId: '',
        ...opt,
    };

    const bot = new TelegramBotApi(opt?.token, {
        polling: true,
    });

    return () => new Promise((resolve, reject) => {
        bot.sendMessage();
    });
}
