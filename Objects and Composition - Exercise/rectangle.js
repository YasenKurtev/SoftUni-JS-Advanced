function rectangle(width, height, color) {

    let splited = color.split('');
    splited[0] = splited[0].toUpperCase();
    splited = splited.join('');

    let obj = {
        width: width,
        height: height,
        color: splited,
        calcArea() {
            return this.width * this.height
        }
    }

    return obj;

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());