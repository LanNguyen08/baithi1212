var typed = new Typed('.element', {
strings: ["Lập Trình Viên.", "Nhà Thiết Kế.","Nguồn Sáng Tạo.","Người Được Chọn"],
typeSpeed:40,
backSpeed:40,
loop:true,
});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();

