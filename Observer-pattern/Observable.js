/*
  Observer 패턴

  구독하는 주체 : Observer
  구독 가능한 객체 : Observerble
    - observers: 이벤트가 발생할때마다 전파할 Observer들의 배열
    - subscribe(): Observer를 Oberver배열에 추가한다. (push)
    - unsubscribe(): Observer배열에서 Observer를 제거한다.
    - notify(): 등록된 모든 Observer들에게 이벤트를 전파한다.
*/

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unSubscribe(f) {
    this.observers = this.observers.filter((observer) => observer !== f);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable(); //싱글턴 해주자
