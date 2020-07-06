const LinkedList = require('./linkedList');

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  const list = display(SLL);
  console.log(list);
  const listSize = size(SLL);
  console.log(listSize);
  const previous = findPrevious(SLL, 'Husker');
  console.log(previous);
}

main();

function display(SLL) {
  let node = SLL.head;
  let result = '';
  while (node) {
    result += node.value + ' ';
    node = node.next;
  }
  return result;
}

function size(SLL) {
  let node = SLL.head;
  let result = 0;
  while (node) {
    result++;
    node = node.next;
  }
  return result;
}

function findPrevious(SLL, value) {
  let node = SLL.head;
  let previousNode = null;
  while (node) {
    if (value == node.value) {
      return previousNode ? previousNode.value : null;
    }
    previousNode = node;
    node = node.next;
  }
}
