document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelectorAll('.menu-toggle');
    const body = document.body;

    // Toggle sidebar khi click nút ☰
    menuToggle.forEach(toggle => {
        toggle.addEventListener('click', function() {
            body.classList.toggle('sidebar-collapsed');
        });
    });

    // ==================== TỰ ĐÓNG MENU KHI CHUYỂN SANG MOBILE ====================
    function checkMobile() {
        if (window.innerWidth <= 1024) {
            body.classList.add('sidebar-collapsed');   // Tự đóng menu khi vào mobile
        } else {
            body.classList.remove('sidebar-collapsed'); // Mở lại khi quay về PC
        }
    }

    // Kiểm tra ngay khi load trang
    checkMobile();

    // Kiểm tra khi resize cửa sổ
    window.addEventListener('resize', checkMobile);



    document.addEventListener('click', function(e) {
            const sidebar = document.querySelector('.sidebar');
            
            if (window.innerWidth <= 1024) {
                if (!sidebar.contains(e.target) && 
                    !Array.from(menuToggle).some(t => t.contains(e.target))) {
                    body.classList.add('sidebar-collapsed');
                }
            }
        });


    
        //===================== VALIDATION FORM THÊM SINH VIÊN ====================
        const form = document.getElementById('studentForm');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset tất cả lỗi trước
            document.querySelectorAll('.error').forEach(err => err.style.display = 'none');

            let isValid = true;

            // Kiểm tra MSSV
            const mssv = document.getElementById('mssv').value.trim();
            if (!mssv.match(/^(DH)/i)) {
                document.getElementById('mssvError').style.display = 'block';
                isValid = false;
            }

            // Kiểm tra Email
            const email = document.getElementById('email').value.trim();
            if (!email.endsWith('@gmail.com')) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }

            // Kiểm tra SĐT
            const sdt = document.getElementById('sdt').value.trim();
            if (sdt.length !== 10 || !sdt.startsWith('0')) {
                document.getElementById('sdtError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                alert("✅ Thêm sinh viên thành công!");
                window.location.href = "2_stu.html";
            }
        });
    
});