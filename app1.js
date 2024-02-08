let userArrLength = parseInt(prompt("Введите длинну массива:"));
let userArray = [];

if(isNaN(userArrLength)) {
    alert("Вы ввели не числовое значение, массив не может быть создан!");
}

else if (userArrLength === 0) {
    alert("Вы ввели длинну массива 0. Вы создали пустой массив без данных!");
}

else {
    for (let i = 0; i < userArrLength; i++ ) {
        userArray.push(prompt(`Введите значение массива с индексом ${i}`));
    }
}

    alert(`Вы создали массив из ${userArray.length} элементов, вот его содержимое ${userArray}`);

    userArray.sort(function (a, b) {
        return a - b;
      });
    
      console.log(userArray);

      userArray.splice(1, 3);

      console.log(userArray);
