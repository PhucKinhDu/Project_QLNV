// Lớp đối tượng phải khai báo ở 1 file riêng => dễ quản lý code (thêm, xóa, sửa...)

function NhanVien(taiKhoan,ten,email,matKhau,ngayLam,luong,chucVu,gioLam) {
    //Properties (các thuộc tính)
    this.taiKhoanNV = taiKhoan;
    this.tenNV = ten;
    this.email = email;
    this.matKhauNV = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luong;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLam;

    this.tongLuong = 0;
    this.xepLoaiNV = "";

    //Method (các phương thức)
    this.tinhTongLuong = function() {
        // 'giamDoc' là string
        // giamDoc là sử dụng biến
        // 2 cái khác nhau
        if (chucVu == "giamDoc") {
            this.tongLuong = this.luongCoBan * 3;
            return this.tongLuong;
        } else if (chucVu == "truongPhong") {
            this.tongLuong = this.luongCoBan * 2;
            return this.tongLuong;
        } else if (chucVu == "nhanVien") {
            this.tongLuong = this.luongCoBan * 1;
            return this.tongLuong;
        } else {
            // alert("Chức vụ chưa hợp lệ, vui lòng nhập lại!");
        }
    };

    this.xepLoai = function() {

        if(gioLam >= 192){
            this.xepLoaiNV = 'Xuất Sắc'; 
            return this.xepLoaiNV;
        }else if(gioLam >= 176){
            this.xepLoaiNV = 'Giỏi';
            return this.xepLoaiNV;
        }else if(gioLam >= 160){
            this.xepLoaiNV = 'Khá';
            return this.xepLoaiNV;
        }else if(gioLam < 160){
            this.xepLoaiNV = 'Trung Bình';
            return this.xepLoaiNV;
        }else{
            alert('Số giờ làm chưa hợp lệ, vui lòng nhập lại!');
        }
    };







    
}
