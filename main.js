// ONE,TWO

function currentDate() {
  return new Promise((resolve, reject) => {
    const myDate = new Date();
    // console.log(myDate.getHours());
    if (myDate.getHours() < "11") {
      return resolve("good luck and good morning");
    }
    return reject("ERROR!");
  });
}

function currentDateExecut() {
  currentDate()
    .then((date) => {
      divOne.innerHTML = `${date}`;
    })
    .catch((err) => {
      alert(err);
    });
}
// Three,FOUR

function someFunc(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 % num1 == false) {
      return resolve("good luck");
    }
    return reject("No");
  });
}

function someFuncExecut() {
  return someFunc(10, 30)
    .then((num) => {
      return (divOne.innerHTML = num);
    })
    .catch((num) => {
      return (divOne.innerHTML = num);
    });
}

function someFuncTwo(num, numArr) {
  new Promise((resolve, reject) => {
    for (let i = 0; i < numArr.length; i++) {
      if (num == numArr[i]) {
        resolve("Yes, Goodluck!");
      }
    }
    reject("No, EROOR!");
    return;
  });
}

// function someFuncTwoExcute() {
//   someFuncTwo(10, [4, 5, 10]).then((num) => {
//     return (divOne.innerHTML = num)
//   }).catch((num) => { return (divOne.innerHTML = num) });

// }

async function TargilFive() {
  try {
    await someFuncExecut().then((data) => (divOne.innerHTML = data));
  } catch (err) {
    alert("ERROR!");
  }
}

// one

async function targilOne() {
  btn5.disabled = true;

  loading.innerHTML = "<img src='LoadingGIF.gif' >";
  try {
    await fetch("https://moviesmern.herokuapp.com/movies/all ").then((num) => {
      console.log(num);
    });
  } catch (erro) {
    alert("ERROR!");
  } finally {
    loading.innerHTML = " ";
    btn5.disabled = false;
  }
}

async function targilTwo() {
  btn6.disabled = true;
  loadingTwo.innerHTML = "<img src='LoadingGIF.gif' >";

  try {
    await fetch("https://cat-fact.herokuapp.com/facts").then((adress) => {
      console.log(adress);
    });
  } catch (error) {
    alert("error");
  } finally {
    btn6.disabled = false;

    loadingTwo.innerHTML = " ";
  }
}

async function targilThree() {
  btn7.disabled = true;
  loadingThree.innerHTML = "<img src='LoadingGIF.gif' >";

  try {
    await fetch("https://placekeanu.com/200/150 ").then((data) => {
      console.log(data);
    });
  } catch (error) {
    alert("EROOR!");
  } finally {
    btn7.disabled = false;
    loadingThree.innerHTML = " ";
  }
}

async function targilFour() {
  btn8.disabled = true;
  loadingFour.innerHTML = "<img src='LoadingGIF.gif' >";
  try {
    await fetch("https://api.jikan.moe/v4/anime ").then((result) => {
      console.log(result.data);
    });
  } catch (error) {
    alert("ERROR!");
  } finally {
    btn8.disabled = false;
    loadingFour.innerHTML = "";
  }
}

