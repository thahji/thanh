document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name === "") {
      alert("Vui lòng nhập họ và tên!");
      return;
  }

  if (email === "") {
      alert("Vui lòng nhập địa chỉ email!");
      return;
  }

  if (subject === "") {
      alert("Vui lòng nhập tiêu đề bài viết!");
      return;
  }

  if (message === "") {
      alert("Vui lòng nhập nội dung cần gửi!");
      return;
  }

  var messageText = "Thông tin đã nhập:\n\n" +
      "Họ và tên: " + name + "\n" +
      "Địa chỉ email: " + email + "\n" +
      "Tiêu đề bài viết: " + subject + "\n" +
      "Nội dung cần gửi: " + message;

  alert(messageText);

  document.getElementById("name").value= "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});