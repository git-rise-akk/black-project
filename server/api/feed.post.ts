import mailer from '@/modules/mailer.ts';

const env = useRuntimeConfig().public;

const yandexMail = mailer({
    user: env.mailUser,
    pass: env.mailPass,
    to: env.mailTo,
});

export default defineEventHandler(async (event) => {

    try {

        console.log(env);

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
