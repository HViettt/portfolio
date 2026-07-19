# Personal Portfolio - Nguyễn Hoàng Việt

Trang portfolio cá nhân được thiết kế và tối ưu chuyên nghiệp dành cho **Nguyễn Hoàng Việt** đang ứng tuyển vị trí **Frontend Developer Intern**. 

Trang web sử dụng kiến trúc Single Page App (SPA) với HTML5, Vanilla CSS và Vanilla JS, đảm bảo tốc độ tải trang cực nhanh, tối ưu hóa SEO và tích hợp các micro-interactions cùng Widget tương tác trực quan.

---

## 📂 Cấu trúc Thư mục

```text
portfolio/
├── index.html                  # Khung sườn HTML chính (Đã liên kết CSS/JS ngoài)
├── README.md                   # Hướng dẫn này
├── css/
│   └── style.css               # Tệp quản lý toàn bộ giao diện và CSS variables
├── js/
│   └── script.js               # Tệp quản lý hiệu ứng, particles & Toast widget (JS)
├── assets/                     # Thư mục chứa hiệu ứng background (nếu có)
├── CV/                         # Thư mục chứa CV của bạn
│   └── Nguyễn Hoàng Việt-Frontend Developer Intern.pdf  # Tệp CV thực tế (Đã cấu hình liên kết)
└── image/                      # Thư mục chứa hình ảnh screenshot dự án thật của bạn
    ├── smarttask.png           # Ảnh giao diện thực tế dự án SmartTask (Đã liên kết)
    ├── HomePage.png            # Slide 1 E-Commerce (Trang chủ khách hàng)
    ├── dashboard.png           # Slide 2 E-Commerce (Thống kê Admin Dashboard)
    ├── products.png            # Slide 3 E-Commerce (Danh mục sản phẩm)
    ├── productDetails.png      # Slide 4 E-Commerce (Chi tiết sản phẩm)
    ├── cart.png                # Slide 5 E-Commerce (Giỏ hàng)
    ├── orderConform.png        # Slide 6 E-Commerce (Xác nhận đặt hàng)
    ├── productManagement.png   # Slide 7 E-Commerce (Quản lý sản phẩm Admin)
    ├── orderManagement.png     # Slide 8 E-Commerce (Quản lý đơn hàng Admin)
    ├── userManagement.png      # Slide 9 E-Commerce (Quản lý tài khoản Admin)
    ├── profile.png             # Slide 10 E-Commerce (Hồ sơ cá nhân)
    ├── travel-homepage.png     # Slide 1 Travel Guide (Trang chủ Blog)
    ├── travel-blogs.png        # Slide 2 Travel Guide (Danh sách bài review)
    ├── travel-province.png     # Slide 3 Travel Guide (Bản đồ điểm đến)
    ├── travel-login.png        # Slide 4 Travel Guide (Xác thực blogger)
    ├── travel-admin.png        # Slide 5 Travel Guide (Quản lý Admin)
    └── travel-statistic.png    # Slide 6 Travel Guide (Thống kê Admin)
```

---

## 🛠️ Trạng thái Tích hợp & Các Placeholders còn lại

Tôi đã cấu hình sẵn toàn bộ liên kết dự án, hình ảnh thực tế và tệp CV của bạn vào mã nguồn. Bạn chỉ cần cập nhật nốt các thông tin cá nhân còn lại sau:

1. **Thông tin liên kết cá nhân (Cần cập nhật trong `index.html`)**:
   - `[EMAIL]`: Thay bằng địa chỉ email nhận liên hệ của bạn (ví dụ: `viet.nguyenhoang@email.com` tại dòng 1846).
   - `[LINKEDIN_URL]`: Thay bằng link trang cá nhân LinkedIn của bạn (tại dòng 1855).

