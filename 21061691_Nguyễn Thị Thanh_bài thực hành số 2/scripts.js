document.getElementById("equation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form
  
    var coefficientA = parseFloat(document.getElementById("coefficient-a").value);
    var coefficientB = parseFloat(document.getElementById("coefficient-b").value);
  
    if (isNaN(coefficientA) || isNaN(coefficientB)) {
      document.getElementById("result").innerHTML = "Hãy nhập đúng hệ số a và b.";
    } else if (coefficientA === 0) {
      document.getElementById("result").innerHTML = "Hệ số a phải khác 0.";
    } else {
      var result = -coefficientB / coefficientA;
      document.getElementById("result").innerHTML = "Nghiệm của phương trình là: x = " + result.toFixed(2);
    }
  });