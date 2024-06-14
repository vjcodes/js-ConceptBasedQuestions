class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class QueueUsingStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item){
    while(!this.isEmpty1()){
        this.stack2.push(this.stack1.pop())
    }

    this.stack1.push(item);

    while(!this.isEmpty2()){
        this.stack1.push(this.stack2.pop());
    }
  }

  dequeue(){
    return this.stack1.pop();
  }

  peek(){
    return this.stack1.peek();
  }

  isEmpty1(){
    return this.stack1.isEmpty()
  }

  isEmpty2(){
    return this.stack2.isEmpty();
  }
}


const queue = new QueueUsingStack();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());