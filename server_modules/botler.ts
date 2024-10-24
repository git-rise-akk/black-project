import TelegramBotApi from 'node-telegram-bot-api';

export default function (opt: any) {
    opt = {
        token: null,
        ...opt,
    };

    const users: string[] = {};

    const bot = new TelegramBotApi(opt.token, {
        polling: true,
    });

    bot
        .onText(/\/add/, (msg: any, [ _, val ]: string[]) => {
            if (!users?.[msg.from.id]) {
                users[msg.from.id] = msg.from;
            }

            bot.sendMessage(msg.from.id, `Пользователь ${msg.from.username} доабвлен!`);
        });

    bot
        .onText(/\/list/, (msg: any, [ _, val ]: string[]) => {
            const userNames = Object.values(users).reduce((acc: any, val: any) => {
                acc.push(`${val?.username} - ${val?.first_name} ${val?.last_name}`);
                return acc;
            }, []);

            bot.sendMessage(msg.from.id, 'Список пользователей:\n' + userNames.join('\n'));
        });

    bot
        .onText(/\/del/, (msg: any) => {
            if (users?.[msg.from.id]) {
                delete users[msg.from.id];
            }

            bot.sendMessage(msg.from.id, `Пользователь ${ msg.from.username } удалён!`);
        });

    return (html: string = "", subject: string = "") => {
        const promises = [];

        Object.keys(users).forEach((user) => {
            promises.push(bot.sendMessage(user, `
                ${subject} - ${html}
            `));
        });

        return Promise.all(promises);
    };
}
