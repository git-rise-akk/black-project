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
                NUXT_PUBLIC_MAIL_USER: '%MU%',
                NUXT_PUBLIC_MAIL_PASS: '%MP%',
                NUXT_PUBLIC_MAIL_TO: '%MT%',
            },
        }
    ]
}
