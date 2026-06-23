import type { ResultRule } from '../types/quiz'

export const resultRules: ResultRule[] = [
  {
    minScore: 24,
    maxScore: 30,
    title: 'Chiến Thần Kế Hoạch - Khắc Tinh Của Kế Toán',
    description:
      'Đây là người sống bằng quy trình và KPI. Thẻ kho, giấy tờ, hóa đơn trưng bày luôn chuẩn chỉnh đến từng đồng. Họ là chỗ dựa vững chắc cho team mỗi khi có audit hay chạy event lớn vì tính cẩn trọng, không bao giờ để xảy ra rủi ro cháy budget hay trễ deadline ra mắt sản phẩm.',
    strengths: ['Đáng tin cậy', 'Chuẩn xác', 'Không bao giờ trễ deadline', 'Quản lý ngân sách rất chắc tay'],
    weaknesses: ['Đôi khi quá cứng nhắc', 'Dễ căng thẳng nếu mọi thứ không đi đúng quỹ đạo'],
  },
  {
    minScore: 17,
    maxScore: 23,
    title: 'Chuyên Gia Cân Bằng - Ngoại Giao Thị Trường',
    description:
      'Kiểu nhân viên biết co biết duỗi. Họ vừa làm tốt việc văn phòng, vừa khéo léo khi đi thị trường. Biết cách chi tiêu budget hiệu quả nhưng không quá keo kiệt với đại lý. Họ xử lý khủng hoảng tốt nhờ tính linh hoạt, không bị rập khuôn bởi sổ sách.',
    strengths: ['Thích nghi tốt', 'Tâm lý thoải mái', 'Làm việc có kế hoạch', 'Linh hoạt khi xử lý tình huống'],
    weaknesses: ['Đôi khi dễ bị ba phải', 'Có thể thiếu quyết đoán trong tình huống cần bứt phá'],
  },
  {
    minScore: 10,
    maxScore: 16,
    title: 'Đại Sứ YOLO - Nghệ Sĩ Bán Hàng',
    description:
      'Làm việc thuần bằng cảm hứng và sự sáng tạo. Đây là những người cực kỳ hợp với các buổi brainstorming nghĩ ý tưởng làm campaign tung hàng độc lạ hoặc làm MC cho các buổi activation. Điểm yếu là rất sợ nhìn thấy hóa đơn, chứng từ thanh toán và thường xuyên bị phòng Kế toán truy nã vì nộp trễ nghiệm thu.',
    strengths: ['Sáng tạo', 'Lạc quan', 'Mang lại năng lượng tích cực', 'Phóng khoáng với mọi người'],
    weaknesses: ['Dễ nước đến chân mới nhảy', 'Dễ vung tay quá trán khi quản lý tiền bạc và thời gian'],
  },
]
