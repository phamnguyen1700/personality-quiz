import type { QuizQuestion } from "../types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Khi tham gia một cuộc họp, bạn ghi chép nội dung như thế nào?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Tận dụng ngay các công cụ công nghệ và AI Assistant để ghi âm, tự động chuyển lời thoại thành văn bản và trích xuất nhanh các hành động cần làm ngay sau cuộc họp." },
      { key: "B", attribute: "KL", label: "Ghi chép đầy đủ, chi tiết từng mục Agenda, số liệu báo cáo và deadline của từng người để đảm bảo tính chuẩn xác." },
      { key: "C", attribute: "LH", label: "Tập trung ghi nhận sâu sắc các ý kiến thảo luận, rào cản và tâm tư của từng thành viên." },
      { key: "D", attribute: "TG", label: "Lọc bỏ hoàn toàn các nội dung lan man, chỉ cô đọng những điểm cốt lõi (Vấn đề - Giải pháp - Người thực hiện)." },
    ],
  },
  {
    id: 2,
    question: "Bạn đang phải nhập dữ liệu vào 3 files khác nhau cho cùng một nội dung công việc. Bạn sẽ xử lý ra sao?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Nghiên cứu và ứng dụng ngay AI để liên kết dữ liệu, giúp tự động đồng bộ hóa thông tin giữa các file." },
      { key: "B", attribute: "KL", label: "Nghiêm túc thực hiện việc đối chiếu số liệu chéo giữa các nguồn, thiết lập quy trình kiểm tra chuẩn xác để đảm bảo không xảy ra bất kỳ sai sót." },
      { key: "C", attribute: "LH", label: "Lắng nghe phản hồi và thấu hiểu những khó khăn của các thành viên trong team khi thao tác, từ đó linh hoạt điều chỉnh." },
      { key: "D", attribute: "TG", label: "Đề xuất tối ưu hóa quy trình, tích hợp 3 file riêng lẻ thành một cơ sở dữ liệu duy nhất để quản lý tập trung." },
    ],
  },
  {
    id: 3,
    question: "Sếp giao làm báo cáo gấp cho cuộc họp HODs tuần tới, phản xạ đầu tiên của bạn là gì?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Bật ngay Copilot, nạp số liệu vào để hệ thống tự động lên khung báo cáo chuẩn chỉnh." },
      { key: "B", attribute: "KL", label: "Tìm Master Template chuẩn, điền số liệu chính xác." },
      { key: "C", attribute: "LH", label: "Đặt mình vào vị trí của Sếp và các HODs để thiết kế nội dung trực quan, tập trung vào trải nghiệm người đọc và các giải pháp thực tế họ quan tâm." },
      { key: "D", attribute: "TG", label: "Xây dựng báo cáo dưới dạng một trang Dashboard số tinh gọn, lược bỏ mọi chi tiết rườm rà để lưu trữ dữ liệu đồng bộ." },
    ],
  },
  {
    id: 4,
    question: "Bạn được mời tham dự một cuộc họp nội bộ mà Agenda không rõ ràng. Bạn xử lý thế nào?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Xin phép vắng mặt, đề xuất ban tổ chức dùng AI Assistant ghi âm và tóm tắt lại biên bản cuộc họp gửi cho mình đọc sau." },
      { key: "B", attribute: "KL", label: "Liên hệ người tổ chức yêu cầu làm rõ Agenda và vai trò của mình, nếu không cần thiết sẽ từ chối để tuân thủ tiến độ công việc." },
      { key: "C", attribute: "LH", label: "Vẫn vào họp đầy đủ để nắm bắt tình hình chung của các phòng ban khác." },
      { key: "D", attribute: "TG", label: "Đề xuất tối ưu hóa cuộc họp bằng cách chuyển sang thảo luận qua email." },
    ],
  },
  {
    id: 5,
    question: "Sắp tới đoàn kiểm tra chất lượng sẽ sang rà soát quy trình vận hành tại bộ phận của bạn. Bạn chuẩn bị tâm thế ra sao?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Chủ động số hóa quy trình vận hành lên các nền tảng quản trị thông minh, giúp tối ưu hóa việc đối chiếu dữ liệu." },
      { key: "B", attribute: "KL", label: "Rà soát lại toàn bộ hệ thống tài liệu, đảm bảo mọi hành động hằng ngày của team đều đã có dấu vết lưu trữ khớp 100% với tiêu chuẩn." },
      { key: "C", attribute: "LH", label: "Tổ chức một buổi họp warm-up cho team." },
      { key: "D", attribute: "TG", label: "Xem đợt rà soát là cơ hội để chuẩn hóa và tinh lọc lại bộ máy." },
    ],
  },
  {
    id: 6,
    question: "Khi gặp một Đại lý lớn, họ thắc mắc: \"Sản phẩm Panasonic có điểm gì khác biệt so với các đối thủ\". Bạn sẽ dùng góc độ nào để thuyết phục họ?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Sử dụng các công cụ AI và giải pháp công nghệ hiện đại để trực quan hóa dữ liệu." },
      { key: "B", attribute: "KL", label: "Nghiên cứu sâu, lập bảng đối chiếu chi tiết các chỉ số kỹ thuật và cam kết chất lượng nghiêm ngặt so với đối thủ cạnh tranh." },
      { key: "C", attribute: "LH", label: "Đặt góc nhìn của đối tác làm trung tâm, tìm hiểu bối cảnh kinh doanh và nhu cầu thực tế để đưa ra luận điểm thuyết phục đúng băn khoăn riêng." },
      { key: "D", attribute: "TG", label: "Nhấn mạnh vào tầm nhìn dài hạn với các giá trị tối ưu, bền vững của sản phẩm." },
    ],
  },
  {
    id: 7,
    question: "Trong quá trình phát triển một quy trình dịch vụ mới, sếp yêu cầu bạn cắt giảm 50% thời gian kiểm tra thử nghiệm để kịp tung ra thị trường trước đối thủ. Bạn đối diện với bài toán này thế nào?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Đề xuất ứng dụng các bộ công cụ giả lập kiểm tra tự động để ép tiến độ test xuống 50%." },
      { key: "B", attribute: "KL", label: "Đưa ra dẫn chứng thuyết phục giữ nguyên thời gian test để đảm bảo độ hoàn hảo." },
      { key: "C", attribute: "LH", label: "Phân tích rủi ro trải nghiệm khách hàng nếu làm vội, sau đó cùng sếp ngồi lại tìm ra một phương án thỏa hiệp." },
      { key: "D", attribute: "TG", label: "Tối ưu hóa các bước kiểm tra cồng kềnh, lược bỏ thủ tục ký tá trung gian để rút ngắn quy trình mà không cắt xén thẩm định chất lượng lõi." },
    ],
  },
  {
    id: 8,
    question: "Bộ phận của bạn cần đăng ký mua văn phòng phẩm (bút, sổ, kẹp bướm...) cho quý mới. Bạn xử lý ra sao?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Đề xuất chuyển đổi số toàn diện, khuyến khích team sử dụng các công cụ ghi chú, bảng vẽ điện tử trên iPad/Laptop." },
      { key: "B", attribute: "KL", label: "Tuân thủ nghiêm ngặt quy trình quản lý tài sản, kiểm kê và tái sử dụng triệt để các văn phòng phẩm cũ còn dùng được." },
      { key: "C", attribute: "LH", label: "Hỏi han nhu cầu của từng người trong team rồi mới đăng ký mua chung." },
      { key: "D", attribute: "TG", label: "Ưu tiên lựa chọn các loại văn phòng phẩm được làm từ vật liệu tái chế, thân thiện với môi trường để tối ưu chi phí." },
    ],
  },
  {
    id: 9,
    question: "Khi làm việc với một Khách hàng/Đối tác bên ngoài (Stakeholders), bạn mong muốn điều gì nhất?",
    answers: [
      { key: "A", attribute: "ĐP", label: "Sẵn sàng cùng đối tác thử nghiệm các giải pháp mới, phá vỡ lối mòn cũ để tạo ra những giá trị vượt trội và khác biệt." },
      { key: "B", attribute: "KL", label: "Đảm bảo tính cam kết cao trong công việc, dữ liệu thông suốt và chuẩn xác giữa các bên để luôn bàn giao đầu ra đúng tiến độ." },
      { key: "C", attribute: "LH", label: "Thấu hiểu và nhạy bén thích ứng theo nhu cầu của từng đối tác để xây dựng mối quan hệ." },
      { key: "D", attribute: "TG", label: "Xây dựng quy trình phối hợp tối giản nhằm hướng tới hợp tác bền vững và tiết kiệm tài nguyên." },
    ],
  },
  {
    id: 10,
    question: "Đồng nghiệp nhờ bạn hướng dẫn lại một quy trình sử dụng phần mềm nội bộ mà bạn đã chỉ cho họ... 3 lần trước đó. Bạn sẽ:",
    answers: [
      { key: "A", attribute: "ĐP", label: "Chủ động hướng dẫn và khuyến khích họ ứng dụng các công cụ AI Copilot/trợ lý ảo để tự động giải đáp nhanh mọi thắc mắc." },
      { key: "B", attribute: "KL", label: "Đóng gói toàn bộ quy trình chuẩn chỉnh thành một video hướng dẫn trực quan, lưu vào kho tài nguyên chung để ai cũng có thể tự đối chiếu và thực hiện đúng chuẩn." },
      { key: "C", attribute: "LH", label: "Ngồi xuống, kiên nhẫn chỉ lại từ đầu một cách tinh tế, đồng thời hỏi xem quy trình có chỗ nào khó hiểu để cùng cải tiến." },
      { key: "D", attribute: "TG", label: "Thiết kế một file One-page guide, in ra giấy một mặt và dán ngay góc làm việc chung của team." },
    ],
  },
];
