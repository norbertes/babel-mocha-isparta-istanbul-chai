const ReactUtils = {
  toTypeProps(comp) {
    var tt = typeof comp.type;
    if (tt === 'undefined' && typeof comp === 'string') {
      return {type: 'text', text: comp};
    }
    if (tt === 'string' || tt === 'function') {
      return {
        type: tt === 'function' ? comp.type.displayName : comp.type,
        props: ReactUtils._cleanupProps(comp._store.props)
      };
    }
    return void 0;
  },
  _cleanupProps(props) {
    var ps = {};
    for (var p in props) {
      var v = props[p], vt = typeof v;
      if (vt !== 'function' && vt !== 'object') {
        ps[p] = v;
      }
    }
    return ps;
  }
};

export default ReactUtils;
