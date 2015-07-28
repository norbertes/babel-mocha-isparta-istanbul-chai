import React from 'react';
import HelloApp from '../HelloApp';

describe('HelloApp', () => {
  it('should pass', () => {
    console.log(React.renderToString(<HelloApp />));
  });
});
