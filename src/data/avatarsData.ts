export interface AvatarItem {
  id: string;
  name: string;
  vietnameseName: string;
  gender: 'boy' | 'girl';
  image: string;
  descriptionEn: string;
  descriptionVi: string;
  role: string;
  motto: string;
  themeColor: string;
  accentBg: string;
}

export const BOY_AVATARS: AvatarItem[] = [
  {
    id: 'boy_little_explorer',
    name: 'Little Explorer',
    vietnameseName: 'Nhà Thám Hiểm Nhí',
    gender: 'boy',
    image: '/assets/avatars/boy_little_explorer.webp',
    descriptionEn: 'Braves every forest and mountain with courage, curiosity, and map in hand!',
    descriptionVi: 'Luôn sẵn sàng khám phá mọi danh lam thắng cảnh Việt Nam với lòng dũng cảm và tò mò!',
    role: 'Explorer',
    motto: "Let's explore Vietnam together!",
    themeColor: 'from-amber-400 to-orange-500',
    accentBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'boy_space_captain',
    name: 'Space Captain',
    vietnameseName: 'Đội Trưởng Không Gian',
    gender: 'boy',
    image: '/assets/avatars/boy_space_captain.webp',
    descriptionEn: 'Pilots star cruisers and charts cosmic paths across the galaxy!',
    descriptionVi: 'Chỉ huy tàu vũ trụ du hành qua các vì sao và khám phá những điều kỳ diệu!',
    role: 'Commander',
    motto: 'To infinity and beyond!',
    themeColor: 'from-blue-500 to-indigo-600',
    accentBg: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  },
  {
    id: 'boy_super_scientist',
    name: 'Super Scientist',
    vietnameseName: 'Siêu Nhà Khoa Học',
    gender: 'boy',
    image: '/assets/avatars/boy_super_scientist.webp',
    descriptionEn: 'Conducts fun experiments with bubbling potions, lab beakers, and brilliant insights!',
    descriptionVi: 'Sáng tạo những thí nghiệm khoa học thú vị và luôn tìm tòi câu trả lời mới!',
    role: 'Scientist',
    motto: 'Science is magical curiosity!',
    themeColor: 'from-emerald-400 to-teal-600',
    accentBg: 'bg-emerald-100 text-emerald-900 border-emerald-300'
  },
  {
    id: 'boy_jungle_adventurer',
    name: 'Jungle Adventurer',
    vietnameseName: 'Thám Hiểm Rừng Xanh',
    gender: 'boy',
    image: '/assets/avatars/boy_jungle_adventurer.webp',
    descriptionEn: 'Befriends wild creatures and navigates mysterious tropical rainforests!',
    descriptionVi: 'Làm bạn với các loài muông thú và vượt qua mọi thử thách giữa rừng nhiệt đới!',
    role: 'Adventurer',
    motto: 'Listen to the voice of nature!',
    themeColor: 'from-green-500 to-emerald-700',
    accentBg: 'bg-green-100 text-green-900 border-green-300'
  },
  {
    id: 'boy_football_champion',
    name: 'Football Champion',
    vietnameseName: 'Nhà Vô Địch Bóng Đá',
    gender: 'boy',
    image: '/assets/avatars/boy_football_champion.webp',
    descriptionEn: 'Scores spectacular goals and inspires great teamwork on the pitch!',
    descriptionVi: 'Tung cú sút tuyệt đẹp và thắp sáng tinh thần đồng đội trên sân cỏ!',
    role: 'Athlete',
    motto: 'Teamwork makes the dream work!',
    themeColor: 'from-red-500 to-rose-600',
    accentBg: 'bg-rose-100 text-rose-900 border-rose-300'
  },
  {
    id: 'boy_magic_wizard',
    name: 'Magic Wizard',
    vietnameseName: 'Phù Thủy Ma Thuật',
    gender: 'boy',
    image: '/assets/avatars/boy_magic_wizard.webp',
    descriptionEn: 'Casts sparkling spells of wisdom and unravels enchanting mysteries!',
    descriptionVi: 'Vung cây đũa phép lấp lánh để mang niềm vui và trí tuệ đến cho bạn bè!',
    role: 'Wizard',
    motto: 'Magic is believing in yourself!',
    themeColor: 'from-purple-500 to-violet-700',
    accentBg: 'bg-purple-100 text-purple-900 border-purple-300'
  },
  {
    id: 'boy_ocean_explorer',
    name: 'Ocean Explorer',
    vietnameseName: 'Thám Hiểm Đại Dương',
    gender: 'boy',
    image: '/assets/avatars/boy_ocean_explorer.webp',
    descriptionEn: 'Dives deep into coral reefs, swimming alongside friendly dolphins and sea turtles!',
    descriptionVi: 'Lặn sâu dưới làn nước trong xanh ngắm nhìn rạn san hô và sinh vật biển!',
    role: 'Diver',
    motto: 'Protect our blue oceans!',
    themeColor: 'from-cyan-400 to-blue-600',
    accentBg: 'bg-cyan-100 text-cyan-900 border-cyan-300'
  },
  {
    id: 'boy_dinosaur_hero',
    name: 'Dinosaur Hero',
    vietnameseName: 'Anh Hùng Khủng Long',
    gender: 'boy',
    image: '/assets/avatars/boy_dinosaur_hero.webp',
    descriptionEn: 'Unearths prehistoric fossils and bonds with mighty friendly dinosaurs!',
    descriptionVi: 'Khai quật hóa thạch cổ xưa và đồng hành cùng các chú khủng long dũng mãnh!',
    role: 'Paleontologist',
    motto: 'Roar with bravery and power!',
    themeColor: 'from-lime-500 to-emerald-600',
    accentBg: 'bg-lime-100 text-lime-900 border-lime-300'
  },
  {
    id: 'boy_robot_genius',
    name: 'Robot Genius',
    vietnameseName: 'Thiên Tài Người Máy',
    gender: 'boy',
    image: '/assets/avatars/boy_robot_genius.webp',
    descriptionEn: 'Codes smart robots and invents futuristic technology for humankind!',
    descriptionVi: 'Lập trình robot thông minh và chế tạo các cỗ máy kỳ diệu tương lai!',
    role: 'Coder',
    motto: 'Build the future with smart code!',
    themeColor: 'from-sky-400 to-blue-600',
    accentBg: 'bg-sky-100 text-sky-900 border-sky-300'
  },
  {
    id: 'boy_mountain_climber',
    name: 'Mountain Climber',
    vietnameseName: 'Nhà Leo Núi Dũng Cảm',
    gender: 'boy',
    image: '/assets/avatars/boy_mountain_climber.webp',
    descriptionEn: 'Conquers the highest peaks of Fansipan with unyielding determination!',
    descriptionVi: 'Chinh phục nóc nhà Đông Dương Fansipan với ý chí kiên cường!',
    role: 'Climber',
    motto: 'Every mountain has a peak to reach!',
    themeColor: 'from-stone-500 to-amber-700',
    accentBg: 'bg-stone-100 text-stone-900 border-stone-300'
  },
  {
    id: 'boy_young_pilot',
    name: 'Young Pilot',
    vietnameseName: 'Phi Công Nhí',
    gender: 'boy',
    image: '/assets/avatars/boy_young_pilot.webp',
    descriptionEn: 'Soars through fluffy clouds with aviator goggles and steady hands on the throttle!',
    descriptionVi: 'Lướt trên những tầng mây xanh thẳm cùng chiếc máy bay phiêu lưu!',
    role: 'Pilot',
    motto: 'The sky is not the limit!',
    themeColor: 'from-sky-500 to-blue-700',
    accentBg: 'bg-sky-100 text-sky-900 border-sky-300'
  },
  {
    id: 'boy_treasure_hunter',
    name: 'Treasure Hunter',
    vietnameseName: 'Thợ Săn Kho Báu',
    gender: 'boy',
    image: '/assets/avatars/boy_treasure_hunter.webp',
    descriptionEn: 'Follows ancient golden maps to find forgotten artifacts and royal treasures!',
    descriptionVi: 'Giải mã những tấm bản đồ vàng cổ xưa và tìm kiếm kho báu huyền thoại!',
    role: 'Seeker',
    motto: 'The real treasure is the knowledge gained!',
    themeColor: 'from-amber-500 to-yellow-600',
    accentBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'boy_superhero_boy',
    name: 'Superhero Boy',
    vietnameseName: 'Cậu Bé Siêu Nhân',
    gender: 'boy',
    image: '/assets/avatars/boy_superhero_boy.webp',
    descriptionEn: 'Flies across the city with his golden cape to protect friends and do good!',
    descriptionVi: 'Mang áo choàng đỏ bay lượn bảo vệ hòa bình và giúp đỡ mọi người!',
    role: 'Hero',
    motto: 'With great courage comes great kindness!',
    themeColor: 'from-rose-500 to-red-700',
    accentBg: 'bg-rose-100 text-rose-900 border-rose-300'
  },
  {
    id: 'boy_wildlife_ranger',
    name: 'Wildlife Ranger',
    vietnameseName: 'Kiểm Lâm Nhí',
    gender: 'boy',
    image: '/assets/avatars/boy_wildlife_ranger.webp',
    descriptionEn: 'Safeguards national parks and cares for endangered wild animals!',
    descriptionVi: 'Chăm sóc và bảo vệ các loài động vật hoang dã quý hiếm của Việt Nam!',
    role: 'Guardian',
    motto: 'Protect wildlife, preserve our green planet!',
    themeColor: 'from-emerald-500 to-green-700',
    accentBg: 'bg-emerald-100 text-emerald-900 border-emerald-300'
  },
  {
    id: 'boy_smart_detective',
    name: 'Smart Detective',
    vietnameseName: 'Thám Tử Thông Thái',
    gender: 'boy',
    image: '/assets/avatars/boy_smart_detective.webp',
    descriptionEn: 'Examines clues with his magnifying glass to solve tricky riddles and mysteries!',
    descriptionVi: 'Dùng kính lúp soi rọi mọi manh mối để giải mã những điều bí ẩn!',
    role: 'Detective',
    motto: 'Every puzzle has a solution!',
    themeColor: 'from-amber-600 to-yellow-800',
    accentBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'boy_galaxy_warrior',
    name: 'Galaxy Warrior',
    vietnameseName: 'Chiến Binh Ngân Hà',
    gender: 'boy',
    image: '/assets/avatars/boy_galaxy_warrior.webp',
    descriptionEn: 'Wields cosmic energy to defend peace across distant star systems!',
    descriptionVi: 'Sở hữu năng lượng ánh sáng bảo vệ các hành tinh và giải ngân hà!',
    role: 'Warrior',
    motto: 'Courage shines brighter than stars!',
    themeColor: 'from-indigo-500 to-violet-800',
    accentBg: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  },
  {
    id: 'boy_racing_champion',
    name: 'Racing Champion',
    vietnameseName: 'Vô Địch Đường Đua',
    gender: 'boy',
    image: '/assets/avatars/boy_racing_champion.webp',
    descriptionEn: 'Speeds down the racetrack with skill, precision, and championship spirit!',
    descriptionVi: 'Làm chủ tốc độ trên đường đua rực lửa với kỹ năng điêu luyện!',
    role: 'Racer',
    motto: 'Speed, focus, and victory!',
    themeColor: 'from-red-500 to-orange-600',
    accentBg: 'bg-orange-100 text-orange-900 border-orange-300'
  },
  {
    id: 'boy_little_inventor',
    name: 'Little Inventor',
    vietnameseName: 'Nhà Sáng Chế Nhí',
    gender: 'boy',
    image: '/assets/avatars/boy_little_inventor.webp',
    descriptionEn: 'Tinkers with gears and blueprints to build helpful gadgets that make life easier!',
    descriptionVi: 'Lắp ráp bánh răng và sáng chế các phát minh thông minh cho cuộc sống!',
    role: 'Inventor',
    motto: 'Inventing today, changing tomorrow!',
    themeColor: 'from-cyan-500 to-teal-700',
    accentBg: 'bg-teal-100 text-teal-900 border-teal-300'
  },
  {
    id: 'boy_dragon_adventurer',
    name: 'Dragon Adventurer',
    vietnameseName: 'Kỵ Sĩ Rồng',
    gender: 'boy',
    image: '/assets/avatars/boy_dragon_adventurer.webp',
    descriptionEn: 'Rides majestic dragons above mountain mist and ancient castles!',
    descriptionVi: 'Cưỡi rồng thần bay qua mây ngàn và bảo vệ vùng đất thần tiên!',
    role: 'Knight',
    motto: 'Brave hearts fly the highest!',
    themeColor: 'from-violet-500 to-purple-700',
    accentBg: 'bg-violet-100 text-violet-900 border-violet-300'
  },
  {
    id: 'boy_english_star',
    name: 'English Star',
    vietnameseName: 'Ngôi Sao Tiếng Anh',
    gender: 'boy',
    image: '/assets/avatars/boy_english_star.webp',
    descriptionEn: 'Masters vocabulary and speaks English fluently with a sparkling smile!',
    descriptionVi: 'Tự tin giao tiếp tiếng Anh lưu loát và tỏa sáng như ngôi sao!',
    role: 'Champion',
    motto: 'Speak English with pride and joy!',
    themeColor: 'from-yellow-400 to-amber-500',
    accentBg: 'bg-yellow-100 text-yellow-900 border-yellow-300'
  }
];

