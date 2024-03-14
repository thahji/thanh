function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
  
    var bmi = weight / ((height / 100) ** 2);
  
    var result = "Chỉ số BMI: " + bmi.toFixed(2) + "<br>";
  
    if (age === "middle") {
        if (bmi < 24.9) {
            result += "Bình thường";
        } else if (bmi < 29.9) {
            result += "Hơi thừa cân";
        } else {
            result += "Béo phì";
        }
    } else if (age === "middle_elderly") {
        if (bmi < 24.9) {
            result += "Bình thường";
        } else if (bmi < 27.9) {
            result += "Hơi thừa cân";
        } else {
            result += "Béo phì";
        }
    } else if (age === "elderly") {
        if (bmi < 24.9) {
            result += "Bình thường";
        } else if (bmi < 30) {
            result += "Hơi thừa cân";
        } else {
            result += "Béo phì";
        }
    }
  
    document.getElementById("result").innerHTML = result;
  }