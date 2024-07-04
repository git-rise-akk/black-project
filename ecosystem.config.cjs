module.exports = {
    apps: [
        {
            name: 'BlackProject',
            port: '80',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
            env: {
                NODE_ENV: 'production',
                NUXT_PUBLIC_MAIL_USER: '',
                NUXT_PUBLIC_MAIL_PASS: '',
                NUXT_PUBLIC_MAIL_TO: '',
            },
        }
    ]
}
