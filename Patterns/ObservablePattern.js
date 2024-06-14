class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => observer !== obs);
  }

  notifyObservers(message) {
    this.observers.forEach((obs) => {
      obs.update(message);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notifyObservers("Hello observers");

subject.unsubscribe(observer1);

subject.notifyObservers("Observer 1 removed");
