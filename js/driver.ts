/**************
 * @author Matthew Testerman <matthewtesterman83@gmail.com>
 * @file driver.ts/driver.js Contains Driver Class. (Entry Point)
 * @version 0.0.1
 * @copyright Mathtew Testerman. 2018-02-15
 ***************/
/// <reference path="game.ts" />

class Driver {
  main(imagePth: string) {
    var game: Game = new Game(imagePth);
    game.setup();
    game.run();
  }
}
