const config = {
    development: {
        name: 'Sabir Ansari',
        description: 'Thoughts, stories and ideas.',
        twitterHandle: '@sabir_ansari95',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy',
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    },
    production: {
        name: 'Sabir Ansari',
        description: 'Thoughts, stories and ideas.',
        twitterHandle: '@sabir_ansari95',
        baseUrl: 'https://blog.squido.org',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy',
        plugins: [
            {
                name: 'robots',
                options: {}
            }
        ]
    }
};

module.exports = config;
