function createSortedList() {

    let obj = {
        numsList: [],
        add: function (element) {
            this.numsList.push(element);
            this.size += 1;
            this.numsList.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < this.numsList.length) {
                this.numsList.sort((a, b) => a - b);
                this.numsList.splice(index, 1);
                this.size -= 1;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.numsList.length) {
                return this.numsList[index];
            }
        },
        size: 0
    }

    return obj;

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));