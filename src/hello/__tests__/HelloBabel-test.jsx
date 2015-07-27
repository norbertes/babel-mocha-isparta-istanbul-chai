import { sayHello } from '../HelloBabel';

describe('HelloBabel', () => {
  it('sayHello', () => {
    sayHello().should.be.equal('Hello, Isparta!');
  });
  it('sayHi', () => {
    sayHello(true).should.be.equal('Hi, Isparta!');
  });
});
