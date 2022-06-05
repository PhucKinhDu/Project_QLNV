/**
 * Thêm Nhân Viên
 * - Lấy thông tin từ form
 * - Lưu thông tin nhân viên để tạo đối ượng nv
 * - Thêm nv vào mảng nv
 * - Hiển thị danh sách nhân viên lên table
 */

// Biến dsnv là biến toàn cục (Global) -> nó có các chức năng như: thêm nv, xóa nv, chỉnh sửa nv, tìm kiếm nv...
const dsnv = new DanhSachNhanVien();
const validation = new Validation();

//Hàm rút gọn cú pháp 'getElementById'
function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        //Lấy đc Local Storage
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        // console.log(dsnv.mangNV);
        hienThiTable(dsnv.mangNV);
    }
}

//Lấy dsnv từ local khi load trang web
getLocalStorage();

function themNhanVien() {

    // getELE("btnThemNV").disabled = false;

    // Lấy thông tin
    // getELE('tknv').disabled = true;
    // check xem thử input taikhoan có disabled hay không
    // nếu có thì cho nó = false
    // vậy là xong :v
    //check ở đâu?
    // check tại đây nè
    // console.log(getELE("tknv").attributes.disabled);
    // if (getELE("tknv").attributes.disabled) {
    //     console.log("Neu disabled thi vao day");
    // }
    var taiKhoan = getELE("tknv").value.trim();
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luong = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    // console.log(taiKhoan, ten, email, matKhau, ngayLam, luong, chucVu, gioLam);

    //Kết quả kiểm tra dữ liệu
    var isValid = true;

    //Kiểm tra taiKhoanNV
    isValid &=  
        validation.kiemTraRong(
            taiKhoan,
            "tbTKNV",
            "Tài khoản Nhân Viên không được để trống!"
        ) && 
        validation.kiemTraKyTu(
            taiKhoan,
            "tbTKNV",
            "Tài khoản Nhân Viên không được chứa ký tự đặc biệt!"

        ) &&
        validation.kiemTraTrung(
            taiKhoan,
            "tbTKNV",
            "Tài khoản Nhân Viên không được trùng!",
            dsnv.mangNV
        );

    //Kiểm tra tenNV
    isValid &=
        validation.kiemTraRong(
            ten,
            "tbTen",
            "Tên Nhân Viên không được để trống!"
        ) && 
        validation.kiemTraTen(
            ten, 
            "tbTen", 
            "Tên Nhân Viên phải là chữ!"
        );

    //Kiểm tra Email
    isValid &= 
        validation.kiemTraEmail(
        email,
        "tbEmail",
        "Email chưa đúng dịnh dạng!"
    ) && 
        validation.kiemTraTrung(
        email,
        "tbEmail",
        "Email không được trùng!",
        dsnv.mangNV
        );

    //Kiểm tra Pass
    isValid &= validation.kiemTraPass(
        matKhau,
        "tbMatKhau",
        "Pass từ 6 - 10 ký tự (chứa ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt) không để trống!"
    );

    //Kiểm tra ngày
    isValid &= validation.kiemTraNgay(
        ngayLam,
        "tbNgay",
        "Ngày làm không để trống!"
    );

    // Kiểm tra lương
    isValid &= validation.kiemTraLuong(
        luong,
        "tbLuongCB",
        "Tiền lương phải là số và nằm trong khoảng 1 triệu đến 20 triệu!"
    );

    //Kiểm tra chức vụ
    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","Chức vụ chưa được chọn!");

    //Kiểm tra giờ làm
    isValid &= validation.kiemTraGio(gioLam,"tbGiolam","Giờ làm phải là số (từ 80 đến 200) và không để trống!");


    //isValid == true.
    if (isValid) {
        //Tất cả các dữ liệu đều hợp lệ
        //Tạo thể hiện của lớp NhanVien
        var nv = new NhanVien(
            taiKhoan,
            ten,
            email,
            matKhau,
            ngayLam,
            Number(luong),
            chucVu,
            Number(gioLam)
        );
        nv.tinhTongLuong();
        nv.xepLoai();
        // nv.luongCoBan();
        // console.log(nv);
        // console.table(nv);

        //Thêm nhân viên vào mảng
        dsnv.themNV(nv);
        // console.log(dsnv.mangNV);

        //Lưu trữ Local Storage
        setLocalStorage();
        //Lấy dữ liệu từ local storage
        getLocalStorage();

    }
}

