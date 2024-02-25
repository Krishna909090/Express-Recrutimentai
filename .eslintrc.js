module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:sonarjs/recommended'],
    plugins: ['prettier', 'sonarjs'],
    globals: {
        APP_DATA: 'readonly',
    },
    // parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'error',
        'no-empty': 0,
        'no-trailing-whitespace': 0,
        'no-unused-vars': 'error',
        'prettier/prettier': 'error',
        'class-methods-use-this': 'error',
        'no-param-reassign': 'error',
        'max-lines': [
            'error',
            {
                max: 500,
            },
        ],
        'max-len': [
            'error',
            {
                code: 100,
                tabWidth: 2,
                ignoreComments: true, //"comments": 80
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        camelcase: 'off',
        indent: 'error',
    },
};
