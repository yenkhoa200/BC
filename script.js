document.getElementById('myform').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail3').value; // sửa đúng id
    const sodt = document.getElementById('inputphone').value;   // sửa đúng id

    const error = document.getElementById('errorMsg');
    const success = document.getElementById('successMsg');

    const result = formValid(username, sodt, email); // truyền đúng thứ tự và tham số

    if (!result.valid) {
       // error.textContent = result.message;
       alert("Lỗi: " + result.message);
       // success.textContent = '';
    } else {
       /// error.textContent = '';
        //success.textContent = 'Đã gửi thành công. Quý khách vui lòng đợi vài phút!';
        //alert("Xin cảm ơn quý khách " + username);
         alert("Đã gửi thành công. Quý khách vui lòng đợi vài phút!\nXin cảm ơn quý khách " + username);
    }
});

function formValid(username, sodt, email) {
    if (!username || username.trim() === '' || username.includes(' ')) {
        return { valid: false, message: "Tên người dùng không để trống hoặc chứa khoảng trắng." };
    }

    if (!sodt || !/^\d+$/.test(sodt) || sodt.length < 10) {
        return { valid: false, message: "Số điện thoại phải là số và không được dưới 10 chữ số." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return { valid: false, message: "Email không đúng định dạng." };
    }
    return { valid: true };
}