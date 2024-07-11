import mailer from '@/server_modules/mailer';
import botler from '@/server_modules/botler';

const {
    mailUser,
    mailPass,
    mailTo,
    botToken,
} = useRuntimeConfig();

const yandexMail = mailer({
    user: mailUser,
    pass: mailPass,
    to: mailTo,
});

const tgBot = botler({
    token: botToken,
});

export default defineEventHandler(async (event) => {

    try {
        const body = await readBody(event);

        await yandexMail(body?.text, body?.title ?? "Untitled message");
        await tgBot(body?.text, body?.title ?? "Untitled message");

    } catch (err) {
        return {
            status: false,
            message: 'Произошла ошибка!',
        };
    }

    return {
        status: true,
        message: 'Письмо отправлено!',
    };
});
