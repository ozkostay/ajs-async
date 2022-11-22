import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      async function main () {
        const buffer = await read();
        const string = await json(buffer);
        resolve(JSON.parse(string));
      }
      main();
    });
  }
}
