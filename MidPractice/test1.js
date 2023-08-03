const result = (function (exports, module) {

    exports = module.exports;

    exports.firstname = 'Tengis';

    module.exports.lastname = 'Erdenebaatar';

    exports = {

        getFullName: function () {

            console.log('John Smith')

        }

    }

    return module.exports;

}).apply(null, [null, { exports: {} }]);

console.log(result);