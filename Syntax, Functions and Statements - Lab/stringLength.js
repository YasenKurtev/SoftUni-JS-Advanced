function stringLength(str1, str2, str3) {

    let totalLength = str1.length + str2.length + str3.length;
    console.log(totalLength);
    console.log(Math.floor(totalLength / 3));

}

stringLength('chocolate', 'ice cream', 'cake')