document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById("name").value;
    var the = document.getElementById("the").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var khachhang = document.getElementById("khachhang").value;
    var hoadon = document.getElementById("hoadon").value;
    var message = document.getElementById("message").value;

    
    if (name === "") {
        document.getElementById("nameError").textContent = "Vui lòng nhập họ và tên";
        return false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

  
    var alertMessage = "Thông tin gửi góp ý:\n\n";
    alertMessage += "Họ và tên: " + name + "\n";
    alertMessage += "Mã thẻ: " + the + "\n";
    alertMessage += "Số điện thoại: " + phone + "\n";
    alertMessage += "E-mail: " + mail + "\n";
    alertMessage += "Loại khách hàng: " + khachhang + "\n";
    alertMessage += "Mã hóa đơn: " + hoadon + "\n";
    alertMessage += "Nội dung góp ý: " + message + "\n";

    alert(alertMessage);

    this.reset(); 
});