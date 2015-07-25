import { say as sayHello } from '../OtherWay';

describe('OtherWay', () => {
  it('sayHello', () => {
    sayHello('Isparta').should.be.equal('Hello, Isparta!');
  });
  it('sayHi', () => {
    sayHello('Isparta', true).should.be.equal('Hi, Isparta!');
  });
});
