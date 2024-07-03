module.exports = {
    apps: [
        {
            name: 'BlackProject',
            port: '80',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
            env: {
                EMAIL_USER: 'test@mail.ru',
            },
        }
    ]
}
