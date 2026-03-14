export const theoryData = [
  {
    id: 'wastewater-treatment',
    category: 'Xử lý nước thải',
    topics: [
      {
        id: 'song-chan-rac',
        title: 'Song chắn rác',
        description: 'Thiết bị cơ học dùng để loại bỏ các tạp chất thô, rác có kích thước lớn trong nước thải trước khi vào các công trình xử lý tiếp theo.',
        content: 'Song chắn rác là công trình đầu tiên trong hệ thống xử lý. Nó giúp bảo vệ máy bơm và các thiết bị khác khỏi bị tắc nghẽn.',
        keyPoints: [
          'Phân loại: Song chắn rác thô và mịn.',
          'Vận tốc nước qua khe hở: 0.6 - 1.0 m/s.',
          'Góc nghiêng lắp đặt: 45 - 90 độ.'
        ],
        image: 'https://picsum.photos/seed/trash-rack/600/400'
      },
      {
        id: 'be-lang',
        title: 'Bể lắng',
        description: 'Công trình tách các hạt cặn lơ lửng ra khỏi nước thải dựa trên nguyên lý trọng lực.',
        content: 'Bể lắng được chia thành bể lắng đợt 1 (trước xử lý sinh học) và bể lắng đợt 2 (sau xử lý sinh học).',
        keyPoints: [
          'Bể lắng ngang, lắng đứng, lắng ly tâm.',
          'Thời gian lắng: 1.5 - 2.5 giờ.',
          'Hiệu suất khử cặn: 50 - 70%.'
        ],
        image: 'https://picsum.photos/seed/sedimentation/600/400'
      },
      {
        id: 'be-aerotank',
        title: 'Bể Aerotank',
        description: 'Bể phản ứng sinh học hiếu khí sử dụng bùn hoạt tính để xử lý chất hữu cơ.',
        content: 'Vi sinh vật hiếu khí sử dụng oxy hòa tan để phân hủy các chất hữu cơ hòa tan trong nước thải.',
        keyPoints: [
          'Cần cung cấp oxy liên tục.',
          'Nồng độ bùn hoạt tính (MLSS): 2000 - 5000 mg/l.',
          'Chỉ số thể tích bùn (SVI) lý tưởng: 80 - 120 ml/g.'
        ],
        image: 'https://picsum.photos/seed/aerotank/600/400'
      }
    ]
  },
  {
    id: 'solid-waste',
    category: 'Xử lý chất thải rắn',
    topics: [
      {
        id: 'phan-loai',
        title: 'Phân loại rác',
        description: 'Quá trình tách rác tại nguồn thành các nhóm có tính chất tương đồng.',
        content: 'Phân loại giúp tối ưu hóa quá trình tái chế và xử lý cuối cùng.',
        keyPoints: [
          'Rác hữu cơ, rác tái chế, rác còn lại.',
          'Giảm chi phí xử lý.',
          'Bảo vệ môi trường.'
        ],
        image: 'https://picsum.photos/seed/waste-sorting/600/400'
      },
      {
        id: 'u-compost',
        title: 'Ủ Compost',
        description: 'Quá trình phân hủy sinh học chất thải hữu cơ trong điều kiện kiểm soát.',
        content: 'Sản phẩm cuối cùng là phân bón hữu cơ giàu dinh dưỡng cho cây trồng.',
        keyPoints: [
          'Tỷ lệ C/N lý tưởng: 25:1 - 30:1.',
          'Độ ẩm: 50 - 60%.',
          'Nhiệt độ: 55 - 65 độ C để diệt mầm bệnh.'
        ],
        image: 'https://picsum.photos/seed/compost/600/400'
      }
    ]
  },
  {
    id: 'air-emission',
    category: 'Xử lý khí thải',
    topics: [
      {
        id: 'cyclone',
        title: 'Thiết bị Cyclone',
        description: 'Thiết bị tách bụi dựa trên lực ly tâm.',
        content: 'Dòng khí chứa bụi đi vào theo phương tiếp tuyến, tạo xoáy lốc đẩy bụi văng vào thành và rơi xuống phễu.',
        keyPoints: [
          'Xử lý bụi thô (kích thước > 5-10 micromet).',
          'Cấu tạo đơn giản, chi phí thấp.',
          'Hiệu suất giảm khi kích thước bụi nhỏ.'
        ],
        image: 'https://picsum.photos/seed/cyclone/600/400'
      }
    ]
  }
];

export const quizData = [
  {
    question: 'Bể Aerotank thuộc loại xử lý nào?',
    options: ['Vật lý', 'Hóa học', 'Sinh học', 'Cơ học'],
    answer: 'Sinh học'
  },
  {
    question: 'Tỷ lệ C/N tối ưu cho quá trình ủ compost là bao nhiêu?',
    options: ['10:1', '30:1', '50:1', '100:1'],
    answer: '30:1'
  },
  {
    question: 'Thiết bị Cyclone dùng để xử lý loại ô nhiễm nào?',
    options: ['Nước thải', 'Bụi trong khí thải', 'Rác thải nguy hại', 'Tiếng ồn'],
    answer: 'Bụi trong khí thải'
  },
  {
    question: 'Bể lắng đợt 1 thường có hiệu suất khử cặn lơ lửng khoảng bao nhiêu?',
    options: ['10-20%', '50-70%', '90-100%', '0%'],
    answer: '50-70%'
  },
  {
    question: 'Vi sinh vật trong bể UASB hoạt động trong điều kiện nào?',
    options: ['Hiếu khí', 'Kỵ khí', 'Thiếu khí', 'Tất cả đều sai'],
    answer: 'Kỵ khí'
  }
];
