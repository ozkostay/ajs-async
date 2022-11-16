import json from '../parser';

test('parser()', async (done) => {
  const data = await json();
  expect(typeof data).toEqual('string');
  done();
});
