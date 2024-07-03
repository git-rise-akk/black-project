import nodemailer from 'nodemailer';

const responseBase = {
    statusCode: 200,
    statusMessage: "Ok!",
};

const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
        type: 'login',
        user: '',
        pass: '',
    },
});

const send = (mailOptions: any) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
                reject(error)
            }
            resolve(info)
        })

    })
}

export default defineEventHandler(async (event) => {
    const res = { ...responseBase };
    const body = await readBody(event);

    if (body?.isDev) {
        if (body?.status) res.statusCode = body.status;
        if (body?.message) res.statusMessage = body.message;
        return res;
    }

    // await send({
    //     from: '',
    //     to: '',
    //     subject: 'Hello World!',
    //     html: `<h1>Hello?</h1><p>How are you?</p>`,
    // });

    res.dot = {
        ...process.env.EMAIL_USER,
    };

    return res;
});
