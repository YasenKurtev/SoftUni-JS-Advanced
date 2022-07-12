(function arrayExtension() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = Number(n); i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < Number(n); i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.sum = function () {
        let result = 0;
        for (let elelement of this) {
            result += Number(elelement);
        }
        return result;
    }

    Array.prototype.average = function () {
        let result = 0;
        for (let elelement of this) {
            result += Number(elelement);
        }
        return result / this.length;
    }

})();