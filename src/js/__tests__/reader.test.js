import read from '../reader';

test('reader()', async (done) => {
  const data = await read();
  expect(typeof data).toBe('object');
  done();
});
