var _initClass, _temp;

const dec = () => {};

let _Foo;

new (_temp = class extends babelHelpers.identity {
  constructor() {
    (super(_Foo), babelHelpers.defineProperty(this, "foo", new _Foo())), _initClass();
  }

}, (() => {
  class Foo {}

  (() => {
    [_Foo, _initClass] = babelHelpers.applyDecs(Foo, [], [dec]);
  })();
})(), _temp)();
const foo = new _Foo();