import type { ResultRule } from "../types/quiz";

export const resultRules: ResultRule[] = [
  {
    attribute: "ĐP",
    color: {
      primary: "#ff4f8b",
      border: "#ff8ab3",
      soft: "rgba(255,79,139,0.16)",
      text: "#ffd1df",
    },
    title: "TAY ĐUA ĐỘT PHÁ",
    wording:
      "Với tư duy tự động hóa, bạn không chọn cách tiết kiệm thủ công, mà bứt phá tiến độ bằng cách nâng cấp hệ thống và sức mạnh của tự động hóa!",
    description:
      "Bạn có xu hướng tận dụng công nghệ, AI và các cách làm mới để bứt tốc. Khi gặp lãng phí, bạn thường tìm công cụ hoặc giải pháp hiện đại để thay đổi cách vận hành nhanh hơn.",
    strengths: [
      "Nhanh nhạy với công nghệ mới",
      "Thích thử nghiệm giải pháp khác biệt",
      "Có tinh thần bứt tốc mạnh",
      "Cặp đôi đồng điệu: Tay Đua Linh Hoạt",
    ],
    weaknesses: [
      "Cặp đôi bứt tốc bù trừ: Tay Đua Kỷ Luật",
      "Nên kiểm chứng hiệu quả trước khi mở rộng giải pháp mới.",
    ],
  },
  {
    attribute: "KL",
    color: {
      primary: "#ffbf19",
      border: "#ffe081",
      soft: "rgba(255,191,25,0.16)",
      text: "#ffefb5",
    },
    title: "TAY ĐUA KỶ LUẬT",
    wording: "Sự chuẩn xác và tinh tế của bạn chính là bệ phóng giúp đội nhà vận hành mượt mà.",
    description:
      "Bạn ưu tiên sự chuẩn xác, quy trình và kiểm soát chất lượng. Khi xử lý công việc, bạn muốn mọi thứ rõ ràng, có dấu vết, có tiêu chuẩn và ít sai sót nhất.",
    strengths: [
      "Cẩn thận và đáng tin cậy",
      "Giữ chuẩn quy trình tốt",
      "Mạnh về kiểm tra và đối chiếu",
      "Cặp đôi đồng điệu: Tay Đua Tinh Gọn",
    ],
    weaknesses: [
      "Cặp đôi bứt tốc bù trừ: Tay Đua Đột Phá",
      "Nên mở thêm không gian cho thử nghiệm nhanh khi tình huống cần tốc độ.",
    ],
  },
  {
    attribute: "LH",
    color: {
      primary: "#42df7a",
      border: "#8ff0b0",
      soft: "rgba(66,223,122,0.16)",
      text: "#c4ffd5",
    },
    title: "TAY ĐUA LINH HOẠT",
    wording:
      "Với sự thấu cảm chuẩn Omotenashi, bạn gỡ bỏ mọi rào cản giao tiếp và quy trình rườm rà. Bạn không chỉ chạy đua, bạn còn mang lại trải nghiệm phối hợp đỉnh cao cho mọi người!",
    description:
      "Bạn đặt con người và bối cảnh thực tế vào trung tâm. Bạn giỏi lắng nghe, thích ứng và tìm cách xử lý mềm dẻo để công việc trôi chảy hơn.",
    strengths: [
      "Thấu hiểu nhu cầu của người khác",
      "Ứng biến tốt trong tình huống thay đổi",
      "Giỏi kết nối và điều chỉnh theo bối cảnh",
      "Cặp đôi đồng điệu: Tay Đua Đột Phá",
    ],
    weaknesses: [
      "Cặp đôi bứt tốc bù trừ: Tay Đua Tinh Gọn",
      "Nên chốt lại nguyên tắc vận hành để sự linh hoạt không trở thành thiếu nhất quán.",
    ],
  },
  {
    attribute: "TG",
    color: {
      primary: "#57c7ff",
      border: "#9be0ff",
      soft: "rgba(87,199,255,0.16)",
      text: "#d5f3ff",
    },
    title: "TAY ĐUA TINH GỌN",
    wording:
      "Nói không với những quy trình cồng kềnh và chi phí thừa, bạn luôn biết cách bóc tách những điều phức tạp để giúp bộ máy vận hành nhẹ nhàng và hiệu quả nhất!",
    description:
      "Bạn có xu hướng loại bỏ phần rườm rà, tối ưu luồng xử lý và hướng tới cách làm bền vững. Với bạn, ít hơn nhưng đúng trọng tâm chính là tốc độ.",
    strengths: [
      "Tư duy tối ưu và tiết kiệm tài nguyên",
      "Biết lược bỏ bước không tạo giá trị",
      "Mạnh về hệ thống hóa và tinh giản",
      "Cặp đôi đồng điệu: Tay Đua Kỷ Luật",
    ],
    weaknesses: [
      "Cặp đôi bứt tốc bù trừ: Tay Đua Linh Hoạt",
      "Nên lắng nghe thêm trải nghiệm người dùng trước khi cắt giảm một bước trong quy trình.",
    ],
  },
];
