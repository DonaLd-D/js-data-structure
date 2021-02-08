//链表

function Node(element) {
    this.element = element;
    this.next = null;
  }
  
  function LList() {
    this.head = new Node('head');
  }
  
  LList.prototype.insert = function (newElement, item) {
    const currNode = this.find(item);
    const newNode = new Node(newElement);
    newNode.next = currNode.next;
    currNode.next = newNode;
  };
  
  LList.prototype.find = function (item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      if (currNode.next === null) {
        return currNode;
      }
      currNode = currNode.next;
    }
    return currNode;
  };
  
  LList.prototype.findPrevious = function (item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  };
  
  LList.prototype.remove = function (item) {
    const prevNode = this.findPrevious(item);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  };
  
  
  LList.prototype.display = function () {
    let currNode = this.head;
    while (currNode.next) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  };
  
  const cities = new LList();
  cities.insert('Beijing', 'head');
  cities.insert('Tianjin', 'Beijing');
  cities.insert('Shanghai', 'Tianjin');
  cities.insert('Guangzhou', 'Beijing');
  
  cities.display();
  
