# VietDiscovery by Ms. Trang - Project Handover & Testing Guide

> **Application Name**: VietDiscovery by Ms. Trang  
> **Student Area**: Learning Hub  
> **Teacher Area**: Teaching Studio  
> **Admin Area**: Admin Console  
> **Technology Stack**: React 19, Vite 6, TypeScript, Tailwind CSS v4, Lucide Icons, Supabase BaaS  
> **Dev Server URL**: `http://localhost:5173/` (Active & Verified)

---

## 📋 1. Functional Verification Checklist

### A. Tên và Ngôn Ngữ Giao Diện (Strict Conventions)
- [x] Tên thương hiệu: **VietDiscovery by Ms. Trang** nhất quán trên thanh tiêu đề và chân trang.
- [x] Phân định 3 khu vực: **Learning Hub** (Học sinh), **Teaching Studio** (Giáo viên), và **Admin Console** (Quản trị viên).
- [x] Tuyệt đối không sử dụng các từ cấm: *"Khu cô Trang"*, *"Góc cô Trang"* hay *"Teacher Workspace"*.
- [x] Tên Menu, Button và Tiêu đề hoàn toàn bằng tiếng Anh chuẩn mực sư phạm.
- [x] Nội dung học tập có phần dịch nghĩa, giải thích và chú dẫn tiếng Việt dễ hiểu cho học sinh tiểu học.

---

### B. Phân Hóa Khối Lớp (Grade 1–5 Differentiation)
- [x] **Khối 1–2 (Early Explorer)**:
  - Giao diện bài học chuyên biệt `Grade12LessonModal`: Nút bấm kích thước lớn (4xl/3xl), hình ảnh và icon trực quan, tối giản chữ viết.
  - 4 chế độ tương tác:
    - 🎨 **Learn**: Thẻ từ vựng flashcard hình ảnh lớn, âm thanh đọc mẫu bản xứ.
    - 🧩 **Play**: Trò chơi nối từ với hình ảnh / biểu tượng tương tác (Picture Match).
    - 🎧 **Listen**: Luyện nghe phát âm từ và bấm chọn đáp án đúng.
    - 🎤 **Speak**: Micro thu âm kích thước lớn, phản hồi khen ngợi tức thì ("Super Job! 🌟").
- [x] **Khối 3 (Discovery Explorer)**:
  - Bài học chuẩn 5 bước (`LessonModal`): Vocabulary -> Short Reading -> Listening -> Speaking -> Bloom Quiz (L1 Nhớ, L2 Hiểu).
  - Có ví dụ mẫu câu, bản dịch tiếng Việt song ngữ, giải thích đáp án chi tiết.
- [x] **Khối 4–5 (Academic Scholar)**:
  - Tăng cường từ vựng học thuật, bài đọc sâu sắc về di sản & công nghệ hiện đại, câu hỏi tư duy Bloom bậc cao (L3 Vận dụng, L4 Phân tích & Đánh giá).
- [x] **Grade Experience Preview Bar**: Giáo viên trong Teaching Studio có thể chuyển đổi chế độ xem trước (Preview) trải nghiệm thực tế của từng khối lớp (Grade 1–2, Grade 3, Grade 4–5) chỉ với 1 click.

---

### C. Cơ Chế Xác Thực & Phân Quyền (3-Tier Security Architecture)
- [x] **Học sinh Đăng nhập**:
  - Chọn lớp học từ danh sách thực tế do giáo viên tạo (Class Dropdown), không nhập văn bản tự do.
  - Phân biệt rõ ràng Khối lớp (Grade 3) và Tên lớp (Class 3.2).
  - Chọn tên học sinh từ danh sách lớp.
  - Nhập **Mã PIN 4 số** cá nhân do giáo viên cấp.
  - **Mã hóa an toàn**: PIN được băm một chiều với muối bằng thuật toán SHA-256 (`hashPin`), tuyệt đối không lưu văn bản thuần.
  - **Chống dò PIN (Brute-force Protection)**: Giới hạn tối đa 5 lần thử; nếu sai quá 5 lần, hệ thống tự động khóa tài khoản tạm thời trong 60 giây và hiển thị bộ đếm ngược.
  - Sau khi đăng nhập: Tự động điều hướng vào đúng trải nghiệm khối lớp của học sinh. Học sinh chỉ thấy bài được giao, kết quả và sao của chính mình.
- [x] **Tách Biệt Giao Diện Tuyệt Đối**:
  - Trong phiên làm việc của học sinh: Tuyệt đối không hiển thị menu, nút bấm, đường dẫn hay công cụ của Giáo viên/Admin.
  - Cơ chế **Route Guard**: Chặn truy cập trái phép khi gõ trực tiếp URL hoặc thay đổi tham số; tự động trả về Learning Hub.
  - Lối vào dành cho Nhân sự giáo dục (**Staff Portal**) được bố trí kín đáo ở chân trang (Footer), không trộn lẫn vào menu học tập của học sinh.
  - Khóa tính năng tự đăng ký quyền Teacher / Admin.
- [x] **Quyền Giáo viên (Teaching Studio)**:
  - Xem và quản lý các lớp được phân công, quản lý học liệu, phân bổ nhiệm vụ bài tập và theo dõi tiến độ học sinh.
- [x] **Quyền Quản trị viên (Admin Console)**:
  - Dành riêng cho tài khoản email được chỉ định (mặc định: `admin@vietdiscovery.edu.vn` hoặc email của bạn).
  - Quản lý toàn trường: Xem toàn bộ danh sách lớp, danh sách giáo viên, danh sách học sinh toàn hệ thống.
  - Chức năng **Đặt lại mã PIN (Reset PIN)** cho học sinh khi các em quên mã.
  - Quản trị kho tài liệu và kiểm tra cấu hình bảo mật.