function hienThiTable(mang) {
    var content = "";

    mang.map(function (nv, index) {
        var trELE = `<tr>
        <td>${nv.taiKhoanNV}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoaiNV}</td>
        <td></td>
        <td>
            <button class="btn btn-danger mb-2" onclick="xoaNhanVien('${nv.taiKhoanNV}')">Xóa</button>
            <button class="btn btn-info" onclick="hienThiChiTiet('${nv.taiKhoanNV}')" data-toggle="modal" data-target="#myModal">Xem</button>
        </td>
    </tr>`;

        content += trELE;
    });
    getELE("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(id) {
    // console.log(id);
    dsnv.xoaNV(id);

    setLocalStorage();
    getLocalStorage();
}

function hienThiChiTiet(id) {
    // console.log(id);
    var viTri = dsnv.timViTri(id);

    if (viTri > -1) {
        getELE("tknv").value = dsnv.mangNV[viTri].taiKhoanNV;
        getELE("tknv").disabled = true;
        getELE("name").value = dsnv.mangNV[viTri].tenNV;
        getELE("email").value = dsnv.mangNV[viTri].email;
        getELE("password").value = dsnv.mangNV[viTri].matKhauNV;
        getELE("password").type = "text";
        getELE("datepicker").value = dsnv.mangNV[viTri].ngayLam;
        getELE("luongCB").value = dsnv.mangNV[viTri].luongCoBan;
        getELE("chucvu").value = dsnv.mangNV[viTri].chucVu;
        getELE("gioLam").value = dsnv.mangNV[viTri].gioLamTrongThang;

        //Quan trọng. Chú ý dễ bị điên! O_____o"
        getELE("btnThemNV").disabled = true;
        getELE("btnCapNhat").disabled = false;
        getELE("header-title").innerHTML = "Log in";
    }
}

function capNhatNhanVien() {

    var taiKhoan = getELE("tknv").value;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luong = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLam = Number(getELE("gioLam").value);

    var nv = new NhanVien(
        taiKhoan,
        ten,
        email,
        matKhau,
        ngayLam,
        luong,
        chucVu,
        gioLam
    );

    getELE("tknv").disabled = true;

    //---------------------------------------------------------------------------

    var ten = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luong = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;

    //Kiểm tra tenNV
    isValid &=
        validation.kiemTraRong(
            ten,
            "tbTen",
            "Tên Nhân Viên không được để trống!"
        ) && 
        validation.kiemTraTen(
            ten, 
            "tbTen", 
            "Tên Nhân Viên phải là chữ!"
        );

    //Kiểm tra Email
    isValid &= 
        validation.kiemTraEmail(
        email,
        "tbEmail",
        "Email chưa đúng dịnh dạng!"
    ) && 
        validation.kiemTraTrung(
        email,
        "tbEmail",
        "Email không được trùng!",
        dsnv.mangNV
        );

    //Kiểm tra Pass
    isValid &= validation.kiemTraPass(
        matKhau,
        "tbMatKhau",
        "Pass từ 6 - 10 ký tự (chứa ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt) không để trống!"
    );

    //Kiểm tra ngày
    isValid &= validation.kiemTraNgay(
        ngayLam,
        "tbNgay",
        "Ngày làm không để trống!"
    );

    // Kiểm tra lương
    isValid &= validation.kiemTraLuong(
        luong,
        "tbLuongCB",
        "Tiền lương phải là số và nằm trong khoảng 1 triệu đến 20 triệu!"
    );

    //Kiểm tra chức vụ
    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","Chức vụ chưa được chọn!");

    //Kiểm tra giờ làm
    isValid &= validation.kiemTraGio(gioLam,"tbGiolam","Giờ làm phải là số (từ 80 đến 200) và không để trống!");


    if (isValid) {
        var nv = new NhanVien(
            taiKhoan,
            ten,
            email,
            matKhau,
            ngayLam,
            Number(luong),
            chucVu,
            Number(gioLam)
        );
        nv.tinhTongLuong();
        nv.xepLoai();
        dsnv.capNhat(nv);
        setLocalStorage();
        getLocalStorage();

    }
    
    //---------------------------------------------------------------------------
}

getELE('btnTimNV').onclick = function() {
    var tenTK = getELE('searchName').value;
    var mangTK = [];

    mangTK = dsnv.timKiemTen(tenTK);
    hienThiTable(mangTK);

}

getELE("searchName").onkeyup = function() {
    var tenTK = getELE('searchName').value;
    var mangTK = [];

    mangTK = dsnv.timKiemTen(tenTK);
    hienThiTable(mangTK);
}

function resetForm() {
    getELE("formQLNV").reset();

    //Quan trọng. Chú ý dễ bị điên! O_____o"
    getELE("tknv").disabled = false;
    getELE("btnThemNV").disabled = false;
    getELE("btnCapNhat").disabled = true;
    getELE("header-title").innerHTML = "Register";
}
