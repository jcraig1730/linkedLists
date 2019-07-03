var expect = require('chai').expect;

var DoubleLinkList = require('./doublyLinked');

describe('Doubly Linked List', function() {
  var testList;
  beforeEach(function() {
    testList = new DoubleLinkList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    testList.append(4);
    testList.append(5);
    testList.append(6);
  });

  describe('Size:', function() {
    it('Should return the length of the list', function() {
      var test1 = testList.size();
      expect(test1).to.equal(6);
    });
  });

  describe('Head:', function() {
    it('Should allow you to get the element at the head', function() {
      var test1 = testList.head();
      expect(test1).to.equal(1);
    });
  });

  describe('Element At:', function() {
    it('Should allow you to get an element at a particular index', function() {
      var test1 = testList.elementAt(3);
      expect(test1).to.equal(4);
      var test2 = testList.elementAt(0);
      expect(test2).to.equal(1);
      var test3 = testList.elementAt(5);
      expect(test3).to.equal(6);
    });
  });

  describe('Prepend:', function() {
    it('Should prepend new elements to a list', function() {
      testList.prepend('new');
      var testItem = testList.head();
      expect(testItem).to.equal('new');
    });
  });

  describe('Append:', function() {
    it('Should append a new elements to a list', function() {
      testList.append('new');
      var testItem = testList.elementAt(testList.size() - 1);
      expect(testItem).to.equal('new');
    });
  });

  describe('Delete:', function() {
    it('Should allow you to delete and return the first item in the list', function() {
      var test1 = testList.delete();
      expect(test1.element).to.equal(1);
      expect(testList.size()).to.equal(5);
    });
  });

  describe('Delete Last:', function() {
    it('Should allow you to delete and return the last element in the list', function() {
      var test1 = testList.deleteLast();
      expect(test1.element).to.equal(6);
      expect(testList.size()).to.equal(5);
    });
  });

  describe('Delete Element:', function() {
    it('Should allow you to delete a specific element', function() {
      testList.deleteElement(3);
      var test1 = testList.display();
      expect(test1).to.eql([1, 2, 4, 5, 6]);
    });
  });

  describe('Display:', function() {
    it('Should display all list items from front to back', function() {
      var test1 = testList.display();
      expect(test1).to.eql([1, 2, 3, 4, 5, 6]);
      testList.prepend('new');
      var test2 = testList.display();
      expect(test2).to.eql(['new', 1, 2, 3, 4, 5, 6]);
    });
  });

  describe('Display Reverse:', function() {
    it('Should display all list items from front to back', function() {
      var test1 = testList.displayReverse();
      expect(test1).to.eql([1, 2, 3, 4, 5, 6].reverse());
      testList.prepend('new');
      var test2 = testList.displayReverse();
      expect(test2).to.eql(['new', 1, 2, 3, 4, 5, 6].reverse());
    });
  });

  describe('Insert After:', function() {
    it('Should allow you to insert a new element after a specific element', function() {
      testList.insertAfter(4, 'new');
      var test1 = testList.display()[4];
      expect(test1).to.equal('new');
    });
  });
});