---

### D. Bản Đồ Việt Nam Tương Tác (High-Precision Cartographic Map)
- [x] **Hình thể & Chủ quyền Toàn vẹn Lãnh thổ**: Thể hiện tỷ lệ địa lý chuẩn xác hình chữ S, Biển Đông, Quần đảo **Hoàng Sa** (thuộc TP. Đà Nẵng, 16°–17°B, 111°–113°Đ), Quần đảo **Trường Sa** (thuộc tỉnh Khánh Hòa, 8°30'–11°30'B, 112°–116°Đ), đảo **Phú Quốc** & quần đảo Thổ Chu (Kiên Giang), quần đảo **Côn Đảo** (Bà Rịa - Vũng Tàu), đảo **Bạch Long Vĩ**, đảo Cát Bà (Hải Phòng), đảo Cô Tô (Quảng Ninh), đảo Lý Sơn (Quảng Ngãi), đảo Phú Quý (Bình Thuận).
- [x] **Nguồn Bản đồ & Minh bạch Sư phạm**: Ghi rõ nguồn: *Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam (Bộ Tài nguyên & Môi trường) & Nghị quyết Quốc hội khóa XV, UBTVQH 2023–2025*.
- [x] **Nút Báo Cáo & Nạp Tệp Bản Đồ Chính Thức**: Cho phép Giáo viên/Quản trị viên tải lên file vector `.geojson` hoặc `.svg` chính thức từ cơ quan nhà nước khi có văn bản hoặc tệp số hóa ranh giới hành chính chi tiết.
- [x] **Lớp Hành chính 34 Tỉnh, Thành phố**: Chuyển đổi linh hoạt giữa lớp *Learning Pins* và *34 Provinces*, hỗ trợ tìm kiếm và tra cứu chi tiết đề án sáp nhập cấp xã/huyện, đô thị trung tâm và các huyện đảo trực thuộc.
- [x] **Khắc phục Hoàn toàn Trùng lặp / Chồng lấn Tên**: Bố trí nhãn tên so le trái/phải thông minh theo tọa độ thực địa, chữ đậm tương phản cao trên nền thẻ bo góc có bóng đổ.
- [x] **Thẻ Giới thiệu Điểm đến (Showcase Card)**: Khi bấm vào bất kỳ điểm đến nào, hệ thống mở thẻ ảnh sắc nét, tên song ngữ, tóm tắt bài học, chỉ số từ vựng/quiz Bloom và nút **"START DISCOVERY JOURNEY"** lớn, bắt mắt để vào học ngay.
- [x] **Phân hóa cho Lớp 1–2**: Tích hợp biểu tượng hoạt họa to (40px) trực tiếp trên bản đồ (⛵, 🐢, 👑, 🐉, 🏢, 🛶) và nút **Loa phát âm tiếng Anh & tiếng Việt (Play Audio 🔊)** để các bé nghe phát âm chuẩn tên địa danh.
- [x] **Phóng to, Thu nhỏ & Di động (Zoom & Pan Controls)**: Hỗ trợ nút Phóng to (+), Thu nhỏ (-), Đặt lại (100%), Mở rộng toàn màn hình (Expand Canvas), và cử chỉ kéo rê / chạm vuốt (Touch Drag) mượt mà trên điện thoại.

---

### E. Supabase & Cơ Sở Dữ Liệu
- [x] Cấu hình file `.env` kết nối máy chủ Supabase.
- [x] File schema cơ sở dữ liệu `supabase_schema.sql` với các bảng: `profiles`, `classes`, `class_members`, `learning_materials`, `assignments`, `student_progress`.
- [x] Chính sách phân quyền cấp hàng (Row Level Security - RLS) bảo vệ dữ liệu ở tầng cơ sở dữ liệu.
- [x] Tuyệt đối không sử dụng `service_role` key trên frontend.
- [x] Cơ chế lưu trữ offline / cache thông minh (`localStorage`) tự động đồng bộ khi có mạng, đảm bảo không gián đoạn tiết học.

---

## 🔑 2. Tài Khoản Kiểm Thử Hệ Thống (Test Accounts)

### 1. Học sinh (Student):
- Bấm **"Student Login"** ở góc phải trên.
- Chọn Lớp: **Class 3.2 (Khối 3)** hoặc **Class 1.1 (Khối 1)**.
- Chọn Học sinh: Ví dụ **Bảo Nam** hoặc **Ánh Dương**.
- Nhập PIN: **`1234`**
- *Thử nghiệm bảo mật*: Nhập sai 5 lần để kiểm tra cơ chế khóa tài khoản 60 giây.

### 2. Giáo viên (Teacher):
- Kéo xuống chân trang (Footer), bấm vào liên kết **"Staff Portal (Giáo viên & Quản trị)"**.
- Email: **`thutrang@vietdiscovery.edu.vn`**
- Mật khẩu: **`teacher123`** (hoặc bất kỳ mật khẩu nào khi demo)
- Trải nghiệm **Teaching Studio** và thanh **Grade Experience Preview Bar**.

### 3. Quản trị viên (Admin):
- Bấm vào liên kết **"Staff Portal"** ở chân trang.
- Email: **`admin@vietdiscovery.edu.vn`** (hoặc email quản trị của bạn)
- Mật khẩu: **`admin123`**
- Trải nghiệm **Admin Console**: Quản lý toàn bộ lớp, danh bạ học sinh, đặt lại PIN học sinh, kiểm toán học liệu.
