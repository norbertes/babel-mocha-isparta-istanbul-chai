export function say(someBody, hiOrHello = false) {
  /* istanbul ignore if */
  if (hiOrHello) {
    return `Hi, ${someBody}!`;
  }
  /* or istanbul ignore else */
  /* or istanbul ignore next */
  else {
    return `Hello, ${someBody}!`;
  }
}
