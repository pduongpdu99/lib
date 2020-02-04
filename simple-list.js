var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var list = /** @class */ (function () {
    function list() {
        this.head = null;
        this.length = 0;
        return this.head;
    }
    list.prototype.insertAtStart = function (data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.head;
    };
    list.prototype.insertAtEnd = function (data) {
        var newNode = new Node(data);
        // Check first node is null
        if (!this.head) {
            return this.insertAtStart(data);
        }
        var temp = this.head;
        while (temp.next != null)
            temp = temp.next;
        temp.next = newNode;
        this.length++;
        return this.head;
    };
    list.prototype.insertAtPosition = function (n, data) {
        // 0 < n < length - 1
        var newNode = new Node(data);
        if (n <= 0 || this.length == 0)
            this.insertAtStart(data);
        else if (n > this.length - 1)
            this.insertAtEnd(data);
        else {
            var temp = this.head;
            var position = 0;
            while (position < n - 1) {
                temp = temp.next;
                position++;
            }
            newNode.next = temp.next;
            temp = this.head;
            position = 0;
            while (position < n - 1) {
                temp = temp.next;
                position++;
            }
            temp.next = newNode;
        }
        return this.head;
    };
    list.prototype.removeAtStart = function () {
        if (this.head != null)
            this.head = this.head.next;
        return this.head;
    };
    list.prototype.removeAtEnd = function () {
        if (this.head != null) {
            if (this.head.next == null)
                this.removeAtStart();
            else {
                var temp = this.head;
                while (temp.next.next != null)
                    temp = temp.next;
                temp.next = null;
            }
        }
        return this.head;
    };
    list.prototype.removeAtPosition = function (n) {
        if (n === void 0) { n = 0; }
        if (this.head != null) {
            if (n <= 0)
                this.removeAtStart();
            else if (n > this.length - 1)
                this.removeAtEnd();
            else {
                var count = 0;
                var temp = this.head;
                while (count < n - 1) {
                    temp = temp.next;
                    count++;
                }
                temp.next = temp.next.next;
            }
        }
        return this.head;
    };
    list.prototype.setValues = function (arr) {
        var _this = this;
        this.head = null;
        arr.forEach(function (i) {
            _this.insertAtEnd(i);
        });
        return this.head;
    };
    list.prototype.setValues = function () {
        var _this = this;
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        this.head = null;
        arr.forEach(function (i) {
            _this.insertAtEnd(i);
        });
        return this.head;
    };
    list.prototype.display = function () {
        if (this.head == null)
            return this.head;
        var temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    };
    return list;
}());
var list = new list();
console.log(list);
