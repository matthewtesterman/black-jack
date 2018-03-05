/**************
 * @author Matthew Testerman <matthewtesterman83@gmail.com>
 * @file card.ts/card.js Contains Card Class.
 * @version 0.0.1
 * @copyright Mathtew Testerman. 2018-02-15
 ***************/
var Card = /** @class */ (function () {
    function Card(faceValue, suite) {
        this.faceValue = faceValue;
        this.suite = suite;
    }
    Object.defineProperty(Card.prototype, "getFaceValue", {
        get: function () {
            return this.faceValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "getSuite", {
        get: function () {
            return this.suite;
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
