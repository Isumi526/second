const quiz = "関西住みたい街ランキング第一位と言えば？";
const choice = ["大阪梅田","北浜","西宮北口","芦屋"];
const correct = "西宮北口";
const $button =  document.getElementsByTagName("button");
let bI = 0;
let cI = choice.length;
// $button[0].textContent = choice[0];
// $button[1].textContent = choice[1];
// $button[2].textContent = choice[2];
// $button[3].textContent = choice[3];

const setQuiz = () => {
    document.getElementById("question").textContent = quiz;

    while(bI < cI){
        $button[bI].textContent = choice[bI];
        bI++;
    }
};

setQuiz();


$button[0].addEventListener('click', (e) => {
    if (correct === e.target.textContent){
        window.alert("正解！");
    } else {window.alert("不正解！");
    }
});

$button[1].addEventListener('click', (e) => {
    if (correct === e.target.textContent){
        window.alert("正解！");
    } else {window.alert("不正解！");
    }
});

$button[2].addEventListener('click', (e) => {
    if (correct === e.target.textContent){
        window.alert("正解！");
    } else {window.alert("不正解！");
    }
});

$button[3].addEventListener('click', (e) => {
    if (correct === e.target.textContent){
        window.alert("正解！");
    } else {window.alert("不正解！");
    }
});

// const clickHandler = (bI) => {
//     $button[bI].addEventListener('click', (e) => {
//         if (correct === e.target.textContent){
//             window.alert("正解！");
//         } else {window.alert("不正解！");
//         }
//     });
// };

// while(bI < cI){
//     clickHandler(bI);
//     bI++
// }