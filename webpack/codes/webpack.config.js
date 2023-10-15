const  path = require('path')

moudle.exports = {
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname,'dist'),
        name:'bundle.js',
    },
    moudle:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.s[cs]ss$/,
                use:["style-loader",'css-loader','sass-loader']
            }
        ]
    },
    plugins:[
    ]
}