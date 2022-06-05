function pieceOfPie(arr, t1, t2) {

    return arr.slice(arr.indexOf(t1), arr.indexOf(t2) + 1);

}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));