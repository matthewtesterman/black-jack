/**************
 * @author Matthew Testerman <matthewtesterman83@gmail.com>
 * @file card.ts/card.js Contains Card Class.
 * @version 0.0.1
 * @copyright Mathtew Testerman. 2018-02-15
 ***************/
class Card {
  constructor(private faceValue: string, private suite: string) {}

  get getFaceValue(): string {
    return this.faceValue;
  }

  get getSuite(): string {
    return this.suite;
  }
}
