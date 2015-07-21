export function say(hiOrHello) {
  /* istanbul ignore if */
  if (hiOrHello) {
    return "Hi, Isparta!";
  }
  /* or istanbul ignore lese */
  /* or istanbul ignore next */
  else {
    return "Hello, Isparta!";
  }
}
