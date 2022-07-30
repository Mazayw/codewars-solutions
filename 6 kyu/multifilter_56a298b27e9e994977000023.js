function multiFilter(...funcs) {
  return function (el) {
    return funcs.reduce((acc, f) => acc && f(el), true);
  };
}