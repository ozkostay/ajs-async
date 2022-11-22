import GameSavingLoader from '../GameSavingLoader';

test('GameSavingLoader load()', async (done) => {
  const data = await GameSavingLoader.load();
  expect(typeof data).toBe('object');
  done();
});

// test('GameSavingLoader load()', async () => {
//   expect.assertions(1);
//   try{
//     const data = await GameSavingLoader.load();
//   }
//   catch(error){
//     expect(error.name).toEqual('getUsernameError');
//   }
// });
