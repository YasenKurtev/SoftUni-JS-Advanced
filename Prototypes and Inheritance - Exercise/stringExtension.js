(function stringExtension() {

    String.prototype.ensureStart = function (str) {

        if (this.startsWith(str)) {
            return this.toString();
        } else {
            return str.concat(this);
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        } else {
            return this.concat(str);
        }
    }

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        if (n < 3) {
            return '.'.repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');
            if (lastIndex !== -1) {
                return this.toString().substring(0, lastIndex) + '...';
            } else {
                return this.toString().substring(0, n - 3) + '...';
            }
        }
    }

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }

})();

let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
    'dog'));

stringExtension();