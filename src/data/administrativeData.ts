// Official administrative boundary and provincial reorganization reference data
// Source: Resolutions of the National Assembly & National Assembly Standing Committee (UBTVQH)
// Official Cartographic Reference: Bản đồ hành chính nước CHXHCN Việt Nam năm 2025 (BẢN ĐỒ(3).pdf)
// Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam - Bộ Tài nguyên và Môi trường

export interface AdministrativeUnitInfo {
  code: string;
  name: string;
  region: 'North' | 'Central' | 'South';
  zone: string;
  administrativeCenter: string;
  districtMergerSummary: string;
  officialSource: string;
  dateAnnounced: string;
  islandDistricts?: string[];
}

export const OFFICIAL_34_PROVINCES_DATA: AdministrativeUnitInfo[] = [
  // 1-6: CENTRALLY-RUN CITIES (6 Thành phố trực thuộc Trung ương)
  {
    code: 'HN',
    name: 'Thủ đô Hà Nội',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    administrativeCenter: 'Quận Hoàn Kiếm',
    districtMergerSummary: 'Thủ đô nước CHXHCN Việt Nam, trung tâm chính trị, văn hóa, giáo dục và kinh tế; hoàn thiện tổ chức bộ máy và các đô thị vệ tinh theo Nghị quyết Quốc hội.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025 & Nghị quyết Quốc hội',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'HP',
    name: 'Thành phố Hải Phòng',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    administrativeCenter: 'Quận Hồng Bàng',
    districtMergerSummary: 'Đô thị cảng biển quốc tế cửa ngõ phía Bắc; quản lý các huyện đảo tiền tiêu Bạch Long Vĩ và quần đảo Cát Bà (Cát Hải).',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Huyện đảo Bạch Long Vĩ', 'Huyện đảo Cát Hải (Quần đảo Cát Bà)']
  },
  {
    code: 'HUE',
    name: 'Thành phố Huế',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    administrativeCenter: 'Quận Trung tâm Huế',
    districtMergerSummary: 'Thành phố trực thuộc Trung ương theo Nghị quyết Quốc hội khóa XV; đô thị di sản văn hóa thế giới và cảnh quan đôi bờ sông Hương.',
    officialSource: 'Nghị quyết Quốc hội khóa XV về thành lập TP. Huế trực thuộc TW & Bản đồ 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'DN',
    name: 'Thành phố Đà Nẵng',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    administrativeCenter: 'Quận Hải Châu',
    districtMergerSummary: 'Trung tâm kinh tế biển, logistics và đổi mới sáng tạo miền Trung; khẳng định và thực thi chủ quyền toàn vẹn đối với Huyện đảo Hoàng Sa và Cù Lao Chàm.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Huyện đảo Hoàng Sa (Quần đảo Hoàng Sa, VN)', 'Cù Lao Chàm']
  },
  {
    code: 'HCM',
    name: 'Thành phố Hồ Chí Minh',
    region: 'South',
    zone: 'Đông Nam Bộ',
    administrativeCenter: 'Quận 1',
    districtMergerSummary: 'Đô thị đặc biệt, trung tâm kinh tế, tài chính, khoa học công nghệ lớn nhất cả nước; theo bản đồ hành chính 2025 quản lý Quần đảo Côn Sơn (Côn Đảo).',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Quần đảo Côn Sơn (Côn Đảo - TP. Hồ Chí Minh)']
  },
  {
    code: 'CT',
    name: 'Thành phố Cần Thơ',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    administrativeCenter: 'Quận Ninh Kiều',
    districtMergerSummary: 'Đô thị hạt nhân trung tâm kinh tế, văn hóa, giáo dục và đầu mối liên kết sản xuất nông thủy sản toàn vùng Đồng bằng Sông Cửu Long.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },

  // 7-20: 14 TỈNH MIỀN BẮC (Vùng Trung du, Miền núi & Đồng bằng Bắc Bộ)
  {
    code: 'LC',
    name: 'Tỉnh Lai Châu',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    administrativeCenter: 'TP. Lai Châu',
    districtMergerSummary: 'Tỉnh biên giới Tây Bắc có vị trí quốc phòng chiến lược; địa hình núi cao với đỉnh Pu Si Lung và sông Đà.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'DB',
    name: 'Tỉnh Điện Biên',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    administrativeCenter: 'TP. Điện Biên Phủ',
    districtMergerSummary: 'Địa bàn ngã ba biên giới Việt - Lào - Trung (A Pa Chải); quần thể di tích Chiến thắng lịch sử Điện Biên Phủ.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'SL',
    name: 'Tỉnh Sơn La',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    administrativeCenter: 'TP. Sơn La',
    districtMergerSummary: 'Vùng cao nguyên Mộc Châu - Nà Sản, hệ thống thủy điện Hòa Bình - Sơn La trên lưu vực sông Đà.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'LCA',
    name: 'Tỉnh Lào Cai',
    region: 'North',
    zone: 'Tây Bắc Bộ',
    administrativeCenter: 'TP. Lào Cai',
    districtMergerSummary: 'Địa bàn có đỉnh Fansipan 3.143m (nóc nhà Đông Dương), khu du lịch quốc gia Sa Pa và cửa khẩu quốc tế đường sắt, đường bộ.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'TQ',
    name: 'Tỉnh Tuyên Quang',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    administrativeCenter: 'TP. Tuyên Quang',
    districtMergerSummary: 'Thủ đô Khu giải phóng, Thủ đô Kháng chiến; liên kết không gian phát triển cao nguyên đá và hồ thủy điện Na Hang.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'PT',
    name: 'Tỉnh Phú Thọ',
    region: 'North',
    zone: 'Trung du và Miền núi phía Bắc',
    administrativeCenter: 'TP. Việt Trì',
    districtMergerSummary: 'Đất Tổ Hùng Vương, cội nguồn dân tộc Việt Nam với Di tích lịch sử Đền Hùng và di sản Hát Xoan.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'CB',
    name: 'Tỉnh Cao Bằng',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    administrativeCenter: 'TP. Cao Bằng',
    districtMergerSummary: 'Địa bàn cội nguồn cách mạng Pác Bó, danh thắng thác Bản Giốc và Công viên địa chất toàn cầu UNESCO Non nước Cao Bằng.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'LS',
    name: 'Tỉnh Lạng Sơn',
    region: 'North',
    zone: 'Đông Bắc Bộ',
    administrativeCenter: 'TP. Lạng Sơn',
    districtMergerSummary: 'Cửa ngõ mậu dịch đường bộ quốc tế với các cửa khẩu quốc tế Hữu Nghị, Đồng Đăng, Chi Ma; Ải Chi Lăng lịch sử.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'TN',
    name: 'Tỉnh Thái Nguyên',
    region: 'North',
    zone: 'Trung du và Miền núi phía Bắc',
    administrativeCenter: 'TP. Thái Nguyên',
    districtMergerSummary: 'Trung tâm công nghiệp, giáo dục đại học vùng Đông Bắc; gắn với vùng chè đặc sản Tân Cương và hồ Núi Cốc.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'BN',
    name: 'Tỉnh Bắc Ninh',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    administrativeCenter: 'TP. Bắc Ninh',
    districtMergerSummary: 'Trung tâm công nghiệp điện tử công nghệ cao, quê hương Quan họ và vùng văn hóa Kinh Bắc giàu truyền thống.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'HY',
    name: 'Tỉnh Hưng Yên',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    administrativeCenter: 'TP. Hưng Yên',
    districtMergerSummary: 'Vùng châu thổ trù phú ven sông Hồng; phát triển chuỗi đô thị - công nghiệp liên kết vành đai kinh tế Thủ đô.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'NB',
    name: 'Tỉnh Ninh Bình',
    region: 'North',
    zone: 'Đồng bằng Sông Hồng',
    administrativeCenter: 'TP. Ninh Bình',
    districtMergerSummary: 'Quần thể Di sản Văn hóa và Thiên nhiên thế giới Tràng An, Cố đô Hoa Lư - Đô thị di sản thiên niên kỷ đầu tiên.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'QN',
    name: 'Tỉnh Quảng Ninh',
    region: 'North',
    zone: 'Vùng Đông Bắc Bộ',
    administrativeCenter: 'TP. Hạ Long',
    districtMergerSummary: 'Địa bàn có Di sản thiên nhiên thế giới Vịnh Hạ Long, Vịnh Bái Tử Long, Quần đảo Cô Tô và trung tâm khai thác than, công nghiệp cảng biển.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Huyện đảo Cô Tô', 'Huyện đảo Vân Đồn']
  },
  {
    code: 'TH',
    name: 'Tỉnh Thanh Hóa',
    region: 'North',
    zone: 'Bắc Trung Bộ',
    administrativeCenter: 'TP. Thanh Hóa',
    districtMergerSummary: 'Tỉnh cửa ngõ nối liền Bắc Bộ và Trung Bộ; quy mô diện tích và dân số lớn với Di sản văn hóa Thành Nhà Hồ và bãi biển Sầm Sơn.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Hòn Mê']
  },

  // 21-28: 8 TỈNH MIỀN TRUNG & TÂY NGUYÊN
  {
    code: 'NA',
    name: 'Tỉnh Nghệ An',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    administrativeCenter: 'TP. Vinh',
    districtMergerSummary: 'Tỉnh có diện tích tự nhiên lớn nhất cả nước; quê hương Chủ tịch Hồ Chí Minh (Nam Đàn) và đô thị biển Vinh - Cửa Lò.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Hòn Mắt']
  },
  {
    code: 'HT',
    name: 'Tỉnh Hà Tĩnh',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    administrativeCenter: 'TP. Hà Tĩnh',
    districtMergerSummary: 'Địa bàn Khu kinh tế Vũng Áng ven biển; quê hương Đại thi hào Nguyễn Du và di tích Ngã ba Đồng Lộc anh hùng.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'QT',
    name: 'Tỉnh Quảng Trị',
    region: 'Central',
    zone: 'Bắc Trung Bộ',
    administrativeCenter: 'TP. Đông Hà',
    districtMergerSummary: 'Vùng đất lịch sử anh hùng nối liền Quảng Bình - Quảng Trị; Vườn quốc gia Phong Nha - Kẻ Bàng và Huyện đảo Cồn Cỏ.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Huyện đảo Cồn Cỏ', 'Hòn Gió']
  },
  {
    code: 'QNG',
    name: 'Tỉnh Quảng Ngãi',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    administrativeCenter: 'TP. Quảng Ngãi',
    districtMergerSummary: 'Không gian kinh tế biển Dung Quất - Sa Huỳnh; quản lý và phát triển bền vững Huyện đảo tiền tiêu Lý Sơn.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Huyện đảo Lý Sơn']
  },
  {
    code: 'GL',
    name: 'Tỉnh Gia Lai',
    region: 'Central',
    zone: 'Tây Nguyên',
    administrativeCenter: 'TP. Pleiku',
    districtMergerSummary: 'Trung tâm cao nguyên Bắc Tây Nguyên; không gian Di sản Không gian văn hóa Cồng chiêng Tây Nguyên và Biển Hồ T\'Nưng.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'DL',
    name: 'Tỉnh Đắk Lắk',
    region: 'Central',
    zone: 'Tây Nguyên',
    administrativeCenter: 'TP. Buôn Ma Thuột',
    districtMergerSummary: 'Thủ phủ cà phê của Việt Nam, vùng đất voi Buôn Đôn và hệ thống sông Sêrêpôk huyền thoại.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'KH',
    name: 'Tỉnh Khánh Hòa',
    region: 'Central',
    zone: 'Duyên hải Nam Trung Bộ',
    administrativeCenter: 'TP. Nha Trang',
    districtMergerSummary: 'Trung tâm dịch vụ du lịch biển tầm cỡ quốc tế với các vịnh Nha Trang, Vân Phong, Cam Ranh; thực thi chủ quyền toàn vẹn đối với Huyện đảo Trường Sa.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Huyện đảo Trường Sa (Quần đảo Trường Sa, VN)']
  },
  {
    code: 'LD',
    name: 'Tỉnh Lâm Đồng',
    region: 'Central',
    zone: 'Nam Tây Nguyên & Duyên hải',
    administrativeCenter: 'TP. Đà Lạt',
    districtMergerSummary: 'Thành phố Festival hoa Đà Lạt trên cao nguyên Lang Biang; theo bản đồ hành chính 2025 kết nối dải ven biển và quản lý Đảo Phú Quý.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Huyện đảo Phú Quý (Đ. Phú Quý)']
  },

  // 29-34: 6 TỈNH MIỀN NAM (Đông Nam Bộ & Đồng bằng Sông Cửu Long)
  {
    code: 'DNA',
    name: 'Tỉnh Đồng Nai',
    region: 'South',
    zone: 'Đông Nam Bộ',
    administrativeCenter: 'TP. Biên Hòa',
    districtMergerSummary: 'Cửa ngõ công nghiệp và logistics lớn của vùng Đông Nam Bộ; trung tâm hàng không quốc tế Cảng hàng không Long Thành và Vườn quốc gia Cát Tiên.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'TN',
    name: 'Tỉnh Tây Ninh',
    region: 'South',
    zone: 'Đông Nam Bộ',
    administrativeCenter: 'TP. Tây Ninh',
    districtMergerSummary: 'Trung tâm kinh tế cửa khẩu biên giới Tây Nam (Mộc Bài, Xa Mát); địa danh Núi Bà Đen cao nhất Nam Bộ và hồ thủy lợi Dầu Tiếng.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'DT',
    name: 'Tỉnh Đồng Tháp',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    administrativeCenter: 'TP. Cao Lãnh',
    districtMergerSummary: 'Vùng Đồng Tháp Mười trù phú, xứ sở sen hồng; bảo tồn Vườn quốc gia Tràm Chim và miệt vườn hoa kiểng Sa Đéc.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'VL',
    name: 'Tỉnh Vĩnh Long',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    administrativeCenter: 'TP. Vĩnh Long',
    districtMergerSummary: 'Nằm giữa hai dòng sông Tiền và sông Hậu; mạng lưới sông rạch chằng chịt, cù lao cây trái xanh tốt quanh năm.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025'
  },
  {
    code: 'AG',
    name: 'Tỉnh An Giang',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    administrativeCenter: 'TP. Long Xuyên',
    districtMergerSummary: 'Vùng đầu nguồn sông Cửu Long gắn với dãy Thất Sơn (Bảy Núi); theo bản đồ 2025 kết nối bờ biển Tây Nam, quản lý TP. đảo Phú Quốc và Quần đảo Thổ Chu.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['TP. Phú Quốc (Đảo Phú Quốc)', 'Quần đảo Thổ Chu', 'Quần đảo Nam Du', 'Quần đảo An Thới']
  },
  {
    code: 'CM',
    name: 'Tỉnh Cà Mau',
    region: 'South',
    zone: 'Đồng bằng Sông Cửu Long',
    administrativeCenter: 'TP. Cà Mau',
    districtMergerSummary: 'Địa đầu cực Nam của Tổ quốc với Mũi Cà Mau (vĩ độ 8°37\'B), hệ sinh thái rừng ngập mặn Vườn quốc gia Mũi Cà Mau, Hòn Khoai và Hòn Đá Lẻ.',
    officialSource: 'Bản đồ Hành chính Nước CHXHCN Việt Nam năm 2025',
    dateAnnounced: 'Năm 2025',
    islandDistricts: ['Cụm đảo Hòn Khoai', 'Hòn Chuối', 'Hòn Đá Lẻ (Mốc cơ sở A2)']
  }
];

export const OFFICIAL_PROVINCE_REORGANIZATION_INFO = OFFICIAL_34_PROVINCES_DATA;

export const MAP_METADATA = {
  authority: 'Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam - Bộ Tài nguyên và Môi trường',
  sourceAgency: 'Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam - Bộ Tài nguyên và Môi trường',
  documentTitle: 'Bản đồ hành chính nước Cộng hòa xã hội chủ nghĩa Việt Nam (2025)',
  scale: '1 : 9.000.000 (1 cm trên bản đồ bằng 90km ngoài thực địa)',
  coordinateSystem: 'WGS84 GIS (Hệ tọa độ quốc gia VN-2000 & WGS84)',
  territoryStatement: 'Khẳng định chủ quyền toàn vẹn và bất khả xâm phạm của Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam đối với đất liền, vùng trời, vùng biển, Quần đảo Hoàng Sa (TP. Đà Nẵng) và Quần đảo Trường Sa (Tỉnh Khánh Hòa).',
  year: 2025
};