export const GIRL_AVATARS: AvatarItem[] = [
  {
    id: 'girl_little_explorer',
    name: 'Little Explorer Girl',
    vietnameseName: 'Cô Bé Thám Hiểm Nhí',
    gender: 'girl',
    image: '/assets/avatars/girl_little_explorer.webp',
    descriptionEn: 'Embarks on cheerful quests across Vietnam with bright eyes and backpack!',
    descriptionVi: 'Đeo ba lô thám hiểm và sẵn sàng khám phá mọi ngóc ngách tươi đẹp của Việt Nam!',
    role: 'Explorer',
    motto: 'Adventure awaits around every corner!',
    themeColor: 'from-pink-400 to-rose-500',
    accentBg: 'bg-pink-100 text-pink-900 border-pink-300'
  },
  {
    id: 'girl_galaxy_princess',
    name: 'Galaxy Princess',
    vietnameseName: 'Công Chúa Thiên Hà',
    gender: 'girl',
    image: '/assets/avatars/girl_galaxy_princess.webp',
    descriptionEn: 'Rules with kindness and sprinkles starlight over distant constellations!',
    descriptionVi: 'Công chúa nhân hậu gieo rắc ánh sáng diệu kỳ khắp các dải ngân hà xa xôi!',
    role: 'Princess',
    motto: 'Shine your gentle light everywhere!',
    themeColor: 'from-fuchsia-400 to-purple-600',
    accentBg: 'bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300'
  },
  {
    id: 'girl_magic_star',
    name: 'Magic Star',
    vietnameseName: 'Ngôi Sao Kỳ Diệu',
    gender: 'girl',
    image: '/assets/avatars/girl_magic_star.webp',
    descriptionEn: 'Spreads magic dust and makes joyful dreams come true for every learner!',
    descriptionVi: 'Lan tỏa phép màu lấp lánh và biến ước mơ học tập thành hiện thực!',
    role: 'Mage',
    motto: 'Believe in magic and yourself!',
    themeColor: 'from-amber-300 to-pink-500',
    accentBg: 'bg-pink-100 text-pink-900 border-pink-300'
  },
  {
    id: 'girl_little_scientist',
    name: 'Little Scientist',
    vietnameseName: 'Nhà Khoa Học Nhí',
    gender: 'girl',
    image: '/assets/avatars/girl_little_scientist.webp',
    descriptionEn: 'Discovers the secret formulas of nature through fun and colorful chemistry!',
    descriptionVi: 'Khám phá bí mật tự nhiên qua những thí nghiệm khoa học rực rỡ sắc màu!',
    role: 'Scientist',
    motto: 'Questions lead to amazing discoveries!',
    themeColor: 'from-teal-400 to-emerald-600',
    accentBg: 'bg-teal-100 text-teal-900 border-teal-300'
  },
  {
    id: 'girl_rainbow_adventurer',
    name: 'Rainbow Adventurer',
    vietnameseName: 'Thám Hiểm Cầu Vồng',
    gender: 'girl',
    image: '/assets/avatars/girl_rainbow_adventurer.webp',
    descriptionEn: 'Rides rainbow bridges and paints happiness across cloudy skies!',
    descriptionVi: 'Bước trên cầu vồng bảy sắc và thắp sáng niềm vui trên bầu trời!',
    role: 'Adventurer',
    motto: 'Every color has its own beauty!',
    themeColor: 'from-rose-400 via-amber-400 to-sky-400',
    accentBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'girl_ocean_princess',
    name: 'Ocean Princess',
    vietnameseName: 'Công Chúa Đại Dương',
    gender: 'girl',
    image: '/assets/avatars/girl_ocean_princess.webp',
    descriptionEn: 'Protects the sea realm and dances with colorful coral fish!',
    descriptionVi: 'Bảo vệ vương quốc biển cả và ca hát cùng đàn cá dưới đại dương bao la!',
    role: 'Princess',
    motto: 'Keep our coral reefs vibrant and alive!',
    themeColor: 'from-cyan-400 to-blue-500',
    accentBg: 'bg-cyan-100 text-cyan-900 border-cyan-300'
  },
  {
    id: 'girl_space_explorer',
    name: 'Space Explorer',
    vietnameseName: 'Nhà Thám Hiểm Vũ Trụ',
    gender: 'girl',
    image: '/assets/avatars/girl_space_explorer.webp',
    descriptionEn: 'Travels across nebulae and gathers stardust from friendly comets!',
    descriptionVi: 'Du hành giữa các vì sao và thu thập bụi sao lấp lánh trên vũ trụ!',
    role: 'Astronaut',
    motto: 'Explore the infinite wonders of space!',
    themeColor: 'from-indigo-400 to-purple-600',
    accentBg: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  },
  {
    id: 'girl_nature_guardian',
    name: 'Nature Guardian',
    vietnameseName: 'Người Bảo Vệ Thiên Nhiên',
    gender: 'girl',
    image: '/assets/avatars/girl_nature_guardian.webp',
    descriptionEn: 'Tends lush blooming gardens and sings gentle songs with forest birds!',
    descriptionVi: 'Chăm sóc cỏ cây hoa lá và lắng nghe tiếng chim hót trong trẻo!',
    role: 'Guardian',
    motto: 'Love every leaf, flower, and tree!',
    themeColor: 'from-emerald-400 to-green-600',
    accentBg: 'bg-emerald-100 text-emerald-900 border-emerald-300'
  },
  {
    id: 'girl_superhero_girl',
    name: 'Superhero Girl',
    vietnameseName: 'Cô Bé Siêu Nhân',
    gender: 'girl',
    image: '/assets/avatars/girl_superhero_girl.webp',
    descriptionEn: 'Flies with super strength and a golden heart to help those in need!',
    descriptionVi: 'Sở hữu sức mạnh diệu kỳ và trái tim nhân ái luôn sẵn lòng giúp đỡ mọi người!',
    role: 'Hero',
    motto: 'Kindness is the greatest superpower!',
    themeColor: 'from-rose-500 to-pink-600',
    accentBg: 'bg-rose-100 text-rose-900 border-rose-300'
  },
  {
    id: 'girl_young_pilot',
    name: 'Young Pilot',
    vietnameseName: 'Nữ Phi Công Tài Ba',
    gender: 'girl',
    image: '/assets/avatars/girl_young_pilot.webp',
    descriptionEn: 'Navigates high-altitude winds and lands smoothly on tropical runways!',
    descriptionVi: 'Điều khiển phi cơ vượt gió cao và hạ cánh êm ái trên những đường băng xinh đẹp!',
    role: 'Pilot',
    motto: 'Fly high and chase your dreams!',
    themeColor: 'from-sky-400 to-indigo-600',
    accentBg: 'bg-sky-100 text-sky-900 border-sky-300'
  },
  {
    id: 'girl_unicorn_adventurer',
    name: 'Unicorn Adventurer',
    vietnameseName: 'Thám Hiểm Kỳ Lân',
    gender: 'girl',
    image: '/assets/avatars/girl_unicorn_adventurer.webp',
    descriptionEn: 'Rides mystical unicorns across enchanted meadows filled with clover!',
    descriptionVi: 'Đồng hành cùng kỳ lân thần thoại qua đồng cỏ xanh mướt ngập tràn sắc hoa!',
    role: 'Rider',
    motto: 'Believe in pure wonders!',
    themeColor: 'from-pink-300 to-purple-500',
    accentBg: 'bg-purple-100 text-purple-900 border-purple-300'
  },
  {
    id: 'girl_smart_detective',
    name: 'Smart Detective',
    vietnameseName: 'Nữ Thám Tử Thông Minh',
    gender: 'girl',
    image: '/assets/avatars/girl_smart_detective.webp',
    descriptionEn: 'Notices tiny clues others miss and cracks tricky cases with clever logic!',
    descriptionVi: 'Quan sát tinh tường từng chi tiết nhỏ và suy luận logic để phá án!',
    role: 'Detective',
    motto: 'Curiosity unlocks the truth!',
    themeColor: 'from-amber-500 to-amber-700',
    accentBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'girl_jungle_explorer',
    name: 'Jungle Explorer',
    vietnameseName: 'Thám Hiểm Rừng Rậm',
    gender: 'girl',
    image: '/assets/avatars/girl_jungle_explorer.webp',
    descriptionEn: 'Crosses rope bridges over jungle streams to find rare orchids and butterflies!',
    descriptionVi: 'Băng qua cầu treo rừng già để ngắm nhìn những đóa phong lan và cánh bướm quý!',
    role: 'Adventurer',
    motto: 'Nature is the best classroom!',
    themeColor: 'from-green-500 to-teal-700',
    accentBg: 'bg-green-100 text-green-900 border-green-300'
  },
  {
    id: 'girl_little_inventor',
    name: 'Little Inventor',
    vietnameseName: 'Nữ Sáng Chế Nhí',
    gender: 'girl',
    image: '/assets/avatars/girl_little_inventor.webp',
    descriptionEn: 'Builds solar-powered gadgets and eco-friendly devices for a cleaner world!',
    descriptionVi: 'Chế tạo các thiết bị năng lượng mặt trời bảo vệ môi trường trong lành!',
    role: 'Inventor',
    motto: 'Create things that make the world greener!',
    themeColor: 'from-lime-500 to-emerald-600',
    accentBg: 'bg-lime-100 text-lime-900 border-lime-300'
  },
  {
    id: 'girl_music_star',
    name: 'Music Star',
    vietnameseName: 'Ngôi Sao Âm Nhạc',
    gender: 'girl',
    image: '/assets/avatars/girl_music_star.webp',
    descriptionEn: 'Sings melodious songs and plays instruments with sparkling harmony!',
    descriptionVi: 'Hát những giai điệu ngọt ngào và lan tỏa niềm say mê âm nhạc!',
    role: 'Musician',
    motto: 'Music connects hearts all over the world!',
    themeColor: 'from-violet-400 to-fuchsia-600',
    accentBg: 'bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300'
  },
  {
    id: 'girl_treasure_hunter',
    name: 'Treasure Hunter',
    vietnameseName: 'Thợ Săn Kho Báu Nhí',
    gender: 'girl',
    image: '/assets/avatars/girl_treasure_hunter.webp',
    descriptionEn: 'Unravels riddles etched on ancient stone tablets in historic imperial citadels!',
    descriptionVi: 'Giải mã những bia đá cổ kính trong hoàng thành để tìm kho tàng tri thức!',
    role: 'Archeologist',
    motto: 'History holds the greatest treasures!',
    themeColor: 'from-amber-400 to-orange-500',
    accentBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'girl_robot_engineer',
    name: 'Robot Engineer',
    vietnameseName: 'Kỹ Sư Robot Nhí',
    gender: 'girl',
    image: '/assets/avatars/girl_robot_engineer.webp',
    descriptionEn: 'Designs friendly assistive robots with smart sensors and cheerful bleeps!',
    descriptionVi: 'Thiết kế người máy thông minh biết giúp đỡ bạn bè và cộng đồng!',
    role: 'Engineer',
    motto: 'Engineering dreams into reality!',
    themeColor: 'from-cyan-500 to-blue-600',
    accentBg: 'bg-cyan-100 text-cyan-900 border-cyan-300'
  },
  {
    id: 'girl_butterfly_explorer',
    name: 'Butterfly Explorer',
    vietnameseName: 'Nhà Thám Hiểm Bướm Hoa',
    gender: 'girl',
    image: '/assets/avatars/girl_butterfly_explorer.webp',
    descriptionEn: 'Follows colorful butterfly swarms in Cuc Phuong National Park!',
    descriptionVi: 'Dạo bước giữa rừng bướm Cúc Phương rực rỡ và ghi lại từng khoảnh khắc kỳ diệu!',
    role: 'Naturalist',
    motto: 'Graceful and free like a butterfly!',
    themeColor: 'from-pink-400 to-purple-500',
    accentBg: 'bg-pink-100 text-pink-900 border-pink-300'
  },
  {
    id: 'girl_english_champion',
    name: 'English Champion',
    vietnameseName: 'Quán Quân Tiếng Anh',
    gender: 'girl',
    image: '/assets/avatars/girl_english_champion.webp',
    descriptionEn: 'Speaks with confidence, wins spelling bees, and teaches English rhymes!',
    descriptionVi: 'Tự tin thuyết trình tiếng Anh, giành giải quán quân và lan tỏa niềm vui học tập!',
    role: 'Champion',
    motto: 'Practice with joy, achieve with pride!',
    themeColor: 'from-amber-400 to-rose-500',
    accentBg: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'girl_dream_explorer',
    name: 'Dream Explorer',
    vietnameseName: 'Nhà Thám Hiểm Giấc Mơ',
    gender: 'girl',
    image: '/assets/avatars/girl_dream_explorer.webp',
    descriptionEn: 'Travels across clouds of dreams, turning imagination into real adventures!',
    descriptionVi: 'Phiêu lưu giữa miền cổ tích, biến trí tưởng tượng thành hành trình rực rỡ!',
    role: 'Dreamer',
    motto: 'Dream big, achieve bigger!',
    themeColor: 'from-purple-400 to-pink-500',
    accentBg: 'bg-purple-100 text-purple-900 border-purple-300'
  }
];

export const ALL_AVATARS: AvatarItem[] = [...BOY_AVATARS, ...GIRL_AVATARS];

export function getAvatarById(idOrPath: string): AvatarItem | undefined {
  if (!idOrPath) return BOY_AVATARS[0];
  
  // Clean path if passed like /assets/avatars/boy_little_explorer.webp
  const cleanId = idOrPath.replace(/^\/assets\/avatars\//, '').replace(/\.webp$/, '');
  
  return ALL_AVATARS.find(a => a.id === cleanId || a.id === idOrPath || a.image === idOrPath);
}
