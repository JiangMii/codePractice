const { NONAME } = require('dns');
const path=require('path');


module.exports={
    entry:'./src/a.ts',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'none',
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    }
}