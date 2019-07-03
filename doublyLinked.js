function DoubleLinkList() {
  var head = null;
  var length = 0;

  var Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head.element;
  };

  this.elementAt = function(index) {
    var currentNode = head;
    if (index >= length || index < 0) {
      return -1;
    }
    var currentIndex = 0;
    while (currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.prepend = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }
    length++;
  };

  this.append = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.prev = currentNode;
    }
    length++;
  };

  this.delete = function() {
    var currentNode = head;
    var oldNode = currentNode;
    currentNode = currentNode.next;
    currentNode.prev = null;
    length--;
    return oldNode;
  };

  this.deleteLast = function() {
    var currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.prev = null;
    length--;
    return currentNode;
  };

  // ****************** working here *****************
  // not deleting the element from the linked list at present.
  this.deleteElement = function(el) {
    var currentNode = head;
    while (currentNode) {
      if (currentNode.element === el) {
        if (currentNode === head) {
          head = currentNode.next;
        }

        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next ? currentNode.next : null;
        }
        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }
        length--;
        return currentNode.element;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.display = function() {
    var result = [];
    var currentNode = head;
    while (currentNode) {
      result.push(currentNode.element);
      currentNode = currentNode.next;
    }
    return result;
  };

  this.displayReverse = function() {
    var result = [];
    var currentNode = head;
    while (currentNode) {
      result.unshift(currentNode.element);
      currentNode = currentNode.next;
    }
    return result;
  };

  this.insertAfter = function(target, element) {
    var currentNode = head;
    var node = new Node(element);
    while (currentNode) {
      if (currentNode.element === target) {
        node.prev = currentNode;
        node.next = currentNode.next;
        currentNode.next = node;
        length++;
        return 1;
      }
      currentNode = currentNode.next;
    }
    return null;
  };
}

module.exports = DoubleLinkList;
