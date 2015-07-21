import './HelloBabel.css';
import { say } from './HelloIgnore';

export function sayHello(hiOrHello) {
  if (hiOrHello) {
    return say(hiOrHello);
  }
  else {
    return "Hello, Isparta!";
  }
}
