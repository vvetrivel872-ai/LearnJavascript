//  var a=Math.random()

//  console.log(Math.floor(a*10+1));  



var input_no = document.getElementById("input_no")

var showResult = document.getElementById("showResult")
var randomNumber = Math.floor(Math.random() * 10 + 1)
var score = document.getElementById("score")
console.log(randomNumber);

var totalScore = 10

function check_btn() {
    if (randomNumber == input_no.value) {
        showResult.textContent = "right"
    }

    else {
        totalScore = totalScore - 1
        score.textContent = "score is:" + totalScore
        showResult.textContent = "wrong"

    }

}
