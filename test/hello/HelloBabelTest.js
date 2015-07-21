import { assert } from 'chai';

var sayHello = use('hello/HelloBabel').sayHello;

describe('HelloBabel', () => {
  it('sayHello', () => {
    assert(sayHello() === 'Hello, Isparta!');
  });
  it('sayHi', () => {
    assert(sayHello(true) === 'Hi, Isparta!');
  });
});
