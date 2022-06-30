function calculator() {

    let num1 = null;
    let num2 = null;
    let result = null;

    return {
        init: function (selector1, selector2, resultSelector) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: function () {
            return result.value = Number(num1.value) + Number(num2.value);
        },
        subtract: function () {
            return result.value = Number(num1.value) - Number(num2.value);
        }
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');