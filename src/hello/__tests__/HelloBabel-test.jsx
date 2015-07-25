import { assert } from 'chai';
import { sayHello } from '../HelloBabel';

describe('HelloBabel', () => {
  it('sayHello', () => {
    assert(sayHello() === 'Hello, Isparta!');
  });
  it('sayHi', () => {
    assert(sayHello(true) === 'Hi, Isparta!');
  });
});
