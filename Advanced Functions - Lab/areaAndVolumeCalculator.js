function solve(area, vol, input) {

    let result = [];

    let coordinates = JSON.parse(input);

    for (let obj of coordinates) {
        let newObj = {};
        newObj.area = area.call(obj);
        newObj.volume = vol.call(obj);
        result.push(newObj);
    }

    return result;

}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};