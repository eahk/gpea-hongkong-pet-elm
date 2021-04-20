module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-console': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}