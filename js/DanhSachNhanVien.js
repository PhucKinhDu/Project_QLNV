

function DanhSachNhanVien() {
  this.mangNV = [];


  //Method
  this.themNV = function(nv) {
    this.mangNV.push(nv);
  };

  this.timViTri = function(id) {
    var viTri = -1;
    this.mangNV.map(function(nv,index){
      if(nv.taiKhoanNV == id){
          viTri = index;
      }
    })
    return viTri;
  };

  this.xoaNV = function(id) {
    var viTriXoa = this.timViTri(id);
    if(viTriXoa > -1){
      this.mangNV.splice(viTriXoa, 1);
    }
  };

  this.capNhat = function(nv) {
    var viTriCapNhat = this.timViTri(nv.taiKhoanNV);
    if(viTriCapNhat > -1){
      //tìm thấy
      this.mangNV[viTriCapNhat] = nv;
    }
  };


}

DanhSachNhanVien.prototype.timKiemTen = function(loaiTK) {
  // TK: tìm kiếm
  var mangXepLoaiNV = [];
  var xepLoaiNV = loaiTK.toLowerCase();
  this.mangNV.map(function(nv){
      var loaiNVThuong = nv.xepLoaiNV.toLowerCase();
      if(loaiNVThuong.indexOf(xepLoaiNV) > -1){
        mangXepLoaiNV.push(nv);
      }
  })
  return mangXepLoaiNV;
}