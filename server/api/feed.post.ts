import mailer from '@/modules/mailer.ts';

const yandexMail = mailer({
    user: '',
    pass: '',
    to: '',
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
