export const lessons = [
  {
    id: 'nuoc-thai',
    title: 'Xử lý Nước thải',
    category: 'Wastewater',
    topics: [
      {
        id: 'song-chan-rac',
        name: 'Song chắn rác',
        description: 'Loại bỏ các tạp chất thô, rác có kích thước lớn để bảo vệ máy bơm và các thiết bị phía sau.',
        content: 'Song chắn rác là công trình đầu tiên trong hệ thống xử lý. Nó giúp ngăn chặn các loại rác như túi nilon, cành cây, giẻ lau... tránh làm tắc nghẽn đường ống và hỏng cánh bơm.',
        memo: 'Kích thước khe hở thường từ 10-50mm (thô) hoặc <10mm (mịn).',
        image: 'https://picsum.photos/seed/wastewater1/800/400'
      },
      {
        id: 'be-lang',
        name: 'Bể lắng',
        description: 'Tách các hạt cặn lơ lửng ra khỏi nước nhờ trọng lực.',
        content: 'Bể lắng được chia thành bể lắng đợt 1 (trước xử lý sinh học) và bể lắng đợt 2 (sau xử lý sinh học để tách bùn hoạt tính).',
        memo: 'Vận tốc dòng chảy thấp là yếu tố then chốt để lắng hiệu quả.',
        image: 'https://picsum.photos/seed/wastewater2/800/400'
      },
      {
        id: 'be-aerotank',
        name: 'Bể Aerotank',
        description: 'Xử lý sinh học hiếu khí bằng bùn hoạt tính.',
        content: 'Vi sinh vật hiếu khí sử dụng oxy hòa tan để phân hủy các chất hữu cơ hòa tan trong nước thải.',
        memo: 'Cần cung cấp oxy liên tục và duy trì nồng độ bùn (MLSS) phù hợp.',
        image: 'https://picsum.photos/seed/wastewater3/800/400'
      },
      {
        id: 'be-uasb',
        name: 'Bể UASB',
        description: 'Xử lý sinh học kỵ khí dòng chảy ngược qua lớp bùn.',
        content: 'Thích hợp cho nước thải có nồng độ hữu cơ (COD) cao. Quá trình này tạo ra khí biogas (CH4).',
        memo: 'Ưu điểm: Ít bùn dư, tạo năng lượng. Nhược điểm: Nhạy cảm với nhiệt độ và pH.',
        image: 'https://picsum.photos/seed/wastewater4/800/400'
      },
      {
        id: 'khu-trung',
        name: 'Khử trùng',
        description: 'Tiêu diệt vi khuẩn, virus gây bệnh trước khi xả ra nguồn tiếp nhận.',
        content: 'Thường sử dụng Clo, Ozone hoặc tia UV để phá hủy cấu trúc tế bào của vi sinh vật gây hại.',
        memo: 'Clo là phương pháp phổ biến nhất nhưng cần kiểm soát dư lượng.',
        image: 'https://picsum.photos/seed/wastewater5/800/400'
      }
    ]
  },
  {
    id: 'chat-thai-ran',
    title: 'Xử lý Chất thải rắn',
    category: 'Solid Waste',
    topics: [
      {
        id: 'phan-loai-rac',
        name: 'Phân loại rác',
        description: 'Chia rác thành các nhóm: hữu cơ, tái chế và còn lại.',
        content: 'Phân loại tại nguồn là bước quan trọng nhất để tăng hiệu quả tái chế và giảm chi phí xử lý.',
        memo: 'Rác hữu cơ chiếm tỷ lệ lớn nhất trong rác thải sinh hoạt Việt Nam.',
        image: 'https://picsum.photos/seed/solid1/800/400'
      },
      {
        id: 'chon-lap',
        name: 'Chôn lấp hợp vệ sinh',
        description: 'Đưa rác vào các ô chôn lấp có lớp lót chống thấm và hệ thống thu gom nước rỉ rác.',
        content: 'Phương pháp truyền thống nhưng cần quỹ đất lớn và quản lý chặt chẽ nước rỉ rác (leachate).',
        memo: 'Phải có hệ thống thu gom khí gas để tránh cháy nổ.',
        image: 'https://picsum.photos/seed/solid2/800/400'
      },
      {
        id: 'u-compost',
        name: 'Ủ Compost',
        description: 'Phân hủy sinh học rác hữu cơ để tạo phân bón.',
        content: 'Quá trình hiếu khí giúp biến đổi chất hữu cơ thành mùn ổn định, giàu dinh dưỡng cho cây trồng.',
        memo: 'Cần kiểm soát độ ẩm (50-60%) và tỷ lệ C/N.',
        image: 'https://picsum.photos/seed/solid3/800/400'
      },
      {
        id: 'dot-rac',
        name: 'Đốt rác',
        description: 'Oxy hóa chất thải ở nhiệt độ cao để giảm thể tích và thu hồi năng lượng.',
        content: 'Công nghệ hiện đại (Waste-to-Energy) giúp giảm đến 90% thể tích rác và tạo ra điện năng.',
        memo: 'Cần hệ thống xử lý khí thải cực kỳ nghiêm ngặt (Dioxin/Furan).',
        image: 'https://picsum.photos/seed/solid4/800/400'
      }
    ]
  },
  {
    id: 'khi-thai',
    title: 'Xử lý Khí thải',
    category: 'Air Emission',
    topics: [
      {
        id: 'cyclone',
        name: 'Cyclone',
        description: 'Sử dụng lực ly tâm để tách bụi ra khỏi dòng khí.',
        content: 'Khí đi vào theo phương tiếp tuyến tạo dòng xoáy, hạt bụi nặng văng ra thành và rơi xuống phễu.',
        memo: 'Hiệu quả cao với bụi thô (>10 micromet).',
        image: 'https://picsum.photos/seed/air1/800/400'
      },
      {
        id: 'thap-hap-thu',
        name: 'Tháp hấp thụ',
        description: 'Dùng chất lỏng để hòa tan các chất ô nhiễm dạng khí.',
        content: 'Thường dùng nước hoặc dung dịch hóa chất để loại bỏ SO2, NOx, HCl...',
        memo: 'Cần diện tích tiếp xúc pha khí-lỏng lớn.',
        image: 'https://picsum.photos/seed/air2/800/400'
      },
      {
        id: 'loc-bui-tui-vai',
        name: 'Lọc bụi túi vải',
        description: 'Cho khí đi qua các túi vải để giữ lại bụi mịn.',
        content: 'Một trong những thiết bị xử lý bụi hiệu quả nhất hiện nay, có thể đạt hiệu suất 99%.',
        memo: 'Cần rũ bụi định kỳ bằng khí nén hoặc rung cơ học.',
        image: 'https://picsum.photos/seed/air3/800/400'
      },
      {
        id: 'thap-rua-khi',
        name: 'Tháp rửa khí',
        description: 'Kết hợp tách bụi và hấp thụ khí độc bằng cách phun sương.',
        content: 'Khí bẩn đi ngược chiều với dòng nước phun sương, các hạt bụi bị ướt và lắng xuống.',
        memo: 'Thích hợp cho khí thải có nhiệt độ cao.',
        image: 'https://picsum.photos/seed/air4/800/400'
      }
    ]
  }
];
