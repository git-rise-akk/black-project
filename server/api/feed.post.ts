import mailer from '@/modules/mailer';

const {
    mailUser,
    mailPass,
    mailTo,
} = useRuntimeConfig();

let yandexMail = mailer({
    user: mailUser,
    pass: mailPass,
    to: mailTo,
});

export default defineEventHandler(async (event) => {

    try {

        const body = await readBody(event);
        await yandexMail(body?.text, body?.title ?? "Untitled message");

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
