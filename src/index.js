const lodash = require('lodash');
const a = () => {
    console.info(1)
}
a();

module.exports.a = a;
module.exports.b = lodash;