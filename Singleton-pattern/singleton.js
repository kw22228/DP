/*
    Singleton은 1회에 한하여 인스턴스화가 가능하며 전역에서 접근 가능한 클래스를 지칭한다.
    만들어진 Singleton 인스턴스는 앱 전역에서 공유되기 때문에 앱의 전역 상태를 관리하기에 적합하다.
*/

/** 싱글턴이 아닌 예시. */
!(function () {
  let counter = 0;
  class Counter {
    getInstance() {
      return this;
    }

    getCount() {
      return counter;
    }

    increment() {
      return ++counter;
    }

    decrement() {
      return --counter;
    }
  }

  // 여러개의 인스턴스를 만들고 있음. (싱글턴 x)
  const counter1 = new Counter();
  const counter2 = new Counter();

  console.log(counter1.getInstance() === counter2.getInstance()); // false
})();

/** 싱글턴 패턴 적용 */
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('already has instance.');
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// const counter1 = new Counter();
// const counter2 = new Counter(); // Error: already has instance.

const singletonCounter = Object.freeze(new Counter()); // 인스턴스 객체를 사용하는 쪽에서 직접 객체를 수정할 수 없도록 freeze해준다.
export default singletonCounter;
