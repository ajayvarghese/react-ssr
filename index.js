const hook = require( "css-modules-require-hook" );
const genericNames = require( "generic-names" );

const generate = genericNames( "[name]__[local]___[hash:base64:5]", {
    context: process.cwd(),
});

hook( {
    generateScopedName: ( c, path ) => {
        return generate( c, path );
    },
} );

require( "@babel/register" )( {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react",
    ],
    plugins: [
        "dynamic-import-node",
    ],
} );
require( "./src/server" );
