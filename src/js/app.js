import GameSavingLoader from './GameSavingLoader';

( async () => {
  try {
    const respons = await GameSavingLoader.load();
    console.log('=== Возвращаем объект: ', respons);
  }
  catch(error) {
    console.log(error);
  }
})();