2. **Liên kết dự án & CV (ĐÃ TÍCH HỢP HOÀN TẤT - KHÔNG CẦN SỬA)**:
   - **Tải CV**: Đã liên kết đường dẫn `CV/Nguy%E1%BB%85n%20Ho%C3%A0ng%20Vi%E1%BB%87t-Frontend%20Developer%20Intern.pdf`.
   - **GitHub Profile**: Đã liên kết `https://github.com/HViettt`.
   - **SmartTask Git & Demo**: Đã liên kết `https://github.com/HViettt/SmartTask` và `https://smart-task-sand.vercel.app` (sử dụng ảnh chụp thực tế `image/smarttask.png`).
   - **E-Commerce Git**: Đã liên kết `https://github.com/HViettt/E-Commerce-Management-System`.
   - **Travel Guide Git**: Đã liên kết `https://github.com/HViettt/Vietnam-Travel-Guide`.
   - **Screenshots Carousels**: Đã cấu hình hiển thị trọn bộ 10 ảnh thật cho E-Commerce và 6 ảnh thật cho Travel Guide.
   - **Avatar visual**: Đã khôi phục biểu tượng React xoay chuyển động mượt mà ở góc phải Hero Section.

---

## 🚀 Cách chạy thử trên máy cục bộ (Local Development)

Vì đây là dự án static web (tĩnh), bạn có thể chạy bằng các cách đơn giản sau:

### Cách 1: Click đúp trực tiếp
Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt web của bạn.

### Cách 2: Sử dụng Extension VS Code (Khuyên dùng)
Nếu sử dụng VS Code, hãy cài đặt extension **Live Server**. Sau đó, chuột phải vào `index.html` và chọn **Open with Live Server** để chạy trang web trên cổng local host (thường là `http://127.0.0.1:5500`), hỗ trợ tự động tải lại trang khi bạn chỉnh sửa code (Hot Reload).

### Cách 3: Sử dụng Node.js CLI
Mở terminal tại thư mục dự án và chạy:
```bash
npx serve .
```
Truy cập vào địa chỉ localhost hiển thị trên terminal để xem trang web.

---

## 🌐 Hướng dẫn Deploy lên Vercel (Từng bước chi tiết)

Vercel là nền tảng tối ưu và miễn phí để host các trang web tĩnh như Portfolio này. Bạn có thể deploy theo 2 cách:

### Cách 1: Deploy qua GitHub Dashboard (Được khuyên dùng vì tự động cập nhật khi push code)

1. **Đưa mã nguồn lên GitHub**:
   - Tạo một repository mới trên GitHub (ví dụ đặt tên là `personal-portfolio`).
   - Push toàn bộ mã nguồn của thư mục này (bao gồm cả thư mục `assets`) lên repository đó.
2. **Liên kết với Vercel**:
   - Truy cập vào trang web [Vercel.com](https://vercel.com/) và đăng nhập bằng tài khoản GitHub của bạn.
   - Tại bảng điều khiển Vercel (Dashboard), nhấn nút **Add New...** ở góc phải và chọn **Project**.
3. **Import Repository**:
   - Danh sách các repo GitHub của bạn sẽ hiển thị. Nhấn nút **Import** bên cạnh repository `personal-portfolio`.
4. **Cấu hình & Deploy**:
   - Tại màn hình cấu hình, giữ nguyên toàn bộ cài đặt mặc định (Vercel tự nhận diện dự án HTML tĩnh và tự điền cấu hình phù hợp).
   - Nhấn nút **Deploy** ở cuối trang.
   - Đợi khoảng 10-20 giây, trang web của bạn sẽ được xuất bản trực tuyến với tên miền miễn phí dạng `xyz.vercel.app`. Bạn cũng có thể mua và trỏ tên miền cá nhân vào đây một cách dễ dàng.

### Cách 2: Deploy trực tiếp bằng Vercel CLI (Không cần qua GitHub)

1. **Cài đặt CLI**: Mở terminal trên máy tính của bạn và cài đặt Vercel CLI toàn cục:
   ```bash
   npm install -g vercel
   ```
2. **Đăng nhập**: Chạy lệnh đăng nhập và làm theo hướng dẫn trên trình duyệt:
   ```bash
   vercel login
   ```
3. **Deploy dự án**: Truy cập terminal vào đúng thư mục chứa tệp `index.html` của bạn và gõ:
   ```bash
   vercel
   ```
   - Trả lời các câu hỏi thiết lập (bạn có thể nhấn **Enter** liên tục để đồng ý với các tùy chọn mặc định).
   - Khi hoàn tất, lệnh sẽ trả ra một URL dùng để preview sản phẩm.
4. **Chạy Production (Lưu cấu hình chính thức)**:
   ```bash
   vercel --prod
   ```
   Trang web của bạn sẽ chính thức live trực tuyến!
