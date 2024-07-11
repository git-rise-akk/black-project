import nodemailer from 'nodemailer';

export default function (opt: any) {
    opt = {
        host: 'smtp.yandex.ru',
        port: 587,
        user: null,
        pass: null,
        from: null,
        to: null,
        ...opt,
    };

    const transporter = nodemailer.createTransport({
        host: opt.host,
        port: opt.port,
        secure: false,
        auth: {
            user: opt.user,
            pass: opt.pass,
        },
    });

    return (html: string = "", subject: string = "") => new Promise((resolve, reject) => {
        if (!opt.from || !opt.to || !html) reject();
        opt.from = opt?.from ?? opt?.user;

        transporter.sendMail({
            from: opt?.from,
            to: opt.to,
            subject, html,
        }, (error: any, info: any) => {
            if (error) {
                reject(error);
            }
            resolve(info);
        });
    });
}