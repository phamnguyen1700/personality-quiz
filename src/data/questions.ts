import type { QuizQuestion } from '../types/quiz'

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question:
      'Sắp đến ngày diễn ra Mega Event ra mắt dòng tủ lạnh/điều hòa mới, ngân sách cho hạng mục activation bất ngờ bị cắt giảm 15%, bạn sẽ làm gì?',
    answers: [
      { key: 'A', score: 3, label: 'Ngay lập tức rà soát, cắt bớt các hạng mục phụ để đảm bảo KPI cốt lõi không bị ảnh hưởng.' },
      { key: 'B', score: 2, label: 'Đề xuất trích từ quỹ dự phòng rủi ro của campaign hoặc xin sếp linh động duyệt thêm từ budget khác.' },
      { key: 'C', score: 1, label: 'Kệ, cứ chạy theo kế hoạch cũ, thiếu đến đâu hay đến đó hoặc tính chuyện xin nợ nhà cung cấp sau.' },
    ],
  },
  {
    id: 2,
    question:
      'Sáng thứ Hai bước vào văn phòng, bạn đối mặt với combo: chuẩn bị báo cáo doanh số tuần, xử lý sự cố bảo hành từ một đại lý lớn, và duyệt thiết kế POSM mới. Bạn xử lý thế nào?',
    answers: [
      { key: 'A', score: 3, label: 'Chia khung giờ cố định cho từng việc, ưu tiên xử lý đại lý trước rồi tập trung làm report đúng giờ.' },
      { key: 'B', score: 2, label: 'Việc nào nhảy vào đầu hoặc thấy dễ, thích làm trước thì giải quyết trước, các việc khác tính sau.' },
      { key: 'C', score: 1, label: 'Cứ làm cuốn chiếu, ai hối thúc việc nào gắt hơn thì mình ưu tiên xử lý việc đó trước.' },
    ],
  },
  {
    id: 3,
    question:
      'Bạn được giao quản lý budget chạy quảng cáo hoặc làm sự kiện trưng bày cho một chuỗi siêu thị lớn, nhưng cuối tháng nghiệm thu lại bị chi vượt mức cho phép. Cảm giác của bạn là gì?',
    answers: [
      { key: 'A', score: 3, label: 'Rất lo lắng, mất ăn mất ngủ vì sợ bị Kế toán gõ và ảnh hưởng đến đánh giá hiệu suất cuối năm.' },
      { key: 'B', score: 2, label: 'Bình tĩnh rà lại checklist chi phí để giải trình với sếp, rút kinh nghiệm phân bổ cho đợt sau.' },
      { key: 'C', score: 1, label: 'Coi như bài học trải nghiệm, tiền chi để đẩy sales thì có gì phải tiếc, tháng sau cày bù là được.' },
    ],
  },
  {
    id: 4,
    question:
      'Công ty thưởng cho bạn một voucher mua sắm sản phẩm điện máy cao cấp trị giá 15 triệu đồng nhân dịp đạt Target. Bạn sẽ sử dụng nó thế nào?',
    answers: [
      { key: 'A', score: 3, label: 'Để dành mua món đồ gia dụng thực sự cần thiết, hoặc sang tay lại cho người quen lấy tiền mặt tích lũy.' },
      { key: 'B', score: 2, label: 'Đổi ngay một món đồ công nghệ/gia dụng bản thân thích từ lâu nhưng chưa dám mua để tự thưởng.' },
      { key: 'C', score: 1, label: 'Mang tặng ngay cho người thân hoặc mua món đồ đắt đỏ nhất có thể để đập hộp cho hoành tráng.' },
    ],
  },
  {
    id: 5,
    question:
      'Bạn được cử đi công tác 3 ngày ở tỉnh để khảo sát thị trường và làm việc với các trung tâm điện máy đối tác. Bạn lên lịch trình như thế nào?',
    answers: [
      { key: 'A', score: 3, label: 'Lên danh sách chi tiết từng đại lý, đặt lịch hẹn trước với quản lý chuỗi và chốt chi phí công tác phí chuẩn chỉnh.' },
      { key: 'B', score: 2, label: 'Chỉ lên danh sách các đối tác lớn nhất cần gặp, thời gian còn lại tùy cơ ứng biến và tự do khảo sát thêm.' },
      { key: 'C', score: 1, label: 'Tới nơi rồi tính, đến đại lý nào tiện đường thì vào, kết hợp công tác với trải nghiệm đặc sản địa phương.' },
    ],
  },
  {
    id: 6,
    question:
      'Quy trình duyệt chi phí hỗ trợ trưng bày cho đại lý yêu cầu nhiều chứng từ, hóa đơn, hình ảnh nghiệm thu. Bạn đối phó với việc này ra sao?',
    answers: [
      { key: 'A', score: 3, label: 'Lưu trữ file cực kỳ khoa học, gom đủ hóa đơn chứng từ ngay sau mỗi đợt, Kế toán hỏi là có ngay.' },
      { key: 'B', score: 2, label: 'Thỉnh thoảng mới gom lại một lần vào cuối tháng, thiếu đâu thì chạy đi xin lại hoặc bổ sung sau.' },
      { key: 'C', score: 1, label: 'Ghét nhất mấy việc giấy tờ này, nước đến chân mới nhảy, đến hạn chốt sổ mới cuống cuồng đi tìm.' },
    ],
  },
  {
    id: 7,
    question:
      'Bạn đã lên lịch tối nay về sớm đi ăn tối với người yêu/gia đình, nhưng 5h15 chiều sếp tổng yêu cầu họp khẩn vì một dòng sản phẩm chủ lực gặp lỗi kỹ thuật hàng loạt. Bạn sẽ làm gì?',
    answers: [
      { key: 'A', score: 3, label: 'Hơi bực dọc nhưng vẫn ở lại họp, hủy hẹn ngay vì công việc khẩn cấp là trên hết.' },
      { key: 'B', score: 2, label: 'Cân nhắc mức độ nghiêm trọng, ở lại họp khoảng 30 phút rồi xin phép về trước, tối check mail tiếp.' },
      { key: 'C', score: 1, label: 'Xin phép sếp vắng mặt vì có việc bận không thể hủy, cam kết sáng mai cập nhật biên bản và xử lý ngay.' },
    ],
  },
  {
    id: 8,
    question: 'Đối với bạn, một ngày làm việc bùng nổ tại một tập đoàn điện máy là như thế nào?',
    answers: [
      { key: 'A', score: 3, label: 'Giải quyết gọn mọi giấy tờ, hợp đồng, báo cáo, đúng giờ tắt máy ra về không vướng bận.' },
      { key: 'B', score: 2, label: 'Chạy ngoài thị trường, xử lý xong một ca khiếu nại khó nhằn và chốt được deal lớn.' },
      { key: 'C', score: 1, label: 'Đi làm thoải mái, không bị KPI đè nặng, không khí phòng ban vui vẻ, hài hước là đủ.' },
    ],
  },
  {
    id: 9,
    question: 'Khi nghe tin phòng ban khác vừa được duyệt một campaign marketing siêu khủng với mức budget cực lớn, bạn nghĩ gì?',
    answers: [
      { key: 'A', score: 3, label: 'Tính toán ngay xem với budget đó họ phải mang về bao nhiêu doanh số và ROI có hiệu quả không.' },
      { key: 'B', score: 2, label: 'Thấy ngưỡng mộ, coi đó là động lực để phòng ban mình làm đề xuất tốt hơn cho đợt tung hàng tiếp theo.' },
      { key: 'C', score: 1, label: 'Không quan tâm lắm, việc ai người nấy làm, budget lớn thì áp lực lớn chứ báu bở gì.' },
    ],
  },
  {
    id: 10,
    question:
      'Công ty có đợt thanh lý nội bộ các dòng sản phẩm trưng bày như tivi, loa, máy giặt với giá giảm đến 50%. Bạn phản ứng thế nào?',
    answers: [
      { key: 'A', score: 3, label: 'Chỉ mua nếu nhà đang thực sự thiếu, và phải so sánh giá kỹ xem dòng này có lỗi thời hay tốn điện không.' },
      { key: 'B', score: 2, label: 'Trích một khoản quỹ cá nhân để mua ngay một món đồ nâng cấp phòng khách vì cơ hội này hiếm khi có.' },
      { key: 'C', score: 1, label: 'Rủ cả phòng cùng mua, quẹt thẻ chốt đơn liền tay mấy món độc lạ về trải nghiệm trước, tính năng tính sau.' },
    ],
  },
]
