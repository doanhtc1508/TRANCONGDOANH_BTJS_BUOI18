// Thêm số vào mảng:
// Tạo mảng rỗng chưa số
var nums = [];

function allNumber(){
  // B1 : DOM lấy value từ input
    var n = +document.getElementById("so").value ;

  // B2: Thêm giá trị vào mảng
    nums.push(n);

  // B3 : Hiển thị
  var themSo =  document.getElementById('result') 
  themSo.style.backgroundColor = 'aqua'
  themSo.innerHTML = `<p> Mảng : [${nums}]</p>`
// alert (nums);
}

// Bài tập 1:tổng số dương
function tongDuong(){
  var sum1 = 0;
  for (var i = 0 ; i < nums.length ; i++){
    // Tính tổng các số chẵn
    if (nums[i] > 0) {
        sum1 += nums[i];
    }
  }
  // Hiển thị
  var ketqua1 = document.getElementById("ketqua1");
  ketqua1.innerHTML= `Tổng số dương : ${sum1}`;
}

// Bài tập 2:đếm số dương
function demSoDuong(){
  var coutn1 = 0 ;

  for(var i = 0 ; i < nums.length ; i++){
    // Đếm số dương
    if(nums[i] > 0) {
      coutn1++ ;
    }
  }
  // Hiển thị
  var ketqua2 = document.getElementById('ketqua2')
  ketqua2.innerHTML = ` Số dương : ${coutn1} `;
}

// Bài tập 3 : tìm số nhỏ nhất trong mảng:
function timSoNhoNhat(){
  var min = nums[0] ;

  // So sánh từng số với giá trị trong mảng để tìm ra số nhỏ nhất
  for(var i = 0;i < nums.length ;i++){
    if (min > nums[i]){
      min = nums[i];
    }
  }
  // Hiển thị
  var ketqua3 = document.getElementById("ketqua3")
  ketqua3.innerHTML = `Số nhỏ nhất : ${min}`;
}

// Bài tập 4 : tìm số dương nhỏ nhất trong mảng
function soDuongNhoNhat(){
  var minDuong = getNumber();
  var min = minDuong[0];

  // Sử dụng vòng lặp tìm số dương nhỏ nhất
  for(var i = 1 ; i < minDuong.length;i++){
    if(minDuong[i] < min){
      min = minDuong[i] ;
    }
  }
  // Hiển thị
  var ketqua4 = document.getElementById("ketqua4");
  ketqua4.innerHTML = `Số dương nhỏ nhất : ${min}`
}

// Hàm lấy số dương 
function getNumber(){
  var soDuong = [];
  for (var i = 0 ; i < nums.length ; i++){
    if(nums[i] > 0){
     soDuong.push(nums[i]);
    }
  }
  return soDuong;
}

// Bài tập 5:tìm số chẵn cuối cùng trong mảng
function soChanCuoi(){
  var soChan = 0 ;

  // Tìm số chẵn cuối
  for(var i = 0 ; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      soChan = nums[i] ; 
    }
  }
  // Hiển thị
  var ketqua5 = document.getElementById("ketqua5");
  ketqua5.innerHTML = `số chẵn cuối :${soChan}`
}

// Bài tập 6 : đổi vị trí trong mảng
function doiCho(){
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  // nums[1,2,3,4]
  // muốn đổi vị trí 2 và 3
  // tạo một biến x chứa vị trí thứ nhất
  var x = nums[num1];
  // nếu vị trí thứ nhất bằng vị trí thứ hai thì lúc này vị trí 2 sẽ bằng vị trí 3
  nums[num1] = nums[num2];
  nums[num2] = x ;
  
  // B3: hiển thị
  document.getElementById("ketqua6").innerHTML = `Mảng sau khi đổi: ${nums}`
}

// Bài tập 7 : sắp xếp tăng dần
function sapXepTang(){
  var sapTangDan = nums ;

  // Sắp xếp dùng sort
  sapTangDan.sort(getSort) ;

  // Hiển thị
  var ketqua7 = document.getElementById("ketqua7");
  ketqua7.innerHTML = `Mảng sau khi sắp xếp ${sapTangDan}`;
}

// Hàm sắp xếp tăng dần
function getSort(a,b){
  return a- b
}

// Bài tập 8: tìm số nguyên tố đầu tiên 
function isprime(){

  var flag = 0;

  // Dùng vòng lặp for để kiểm tra
  for(var i = 0 ; i <nums.length ; i++){
    if(nums[i] < 2){
      flag = -1 ;
    }else if (nums[i] === 2){
      flag = nums[i];
      break;
    }else if(nums[i] % i !== 0){
      flag = nums[i];
      break;
    }else{
      flag = -1;
    }
  }
// console.log(flag);
// Hiển thị
  if(flag === -1) {
  document.getElementById("ketqua8").innerHTML = `${flag}`
  }else{
  document.getElementById("ketqua8").innerHTML = `Số nguyên tố đầu tiên : ${flag}`
  }
}

// Bài tập 9:đếm số nguyên
var numNguyen = [];

function themso(){
  // DOM lấy giá trị inout và thêm vào mảng mới
  var themsomoi = +document.getElementById("themso").value;
  numNguyen.push(themsomoi);

  // Hiển thị
  document.getElementById("somoi").style.backgroundColor = `#ccc`
  document.getElementById("somoi").innerHTML = `${numNguyen}`;
}

// Tìm số nguyên
function soNguyen(){
  var count = 0 ;

  //Hàm dung for kiểm tra số nguyên
  for(var i =0 ; i < numNguyen.length ; i++){
    if(Number.isInteger(numNguyen[i])){
      count++ ;
    }
  }
  // Hiển thị
  document.getElementById("ketqua9").innerHTML = `Số nguyên : ${count}`
}

// Bài tập 10:so sánh số am số dương

function kiemtraso(){
  // Tạo biến chứ số lượng số dương, số âm trong mảng 
  var soam = 0 ;
  var soduong = 0;

  // Sử dụng vòng lập để kiểm tra số âm, số dương trong mảng
  for(var i = 0;i< nums.length ;i++){
    if(nums[i] > 0 ){
      soduong++;
    }
    if(nums[i]< 0 ){
      soam++;
    }
  }
  // alert(soduong)
  // Hiển thị kết quả 
  if(soduong > soam){
    document.getElementById("ketqua10").innerHTML = `Số dương > số âm`
  }else if(soduong < soam){
    document.getElementById("ketqua10").innerHTML = `Số dương < số âm`
  }else{
    document.getElementById("ketqua10").innerHTML = `Số dương = số âm`
  }
}
