//Chứa các phương thức kiểm tra dữ liệu
function Validation() {
    this.kiemTraRong = function (value, spanID, message) {
        if (value.trim() == "") {
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        //Hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    };

    this.kiemTraKyTu = function (value, spanID, message) {
        var pattern = /^[A-Za-z0-9_\.]{4,6}$/;
        if(value.match(pattern)){
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.kiemTraTrung = function (value, spanID, message, mangNV) {
        var isExist = mangNV.some(function (nv) {
            return value == nv.taiKhoanNV;
        });

        if (isExist) {
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        //Hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    };

    this.kiemTraTen = function (value, spanID, message) {
        var pattern =
            /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰYỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if (value.match(pattern)) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };

    this.kiemTraEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(pattern)) {
            //Đúng với biểu mẫu
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };

    this.kiemTraPass = function (value, spanID, message) {
        var pattern =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if (value.match(pattern)) {
            //Đúng với biểu mẫu
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };

    this.kiemTraNgay = function (value, spanID, message) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (value.match(pattern)) {
            //Đúng với biểu mẫu
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    // this.kiemTraLuong = function (value, spanID, message) {
    //     // var pattern = /^[0-9]+$/; // day la cai cua mi
    //     var pattern = /^[0-9]+/; // day la ta sua lai
    //     // console.log(String(value).match(pattern));
    //     if (String(value).match(pattern)) {
    //         //Đúng với biểu mẫu
    //         //Hợp lệ
    //         document.getElementById(spanID).innerHTML = "";
    //         document.getElementById(spanID).style.display = "none";
    //         return true;
    //     }

    //     //Không hợp lệ
    //     document.getElementById(spanID).innerHTML = message;
    //     document.getElementById(spanID).style.display = "block";
    //     return false;
    // };

    // this.kiemTraLuong = function (value, spanID, message) {
    //     // var pattern = /^[0-9]+$/; // day la cai cua mi
    //     // var pattern = /^[0-9]+/; // day la ta sua lai
    //     // console.log(String(value).match(pattern));
    //     var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;
    //     if (String(value).match(pattern) && value >= 1e+6 && value <= 20e+6) {
    //         //Đúng với biểu mẫu
    //         //Hợp lệ
    //         document.getElementById(spanID).innerHTML = "";
    //         document.getElementById(spanID).style.display = "none";
    //         return true;
    //     }

    //     //Không hợp lệ
    //     document.getElementById(spanID).innerHTML = message;
    //     document.getElementById(spanID).style.display = "block";
    //     return false;
    // };

    this.kiemTraLuong = function (value, spanID, message) {
        var pattern = /^[0-9]+$/;
        if(String(value).match(pattern) && String(value) >= 1e+6 && String(value) <= 20e+6){
             //Hợp lệ
             document.getElementById(spanID).innerHTML = "";
             document.getElementById(spanID).style.display = "none";
             return true;
        }

        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.kiemTraChucVu = function (selectID, spanID, message) {
        var optionIndex = document.getElementById(selectID).selectedIndex;
        if(optionIndex !== 0){
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    };

    this.kiemTraGio = function (value, spanID, message) {
        var pattern = /^[0-9]+$/;
        if(String(value).match(pattern)){
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };

    



}
