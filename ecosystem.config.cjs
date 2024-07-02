module.exports = {
    apps: [
        {
            name: 'BlackProject',
            port: '%port%',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
            env: {
                PORT: 80,
                HOST: '0.0.0.0',
            },
        }
    ]
}
