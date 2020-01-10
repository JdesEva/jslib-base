// rollup.config.js
// commonjs
var common = require('./rollup.js');
var serve = require('rollup-plugin-serve')
var livereload = require('rollup-plugin-livereload')

module.exports = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        common.getCompiler({
            tsconfigOverride: { compilerOptions: { declaration: true, module: 'ES2015' } },
            useTsconfigDeclarationDir: true
        }),
        serve({
            open: true, // 是否打开浏览器
            contentBase: './',
            historyApiFallback: true, // Set to true to return index.html instead of 404
            host: 'localhost',
            port: 3003
        }),
        livereload({
            verbose: true,
            watch: ['dist']
        })
    ]
};
