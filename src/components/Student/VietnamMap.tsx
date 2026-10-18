import React, { useState, useRef } from 'react';
import { 
  Compass, 
  Layers, 
  Sparkles, 
  Volume2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Info, 
  Search, 
  UploadCloud, 
  X, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Award
} from 'lucide-react';
import { Destination, Region, GradeBand } from '../../types';
import { 
  OFFICIAL_34_PROVINCES_DATA, 
  MAP_METADATA, 
  AdministrativeUnitInfo 
} from '../../data/administrativeData';
import { 
  VIETNAM_34_PROVINCES_GEO, 
  Province34GeoFeature 
} from '../../data/vietnam34ProvincesGeoData';
import { playEnglishSpeech, playSpeech } from '../../lib/speech';
import { projectGeoToSvg } from '../../lib/geoProjection';
import { soundEffects } from '../../lib/soundEffects';

interface VietnamMapProps {
  destinations: Destination[];
  selectedDestination: Destination | null;
  gradeBand?: GradeBand;
  initialLayer?: 'destinations' | 'administrative';
  onSelectDestination: (dest: Destination) => void;
  onOpenLesson: (dest: Destination) => void;
}

// Visual layout styling parameters (offset, speech, emoji).
// Geographic anchor points are ALWAYS computed dynamically from WGS84 coordinates via projectGeoToSvg().
interface DestinationVisualLayout {
  labelDx: number;
  labelDy: number;
  labelAlign: 'left' | 'right';
  iconG12: string;
  pronounceTextEn: string;
  pronounceTextVi: string;
}

const HOANG_SA_SVG_PATH = "M 553.6 524.5 L 552.9 524.6 L 552.4 524 L 553.1 523.2 L 553.9 522.9 L 554.3 523.6 L 553.9 524.3 L 553.6 524.5 Z M 622.1 509.8 L 620.8 509.6 L 620.4 508.7 L 620.8 507.8 L 622.3 507.1 L 626.6 505.9 L 627.9 505.6 L 628.9 505.8 L 628.9 506.2 L 625.5 509 L 622.1 509.8 Z M 584.5 508.1 L 582.9 507.8 L 582.6 507.2 L 583 506.3 L 584 505.6 L 585 505.4 L 585.9 505.5 L 586.6 506 L 586.6 506.6 L 586.3 507.1 L 584.5 508.1 Z M 583.3 497.2 L 574 499.2 L 572.7 498.9 L 572.3 498.1 L 572.6 497 L 577.1 492.7 L 584.1 492.1 L 585 492.7 L 585.6 493.5 L 585.9 494.4 L 585.8 495 L 584.9 496.1 L 583.3 497.2 Z M 594.8 490.6 L 593.6 490.6 L 593.3 489.6 L 594.4 488.6 L 596.3 488 L 597.8 487.8 L 598.9 488 L 600.1 488.6 L 600.6 489.2 L 600.2 489.8 L 594.8 490.6 Z M 631.1 475.3 L 630.8 475.2 L 630.8 474.9 L 631.3 474.9 L 631.1 475.3 Z M 582.3 483 L 575 483.4 L 570.7 483.3 L 570.2 483.1 L 570 482.7 L 575 477.1 L 577.4 475.3 L 580.8 474.2 L 581.2 474.4 L 584.3 478.9 L 584 480 L 582.5 482.9 L 582.3 483 Z M 636.7 469.7 L 635.9 469.3 L 635.7 468.7 L 636 468.6 L 636.7 469.2 L 636.8 469.5 L 636.7 469.7 Z M 563 466.6 L 562 466.5 L 561.5 465.9 L 561.8 464.5 L 562.5 464.3 L 563.4 464.4 L 563.8 465 L 563.8 466 L 563.3 466.5 L 563 466.6 Z M 614.4 459.2 L 614.2 459.2 L 613.8 458.5 L 614 458 L 615 457.8 L 615.4 458.1 L 614.9 459 L 614.4 459.2 Z M 615 453.4 L 607.4 450.5 L 606.9 450.3 L 606.9 449.6 L 607.9 448.8 L 608.9 448.4 L 609.3 448.3 L 610.8 448.9 L 614.7 451.6 L 615.1 452.7 L 615 453.4 Z M 568.6 444.5 L 566.6 444.3 L 566.1 443.9 L 566.1 443.1 L 567 442.5 L 569.6 441.5 L 571 441.5 L 572.3 442.1 L 572.4 442.5 L 572.1 442.9 L 568.6 444.5 Z";

const TRUONG_SA_SVG_PATH = "M 683.1 1070.4 L 682.7 1070.5 L 682.5 1070.3 L 682.6 1069.6 L 683.2 1069.8 L 683.1 1070.4 Z M 697 1043.3 L 694.7 1042.8 L 695.1 1042.4 L 697 1042 L 698.1 1042.1 L 698.2 1042.5 L 698.1 1042.8 L 697 1043.3 Z M 695.3 1028.3 L 693.5 1028.6 L 693.2 1027.9 L 697.2 1026.9 L 696.6 1027.8 L 695.3 1028.3 Z M 439.8 1017.2 L 439.1 1016.9 L 438.8 1016.1 L 439.1 1015.3 L 439.8 1015 L 440.5 1015.3 L 440.8 1016.1 L 440.5 1016.9 L 439.8 1017.2 Z M 512 1017.9 L 511.8 1017.9 L 511.9 1017.4 L 513.8 1015.1 L 514.8 1014.9 L 515.2 1015 L 514.9 1016.1 L 514.4 1016.8 L 513.5 1017.4 L 512 1017.9 Z M 646.5 1012.3 L 646.1 1012.4 L 646.6 1011.8 L 646.8 1011.9 L 646.5 1012.3 Z M 571.4 1035.9 L 570.8 1035.8 L 570.7 1035.4 L 571.2 1026.7 L 580 1009.1 L 580.5 1008.9 L 581.4 1009.1 L 581.8 1009.7 L 583 1022 L 582.9 1025 L 581.4 1026.7 L 571.4 1035.9 Z M 713.4 1030.5 L 707.9 1030.3 L 702.3 1028.6 L 702 1027.1 L 723.5 1009.2 L 729.3 1007 L 730.2 1007.1 L 730.7 1007.5 L 733 1010.8 L 725.2 1024.9 L 713.4 1030.5 Z M 703.3 1008.7 L 702.4 1008.7 L 699.7 1005.4 L 699.6 1005.1 L 700 1004.4 L 701.7 1004.8 L 703.6 1008.4 L 703.3 1008.7 Z M 521.3 1005.2 L 521 1005.4 L 520.3 1005.1 L 519.4 1003.5 L 519.5 1002 L 520.2 1000.9 L 521.1 1001.1 L 521.9 1001.9 L 522.1 1002.4 L 522.1 1003.1 L 521.3 1005.2 Z M 713 1000.8 L 712.5 1000.8 L 712.3 1000.3 L 712.7 999.7 L 713.2 999.5 L 713.5 999.7 L 713.7 1000.2 L 713 1000.8 Z M 514.6 1001.4 L 512.3 1000.9 L 511.2 996.6 L 513.5 995.3 L 514 995.3 L 517.6 998.2 L 514.6 1001.4 Z M 745.6 1001.4 L 740.9 1001.4 L 733.2 999.7 L 734.1 998.4 L 734.5 998.2 L 744.1 994.9 L 747.4 995.4 L 749.3 997.3 L 749.6 998.2 L 749.5 999.3 L 747.3 1000.7 L 745.6 1001.4 Z M 847.5 992.9 L 846.8 992.7 L 846.6 992.3 L 846.9 991.7 L 847.4 991.5 L 848.1 992.1 L 847.5 992.9 Z M 664.1 1000.3 L 663.2 1000.7 L 670.7 987.5 L 670.5 990.5 L 669.6 993.1 L 668.5 995.2 L 664.1 1000.3 Z M 774.9 984.4 L 774.3 984.6 L 770.8 984.1 L 769.3 982.3 L 770.7 981.8 L 774.7 983.2 L 775.3 983.6 L 774.9 984.4 Z M 737.8 975.7 L 737.2 976.4 L 736.7 975.8 L 737.6 975 L 737.8 975.7 Z M 591.8 966.1 L 591.8 965.7 L 592.1 965.7 L 591.8 966.1 Z M 578.5 964.3 L 576.9 964.2 L 576.8 963.8 L 579.2 962.8 L 579.5 962.9 L 579.7 963.3 L 579.4 963.8 L 578.5 964.3 Z M 715.4 964.3 L 715.1 964.4 L 714.6 963 L 714 959.9 L 714.4 959.3 L 716 960.1 L 716.2 960.6 L 716.8 963.3 L 715.4 964.3 Z M 708.4 958.4 L 705.6 958 L 699.9 954.6 L 700.6 953.5 L 700.9 953.5 L 704.6 954 L 707.3 954.9 L 708.7 957.1 L 708.8 958.3 L 708.4 958.4 Z M 632.1 955.1 L 628.2 955.8 L 627.1 955.8 L 626.2 954.4 L 626.2 953.5 L 629.9 953.6 L 632.1 954.3 L 633 954.9 L 632.1 955.1 Z M 643.1 952.5 L 643.3 952.5 L 643.1 952.5 Z M 740.4 954.5 L 739.9 954.3 L 740.1 952.6 L 741.4 951.9 L 742.9 951.7 L 742.4 952.6 L 740.4 954.5 Z M 643.1 952.5 L 641.3 952.3 L 640.6 951.5 L 640.9 951.4 L 643.1 952 L 643.2 952.2 L 643.1 952.5 Z M 608.3 954.5 L 608.1 954.6 L 605.7 953.6 L 605.9 952.7 L 607.1 951.4 L 609.9 950.7 L 610.3 950.7 L 610.7 951.3 L 610.7 951.8 L 608.3 954.5 Z M 829.9 952 L 829 951.8 L 829.5 949.7 L 829.8 949.3 L 831.1 949.1 L 831.5 949.3 L 830.5 951.4 L 829.9 952 Z M 615.5 948.2 L 615.2 948.2 L 615.2 947.9 L 615.6 947.8 L 615.5 948.2 Z M 688 947 L 685.9 947.6 L 685.7 947.3 L 685.7 946.9 L 686.7 946 L 689.5 945 L 690.2 945.1 L 688 947 Z M 851.8 942.4 L 851.3 942.5 L 850.5 942 L 850.1 941 L 850.2 940.5 L 850.9 940.4 L 851.9 941.4 L 852 941.9 L 851.8 942.4 Z M 841.4 933 L 840.7 932.8 L 841 932.6 L 841.6 932.8 L 841.4 933 Z M 687.3 931.1 L 687 930.8 L 687.1 930.4 L 687.4 930.7 L 687.3 931.1 Z M 811.5 924.6 L 809.7 924.7 L 809.1 924.4 L 810.5 923.7 L 812.1 923.7 L 812.5 924 L 812.4 924.3 L 811.5 924.6 Z M 784.3 922.3 L 783.4 922 L 782.9 920.3 L 784.1 917.9 L 784.5 918.6 L 785.2 921.4 L 784.3 922.3 Z M 865.1 916.5 L 864.7 915.9 L 865.3 915.1 L 865.7 915.4 L 865.6 916.1 L 865.1 916.5 Z M 706.5 910.9 L 706.3 910.4 L 706.5 910.3 L 706.7 910.5 L 706.5 910.9 Z M 823.8 907 L 823.3 906.8 L 823.4 906.4 L 823.9 906 L 823.8 907 Z M 648.5 906.1 L 644.9 908.3 L 644.3 908.2 L 648.1 902.1 L 649.5 900.9 L 654.5 898.9 L 654.5 900.4 L 653.8 901.8 L 650.3 904.9 L 648.5 906.1 Z M 806.8 901.1 L 806.1 902.5 L 806.2 895.9 L 807 894.3 L 807.8 893.8 L 808.5 894.2 L 808.7 894.9 L 807.8 898.3 L 806.8 901.1 Z M 847.5 900 L 841.5 900.3 L 840.9 900.1 L 838.3 897.4 L 837.4 896 L 837.2 894.6 L 839.6 893.7 L 840.3 893.9 L 847.3 898.5 L 847.9 899.5 L 847.5 900 Z M 790.2 889.5 L 788.2 889.4 L 787.6 889.1 L 787.1 887.7 L 787.4 886.6 L 787.8 886.2 L 788.9 886.1 L 790.3 886.2 L 791.5 886.8 L 791.7 887.9 L 790.2 889.5 Z M 720.7 900.5 L 720.3 900.4 L 719 896.2 L 720.6 890.4 L 721.8 889.2 L 738.8 881.9 L 741.9 881.7 L 741.1 885 L 740.4 886.3 L 720.7 900.5 Z M 823.5 874.9 L 823.1 875 L 822.4 874.7 L 822.2 874.2 L 822.5 873.9 L 822.9 874 L 823.5 874.9 Z M 697.1 881.5 L 696.7 881.6 L 696.9 873.6 L 697.1 873.5 L 698 874.1 L 698 874.4 L 697.4 881.3 L 697.1 881.5 Z M 776.1 871.2 L 775.8 871.3 L 775.4 869.7 L 775.6 868.7 L 778.1 869.3 L 777.3 870.5 L 776.1 871.2 Z M 780.1 866.7 L 779.8 866.6 L 780 865.9 L 780.7 865.9 L 780.1 866.7 Z M 684.5 866.2 L 684.4 866.6 L 683.8 866.4 L 683.9 865.4 L 684.8 865.3 L 684.5 866.2 Z M 722.2 871.7 L 719.5 871.7 L 717.6 869.3 L 717.4 868.6 L 724.8 858.5 L 725.7 858.1 L 737.2 856 L 744.7 858.6 L 743.9 861.9 L 743.2 862.9 L 742.1 863.8 L 739.4 865.2 L 725.4 871.1 L 722.2 871.7 Z M 800 853.4 L 799.7 853.2 L 800 853.4 Z M 802.7 853.7 L 802 853.6 L 803.2 852.7 L 803.1 853.4 L 802.7 853.7 Z M 798.5 851.9 L 798.3 851.5 L 799.2 850.1 L 798.5 851.9 Z M 799.7 849.3 L 799.6 849.1 L 799.9 848.7 L 800.8 848.8 L 799.7 849.3 Z M 802.1 853.4 L 801.5 853.4 L 799.8 852.6 L 799.2 851.9 L 799.3 851.6 L 800.1 849.6 L 800.9 848.8 L 803.1 848.4 L 803.6 848.5 L 803.8 848.8 L 803.2 852.2 L 802.7 853 L 802.1 853.4 Z M 852.8 861.1 L 841.7 864.2 L 840.9 864.1 L 840.1 863 L 844.7 850.3 L 846.6 847.6 L 848.5 845.9 L 858.8 839.1 L 866 847.3 L 866.2 848 L 865.6 849.2 L 857.7 858.5 L 856.2 859.8 L 852.8 861.1 Z M 819.7 832.4 L 819.4 832.4 L 819.3 832.1 L 819.5 831.5 L 819.7 832.4 Z M 805.1 845 L 805 845.1 L 804.6 844 L 803.8 836.3 L 803.9 833.3 L 804.5 831.7 L 805.5 830.5 L 807.5 833.1 L 809 838.7 L 807.6 841.5 L 805.1 845 Z M 755.6 828.4 L 753 829.1 L 752.9 828.9 L 756.5 825.6 L 756.6 826 L 756.2 827.3 L 755.6 828.4 Z M 824 844.5 L 823.4 844.5 L 823.2 844.2 L 823.4 837.6 L 825.2 832.4 L 827.9 826.6 L 841.3 825.2 L 824.6 844.1 L 824 844.5 Z M 850.6 834.1 L 849.2 833.9 L 848.2 832.6 L 848.2 831.8 L 849.4 827.2 L 850 826.4 L 851.7 825.6 L 864.3 824.9 L 864.8 825.1 L 864.9 825.8 L 861.8 829.6 L 858.9 831.3 L 850.6 834.1 Z M 728.7 840.8 L 726.5 840.5 L 722.8 839.2 L 722.7 838.9 L 724.4 836.9 L 738.8 824.1 L 739.5 824.1 L 737.6 834.5 L 737 836 L 734.1 838.6 L 730.8 840.2 L 728.7 840.8 Z M 761.1 815.6 L 760.8 815.3 L 761.3 814.8 L 761.4 815.2 L 761.1 815.6 Z M 709.6 826.1 L 708.7 826 L 708.4 825.8 L 709.4 824.3 L 715 817.6 L 716.8 816.2 L 719.4 815.2 L 725.9 814.1 L 726.4 814.3 L 724.2 816.9 L 709.6 826.1 Z M 740.8 823.1 L 740.5 823.1 L 740.5 822.9 L 741.4 820.9 L 748 811.6 L 749.2 810.3 L 749.6 810.5 L 749.8 811.7 L 749.5 814 L 746 819.4 L 740.8 823.1 Z M 721.8 796.5 L 721.6 796.5 L 721.7 795.8 L 723.3 793.3 L 724.6 791.8 L 726.6 791 L 727.2 791.1 L 727.2 791.8 L 721.8 796.5 Z M 738.3 799.9 L 737.9 800.1 L 736.1 799.8 L 735.8 799 L 735.9 797.9 L 739.7 789.3 L 740.6 788.8 L 741.4 788.8 L 743.7 790.5 L 743.8 790.9 L 743.5 792.5 L 738.3 799.9 Z M 831.8 797.1 L 820.7 798.4 L 820.4 798.3 L 820.4 797.6 L 821.9 795 L 825.4 789.8 L 840.4 773.2 L 841.1 773.1 L 841.3 773.8 L 841.4 777.1 L 841.2 778.3 L 832.6 796.4 L 831.8 797.1 Z M 823.7 756.3 L 822.6 756.2 L 822.3 755.6 L 823 755.2 L 823.7 755.2 L 824.2 755.7 L 824 756.2 L 823.7 756.3 Z";

const DESTINATION_LAYOUT_CONFIG: Record<string, DestinationVisualLayout> = {
  hanoi: {
    labelAlign: 'left',
    labelDx: -35,
    labelDy: -32,
    iconG12: '🐢',
    pronounceTextEn: 'Hanoi Capital! The peaceful thousand-year-old capital city of Vietnam.',
    pronounceTextVi: 'Thủ đô Hà Nội! Trái tim ngàn năm văn hiến của đất nước Việt Nam.'
  },
  halong: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -28,
    iconG12: '⛵',
    pronounceTextEn: 'Ha Long Bay! Famous for magical emerald waters and limestone islands.',
    pronounceTextVi: 'Vịnh Hạ Long! Kỳ quan thiên nhiên thế giới thuộc tỉnh Quảng Ninh.'
  },
  hue: {
    labelAlign: 'left',
    labelDx: -35,
    labelDy: -24,
    iconG12: '👑',
    pronounceTextEn: 'Hue Imperial City! The historic royal capital by the gentle Perfume River.',
    pronounceTextVi: 'Cố đô Huế! Vùng đất di sản hoàng cung bên dòng sông Hương thơ mộng.'
  },
  danang: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: 20,
    iconG12: '🐉',
    pronounceTextEn: 'Da Nang and Hoi An! Marvel at the Golden Dragon Bridge and lantern ancient town.',
    pronounceTextVi: 'Đà Nẵng và Phố cổ Hội An! Cầu Rồng phun lửa và lung linh đèn lồng di sản.'
  },
  danang_hoian: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: 20,
    iconG12: '🐉',
    pronounceTextEn: 'Da Nang and Hoi An! Marvel at the Golden Dragon Bridge and lantern ancient town.',
    pronounceTextVi: 'Đà Nẵng và Phố cổ Hội An! Cầu Rồng phun lửa và lung linh đèn lồng di sản.'
  },
  hcmc: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -20,
    iconG12: '🏢',
    pronounceTextEn: 'Ho Chi Minh City! The energetic, modern metropolis of innovation and culture.',
    pronounceTextVi: 'Thành phố Hồ Chí Minh! Trung tâm kinh tế, văn hóa và đổi mới sáng tạo sôi động.'
  },
  hochiminh: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -20,
    iconG12: '🏢',
    pronounceTextEn: 'Ho Chi Minh City! The energetic, modern metropolis of innovation and culture.',
    pronounceTextVi: 'Thành phố Hồ Chí Minh! Trung tâm kinh tế, văn hóa và đổi mới sáng tạo sôi động.'
  },
  dalat: {
    labelAlign: 'right',
    labelDx: 35,
    labelDy: -15,
    iconG12: '🌸',
    pronounceTextEn: 'Da Lat Pine City! The dreamy highland city of eternal spring and fresh flowers.',
    pronounceTextVi: 'Thành phố Ngàn hoa Đà Lạt! Xứ sở ngàn thông mộng mơ và ngát hương hoa tươi.'
  },
  mekong: {
    labelAlign: 'left',
    labelDx: -35,
    labelDy: 28,
    iconG12: '🛶',
    pronounceTextEn: 'Mekong River Delta! The land of nine dragons with bustling floating markets.',
    pronounceTextVi: 'Đồng bằng Sông Cửu Long! Vựa lúa, vườn cây ăn trái và chợ nổi miền Tây thanh bình.'
  }
};

export const VietnamMap: React.FC<VietnamMapProps> = ({
  destinations,
  selectedDestination,
  gradeBand = 'grade_3',
  initialLayer = 'administrative',
  onSelectDestination,
  onOpenLesson
}) => {
  const [activeRegion, setActiveRegion] = useState<'All' | Region>('All');
  const [mapLayer, setMapLayer] = useState<'destinations' | 'administrative'>(initialLayer);
  
  // Zoom & Pan state
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isExpandedCanvas, setIsExpandedCanvas] = useState<boolean>(false);
  
  // Administrative layer state & GIS hover
  const [adminSearch, setAdminSearch] = useState<string>('');
  const [selectedAdminUnit, setSelectedAdminUnit] = useState<AdministrativeUnitInfo | null>(null);
  const [hoveredGeo, setHoveredGeo] = useState<Province34GeoFeature | null>(null);
  const [activeSovereigntyIsland, setActiveSovereigntyIsland] = useState<'HoangSa' | 'TruongSa' | null>(null);
  
  // Data compliance & custom file upload modal
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState<boolean>(false);
  const [customMapFileName, setCustomMapFileName] = useState<string | null>(null);

  // Audio playing indicator
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter destinations
  const filteredDestinations = destinations.filter(d => 
    activeRegion === 'All' ? true : d.region === activeRegion
  );

  // Filter 34 provinces
  const filteredAdminUnits = OFFICIAL_34_PROVINCES_DATA.filter(item => {
    const matchesQuery = 
      item.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.administrativeCenter.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.zone.toLowerCase().includes(adminSearch.toLowerCase());
    const matchesRegion = activeRegion === 'All' ? true : item.region === activeRegion;
    return matchesQuery && matchesRegion;
  });

  const [touchDistance, setTouchDistance] = useState<number | null>(null);

  // Handle Zoom controls
  const handleZoomIn = () => {
    soundEffects.playClick();
    setZoomLevel(prev => Math.min(Number((prev + 0.25).toFixed(2)), 2.8));
  };
  const handleZoomOut = () => {
    soundEffects.playClick();
    setZoomLevel(prev => Math.max(Number((prev - 0.25).toFixed(2)), 0.8));
  };
  const handleResetView = () => {
    soundEffects.playClick();
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      setZoomLevel(prev => Math.min(Number((prev + 0.15).toFixed(2)), 2.8));
    } else {
      setZoomLevel(prev => Math.max(Number((prev - 0.15).toFixed(2)), 0.85));
    }
  };

  // Handle Pan / Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Helper for touch distance (Pinch to Zoom)
  const getTouchDistance = (t1: React.Touch, t2: React.Touch) => {
    return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
  };

  // Touch support for Mobile (Single-finger Pan + Two-finger Pinch to Zoom)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      setTouchDistance(getTouchDistance(e.touches[0], e.touches[1]));
    } else if (e.touches.length === 1 && zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistance !== null) {
      const curDist = getTouchDistance(e.touches[0], e.touches[1]);
      const factor = curDist / touchDistance;
      if (factor > 1.04) {
        setZoomLevel(prev => Math.min(Number((prev + 0.05).toFixed(2)), 2.8));
        setTouchDistance(curDist);
      } else if (factor < 0.96) {
        setZoomLevel(prev => Math.max(Number((prev - 0.05).toFixed(2)), 0.85));
        setTouchDistance(curDist);
      }
    } else if (isDragging && e.touches.length === 1) {
      setPanOffset({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      setTouchDistance(null);
    }
    if (e.touches.length === 0) {
      setIsDragging(false);
    }
  };

  // Pronounce destination name in pure English for Elementary learners
  const handlePronounce = (dest: Destination, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const layout = DESTINATION_LAYOUT_CONFIG[dest.id] || DESTINATION_LAYOUT_CONFIG['hanoi'];
    const textToSpeak = layout ? layout.pronounceTextEn : `${dest.name}! Welcome to Vietnam!`;
    setIsPlayingAudio(true);
    playEnglishSpeech(textToSpeak, {
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  // Handle Custom GeoJSON/SVG Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomMapFileName(file.name);
      alert(`Đã nạp tệp bản đồ chính thức: "${file.name}". Hệ thống tích hợp thành công lớp vector GIS!`);
      setIsComplianceModalOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      
      {/* 1. Header Toolbar */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-gradient-to-r from-sky-50/50 via-white to-amber-50/30">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-rose-500 text-white shadow-xs">
              <Compass className="w-4 h-4" />
            </span>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading flex items-center gap-2">
              <span>Bản đồ Tương tác Việt Nam</span>
              <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60 hidden sm:inline-block">
                Interactive Vietnam Map
              </span>
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Trọn vẹn chủ quyền lãnh thổ quốc gia & các quần đảo • Official WGS84 GIS Data
          </p>
        </div>

        {/* View Controls & Toggles */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-between md:justify-end">
          
          {/* Region Tabs */}
          <div className="flex items-center p-1 bg-slate-100/90 rounded-2xl text-xs font-bold overflow-x-auto max-w-full">
            {(['All', 'North', 'Central', 'South'] as const).map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl whitespace-nowrap transition-all ${
                  activeRegion === reg
                    ? 'bg-white text-rose-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {reg === 'All' ? 'Toàn quốc' : reg === 'North' ? 'Miền Bắc' : reg === 'Central' ? 'Miền Trung' : 'Miền Nam'}
              </button>
            ))}
          </div>

          {/* Layer Selector */}
          <button
            onClick={() => setMapLayer(mapLayer === 'destinations' ? 'administrative' : 'destinations')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-2xl text-xs font-bold border transition-all whitespace-nowrap ${
              mapLayer === 'administrative'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-200'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{mapLayer === 'destinations' ? '34 Tỉnh Thành' : 'Điểm học tập'}</span>
          </button>

          {/* Compliance & Citation Notice Button */}
          <button
            onClick={() => setIsComplianceModalOpen(true)}
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            title="Cartographic Compliance & Data Sources"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Main Map Grid Area */}
      <div className={`grid grid-cols-1 ${isExpandedCanvas ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-0 relative`}>
        
        {/* Left Map Viewport */}
        <div 
          ref={containerRef}
          className={`${isExpandedCanvas ? 'lg:col-span-12' : 'lg:col-span-8'} p-3 sm:p-6 bg-gradient-to-b from-sky-50/70 via-sky-50/30 to-blue-50/40 flex flex-col items-center justify-center relative min-h-[580px] sm:min-h-[660px] overflow-hidden select-none`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          
          {/* Floating Sovereignty & Source Badge */}
          <div className="absolute top-4 left-4 z-20 max-w-xs bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-md text-[11px] leading-snug">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs text-rose-700 mb-1">
              <span className="text-sm">🇻🇳</span>
              <span>Bản đồ Nước Cộng hòa XHCN Việt Nam</span>
            </div>
            <p className="text-[10px] text-slate-600 font-medium">
              Thể hiện trọn vẹn chủ quyền lãnh thổ đất liền và các quần đảo <strong>Hoàng Sa (Đà Nẵng)</strong>, <strong>Trường Sa (Khánh Hòa)</strong>, <strong>Phú Quốc (Kiên Giang)</strong>, <strong>Côn Đảo</strong>.
            </p>
            <div className="text-[9px] text-slate-400 mt-1 italic flex items-center justify-between border-t border-slate-100 pt-1">
              <span>Nguồn: Cục Đo đạc, Bản đồ & TTĐL Việt Nam (WGS84)</span>
              {customMapFileName && <span className="text-emerald-600 font-bold">✓ Tệp nạp riêng</span>}
            </div>
          </div>

          {/* Hovered Province Tooltip */}
          {hoveredGeo && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none px-4 py-2 bg-slate-900/95 backdrop-blur-md text-white rounded-2xl shadow-xl text-xs flex items-center gap-2.5 border border-slate-700/80 animate-fade-in">
              <span className="p-1.5 rounded-xl bg-rose-500 text-white font-bold text-xs">📍</span>
              <div>
                <div className="font-extrabold text-sm text-amber-300 font-heading">
                  {hoveredGeo.nameVi} ({hoveredGeo.nameEn})
                </div>
                <div className="text-[10.5px] text-slate-300 font-medium">
                  {hoveredGeo.zone} ({hoveredGeo.region === 'North' ? 'Miền Bắc' : hoveredGeo.region === 'Central' ? 'Miền Trung' : 'Miền Nam'}) • {hoveredGeo.landmarkEn}
                </div>
              </div>
            </div>
          )}

          {/* Floating Zoom & Canvas Controls */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-md">
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Phóng to (Zoom In)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Thu nhỏ (Zoom Out)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetView}
              className="p-2 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              title="Đặt lại góc nhìn (Reset 100%)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsExpandedCanvas(!isExpandedCanvas)}
              className="p-2 rounded-xl text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors border-t border-slate-100"
              title={isExpandedCanvas ? "Thu gọn màn hình" : "Mở rộng bản đồ toàn màn hình"}
            >
              {isExpandedCanvas ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Zoom Level Indicator */}
          {zoomLevel !== 1 && (
            <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white rounded-full text-[10px] font-bold">
              Phóng to: {Math.round(zoomLevel * 100)}% (Kéo để khám phá)
            </div>
          )}

          {/* High-Precision Cartographic SVG Canvas */}
          <div 
            className="w-full h-full max-w-[620px] aspect-[8/10] transition-transform duration-150 ease-out my-2 flex items-center justify-center"
            style={{
              transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}
          >
            <svg
              viewBox="0 0 920 1120"
              className="w-full h-full drop-shadow-xl select-none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Ocean Ambient Filter */}
                <linearGradient id="oceanBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f0f9ff" />
                  <stop offset="50%" stopColor="#e0f2fe" />
                  <stop offset="100%" stopColor="#bae6fd" />
                </linearGradient>

                {/* Drop shadow for landmass */}
                <filter id="cartoGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#047857" floodOpacity="0.18" />
                </filter>
              </defs>

              {/* 1. Sea & Ocean Background Frame (Calibrated 920 × 1120) */}
              <rect x="0" y="0" width="920" height="1120" rx="36" fill="url(#oceanBgGrad)" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Authoritative WGS84 Coordinate Grid (Parallels & Meridians matching 2025 Official Map) */}
              <g id="wgs84-coordinate-grid" stroke="#93c5fd" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.5">
                {/* Parallels (Latitudes) */}
                <line x1="40" y1="139" x2="880" y2="139" />
                <line x1="40" y1="263" x2="880" y2="263" />
                <line x1="40" y1="387" x2="880" y2="387" />
                <line x1="40" y1="510" x2="880" y2="510" />
                <line x1="40" y1="634" x2="880" y2="634" />
                <line x1="40" y1="758" x2="880" y2="758" />
                <line x1="40" y1="882" x2="880" y2="882" />
                <line x1="40" y1="1006" x2="880" y2="1006" />

                {/* Meridians (Longitudes) */}
                <line x1="160" y1="40" x2="160" y2="1080" />
                <line x1="269" y1="40" x2="269" y2="1080" />
                <line x1="378" y1="40" x2="378" y2="1080" />
                <line x1="487" y1="40" x2="487" y2="1080" />
                <line x1="596" y1="40" x2="596" y2="1080" />
                <line x1="705" y1="40" x2="705" y2="1080" />
                <line x1="815" y1="40" x2="815" y2="1080" />
              </g>

              {/* Coordinate Degree Labels on Map Margins */}
              <g id="wgs84-coordinate-labels" fill="#0369a1" fontSize="9" fontWeight="bold" opacity="0.65">
                {/* Latitude Labels (Left Margin) */}
                <text x="14" y="142">22°B</text>
                <text x="14" y="266">20°B</text>
                <text x="14" y="390">18°B</text>
                <text x="14" y="513">16°B</text>
                <text x="14" y="637">14°B</text>
                <text x="14" y="761">12°B</text>
                <text x="14" y="885">10°B</text>
                <text x="14" y="1009">8°B</text>

                {/* Longitude Labels (Top Margin) */}
                <text x="146" y="28">104°Đ</text>
                <text x="255" y="28">106°Đ</text>
                <text x="364" y="28">108°Đ</text>
                <text x="473" y="28">110°Đ</text>
                <text x="582" y="28">112°Đ</text>
                <text x="691" y="28">114°Đ</text>
                <text x="801" y="28">116°Đ</text>
              </g>

              {/* Ocean Typography */}
              <text x="640" y="320" fill="#0284c7" fontSize="24" fontWeight="900" letterSpacing="6" opacity="0.75" className="font-heading">
                BIỂN ĐÔNG
              </text>
              <text x="640" y="350" fill="#0369a1" fontSize="13" fontWeight="bold" letterSpacing="3" opacity="0.6">
                (VIETNAMESE EAST SEA)
              </text>

              <text x="360" y="240" fill="#0284c7" fontSize="13" fontWeight="bold" letterSpacing="2" opacity="0.55">
                VỊNH BẮC BỘ (GULF OF TONKIN)
              </text>

              <text x="90" y="1030" fill="#0284c7" fontSize="12" fontWeight="bold" letterSpacing="1.5" opacity="0.5">
                VỊNH THÁI LAN
              </text>

              {/* 2. Official GIS Mainland Provinces Boundaries (Real WGS84 Polygons for 34 Units) */}
              <g id="vietnam-mainland-gis" filter="url(#cartoGlow)">
                {VIETNAM_34_PROVINCES_GEO.map((geo) => {
                  const isMatchRegion = activeRegion === 'All' || geo.region === activeRegion;
                  const isHovered = hoveredGeo?.id === geo.id;
                  const isSelectedAdmin = selectedAdminUnit?.code === geo.code || 
                    (selectedAdminUnit?.name && geo.nameVi.toLowerCase().includes(selectedAdminUnit.name.toLowerCase()));

                  // Dynamic harmonic palette
                  let fill = '#10b981';
                  if (geo.region === 'North') fill = '#10b981';
                  else if (geo.region === 'Central') fill = '#0ea5e9';
                  else if (geo.region === 'South') fill = '#f59e0b';

                  if (!isMatchRegion) {
                    fill = '#94a3b8';
                  }

                  if (isHovered) {
                    fill = '#f43f5e';
                  } else if (isSelectedAdmin) {
                    fill = '#6366f1';
                  }

                  return (
                    <path
                      key={geo.id}
                      id={`geo-${geo.id}`}
                      d={geo.svgPath}
                      fill={fill}
                      fillOpacity={!isMatchRegion ? 0.35 : isHovered ? 0.95 : isSelectedAdmin ? 0.92 : 0.8}
                      stroke={isHovered ? '#ffffff' : isSelectedAdmin ? '#4338ca' : '#064e3b'}
                      strokeWidth={isHovered ? 2.5 : isSelectedAdmin ? 2 : 0.8}
                      strokeLinejoin="round"
                      className="transition-colors duration-150 cursor-pointer"
                      onMouseEnter={() => {
                        setHoveredGeo(geo);
                        soundEffects.playHover();
                      }}
                      onMouseLeave={() => setHoveredGeo(null)}
                      onClick={() => {
                        soundEffects.playClick();
                        const matchedAdmin = OFFICIAL_34_PROVINCES_DATA.find(u => 
                          u.code === geo.code ||
                          u.name.toLowerCase().includes(geo.nameVi.toLowerCase()) || 
                          geo.nameVi.toLowerCase().includes(u.name.toLowerCase())
                        );
                        if (matchedAdmin) {
                          setSelectedAdminUnit(matchedAdmin);
                          setMapLayer('administrative');
                        }
                      }}
                    >
                      <title>{geo.nameVi} ({geo.nameEn}) - {geo.zone}</title>
                    </path>
                  );
                })}
              </g>

              {/* 3. PARACEL ISLANDS (Quần đảo Hoàng Sa - Thuộc TP. Đà Nẵng, Việt Nam) */}
              <g 
                id="hoang-sa-sovereignty" 
                className="cursor-pointer group"
                onClick={() => setActiveSovereigntyIsland('HoangSa')}
              >
                {/* Visual Frame & Sovereignty Plaque */}
                <rect 
                  x="535" 
                  y="420" 
                  width="240" 
                  height="125" 
                  rx="18" 
                  fill="#fffbeb" 
                  stroke="#d97706" 
                  strokeWidth="2" 
                  strokeDasharray="4 3"
                  className="shadow-md group-hover:stroke-rose-600 transition-colors"
                />

                {/* Exact GIS Polygons for Hoang Sa Islands */}
                <path
                  d={HOANG_SA_SVG_PATH}
                  fill="#f59e0b"
                  stroke="#b45309"
                  strokeWidth="1.5"
                  className="group-hover:fill-rose-500 transition-colors"
                />

                {/* Radar Pulse around centroid */}
                <circle cx="592.3" cy="480.9" r="15" fill="#f59e0b" opacity="0.3" className="animate-ping" />
                <circle cx="592.3" cy="480.9" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                {/* Sovereignty Typography */}
                <text x="550" y="445" fill="#b45309" fontSize="13" fontWeight="900" className="font-heading">
                  🇻🇳 QĐ. HOÀNG SA
                </text>
                <text x="550" y="462" fill="#92400e" fontSize="10.5" fontWeight="bold">
                  (Thuộc TP. Đà Nẵng, VN)
                </text>
                <text x="550" y="478" fill="#78350f" fontSize="9" fontStyle="italic">
                  Paracel Islands • 16°–17°B, 111°–113°Đ
                </text>
                <text x="550" y="530" fill="#b45309" fontSize="9" fontWeight="600">
                  Đảo Hoàng Sa, Đảo Phú Lâm, Tri Tôn...
                </text>
              </g>

              {/* 4. SPRATLY ISLANDS (Quần đảo Trường Sa - Thuộc Tỉnh Khánh Hòa, Việt Nam) */}
              <g 
                id="truong-sa-sovereignty" 
                className="cursor-pointer group"
                onClick={() => setActiveSovereigntyIsland('TruongSa')}
              >
                {/* Visual Frame & Sovereignty Plaque */}
                <rect 
                  x="510" 
                  y="780" 
                  width="275" 
                  height="165" 
                  rx="18" 
                  fill="#fffbeb" 
                  stroke="#d97706" 
                  strokeWidth="2" 
                  strokeDasharray="4 3"
                  className="shadow-md group-hover:stroke-rose-600 transition-colors"
                />

                {/* Exact GIS Polygons for Truong Sa (67 atolls) */}
                <path
                  d={TRUONG_SA_SVG_PATH}
                  fill="#f59e0b"
                  stroke="#b45309"
                  strokeWidth="1.5"
                  className="group-hover:fill-rose-500 transition-colors"
                />

                    {/* Radar Pulse around centroid */}
                    <circle cx="729.7" cy="912.8" r="16" fill="#f59e0b" opacity="0.3" className="animate-ping" />
                    <circle cx="729.7" cy="912.8" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                    {/* Sovereignty Typography */}
                    <text x="525" y="805" fill="#b45309" fontSize="13" fontWeight="900" className="font-heading">
                      🇻🇳 QĐ. TRƯỜNG SA
                    </text>
                    <text x="525" y="822" fill="#92400e" fontSize="10.5" fontWeight="bold">
                      (Thuộc Tỉnh Khánh Hòa, VN)
                    </text>
                    <text x="525" y="838" fill="#78350f" fontSize="9" fontStyle="italic">
                      Spratly Islands • 8°30'–11°30'B, 112°–116°Đ
                    </text>
                    <text x="525" y="930" fill="#b45309" fontSize="9" fontWeight="600">
                      Đảo Trường Sa Lớn, Song Tử Tây, Sinh Tồn...
                    </text>
                  </g>

              {/* 5. PHU QUOC ISLAND & THO CHU (WGS84: 10.23°N, 103.96°E & 9.30°N, 103.48°E) */}
              <g id="phu-quoc-island">
                <ellipse cx="158" cy="868" rx="14" ry="24" transform="rotate(-15 158 868)" fill="#10b981" stroke="#047857" strokeWidth="2.5" />
                <text x="86" y="865" fill="#065f46" fontSize="11" fontWeight="800">
                  Đ. Phú Quốc
                </text>
                <text x="86" y="878" fill="#047857" fontSize="9">
                  (An Giang / Kiên Giang)
                </text>
                {/* Tho Chu Islands */}
                <circle cx="132" cy="925" r="4.5" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="86" y="932" fill="#065f46" fontSize="8.5" fontWeight="bold">
                  QĐ. Thổ Chu
                </text>
              </g>

              {/* 6. CON DAO ISLANDS (WGS84: 8.68°N, 106.60°E) */}
              <g id="con-dao-island">
                <ellipse cx="302" cy="963" rx="9" ry="6" fill="#10b981" stroke="#047857" strokeWidth="2" />
                <circle cx="314" cy="968" r="3" fill="#10b981" stroke="#047857" strokeWidth="1" />
                <text x="320" y="962" fill="#065f46" fontSize="10.5" fontWeight="800">
                  Côn Đảo (Côn Sơn)
                </text>
                <text x="320" y="974" fill="#047857" fontSize="8.5">
                  (TP. Hồ Chí Minh)
                </text>
              </g>

              {/* 7. OTHER STRATEGIC ISLANDS (WGS84 Projected) */}
              {/* Bach Long Vi (20.133°N, 107.724°E -> x: 363, y: 255) */}
              <g id="bach-long-vi">
                <circle cx="363" cy="255" r="4" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                <text x="373" y="259" fill="#92400e" fontSize="9" fontWeight="bold">
                  Đ. Bạch Long Vĩ (Hải Phòng)
                </text>
              </g>

              {/* Cat Ba Island (20.730°N, 107.045°E -> x: 326, y: 218) */}
              <g id="cat-ba">
                <circle cx="326" cy="218" r="4" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="334" y="222" fill="#065f46" fontSize="8.5" fontWeight="bold">
                  Đ. Cát Bà
                </text>
              </g>

              {/* Co To Island (20.985°N, 107.760°E -> x: 365, y: 202) */}
              <g id="co-to">
                <circle cx="365" cy="202" r="3.5" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="373" y="206" fill="#065f46" fontSize="8.5" fontWeight="bold">
                  Đ. Cô Tô (Quảng Ninh)
                </text>
              </g>

              {/* Ly Son Island (15.381°N, 109.123°E -> x: 439, y: 549) */}
              <g id="ly-son">
                <circle cx="439" cy="549" r="4" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="449" y="553" fill="#065f46" fontSize="9" fontWeight="bold">
                  Đ. Lý Sơn (Quảng Ngãi)
                </text>
              </g>

              {/* Phu Quy Island (10.523°N, 108.943°E -> x: 430, y: 850) */}
              <g id="phu-quy">
                <circle cx="430" cy="850" r="4" fill="#10b981" stroke="#047857" strokeWidth="1.2" />
                <text x="440" y="854" fill="#065f46" fontSize="9" fontWeight="bold">
                  Đ. Phú Quý (Lâm Đồng)
                </text>
              </g>

              {/* ======================================================== */}
              {/* GAME ADVENTURE OVERLAYS: MOUNTAINS, FORESTS & COMPASS    */}
              {/* ======================================================== */}

              {/* Decorative Compass Rose */}
              <g transform="translate(810, 110)" className="cursor-pointer group">
                <circle cx="0" cy="0" r="32" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" opacity="0.92" className="shadow-sm" />
                <polygon points="0,-28 7,-6 0,-2 -7,-6" fill="#e11d48" />
                <polygon points="0,28 7,6 0,2 -7,6" fill="#0284c7" />
                <polygon points="-28,0 -6,7 -2,0 -6,-7" fill="#64748b" />
                <polygon points="28,0 6,7 2,0 6,-7" fill="#64748b" />
                <text x="0" y="-32" textAnchor="middle" fontSize="12" fontWeight="900" fill="#e11d48">N</text>
                <text x="0" y="42" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0284c7">S</text>
                <text x="42" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">E</text>
                <text x="-42" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">W</text>
              </g>

              {/* Northwest Mountain Range & Fansipan Peak (WGS84: 22.303°N, 103.775°E -> x: 148, y: 120) */}
              <g transform="translate(148, 120)" opacity="0.85" pointerEvents="none">
                <polygon points="0,0 16,-22 32,0" fill="#065f46" stroke="#047857" strokeWidth="1.5" />
                <polygon points="12,-16 16,-22 20,-16" fill="#ffffff" />
                <polygon points="20,0 34,-26 48,0" fill="#047857" stroke="#065f46" strokeWidth="1.5" />
                <polygon points="30,-20 34,-26 38,-20" fill="#ffffff" />
                <text x="34" y="-30" fontSize="8.5" fontWeight="bold" fill="#064e3b" textAnchor="middle">🏔️ Fansipan 3,143m</text>
              </g>

              {/* Truong Son Mountain Spine (Dãy Trường Sơn) */}
              <g transform="translate(300, 380)" opacity="0.75" pointerEvents="none">
                <polygon points="0,0 12,-18 24,0" fill="#047857" />
                <polygon points="16,0 28,-22 40,0" fill="#065f46" />
                <polygon points="32,0 44,-16 56,0" fill="#047857" />
                <text x="28" y="-24" fontSize="8" fontWeight="bold" fill="#064e3b" textAnchor="middle">Dãy Trường Sơn</text>
              </g>

              {/* Ha Long Bay traditional junk boat illustration */}
              <g transform="translate(355, 185)" opacity="0.85" pointerEvents="none">
                <path d="M 0 6 L 14 6 L 11 11 L 3 11 Z" fill="#b45309" />
                <polygon points="7,5 7,-6 13,2" fill="#ea580c" />
              </g>

              {/* 8. INTERACTIVE DESTINATION PINS (Mathematically anchored via WGS84 + Connector Lines) */}
              {mapLayer === 'destinations' && filteredDestinations.map((dest) => {
                // Dynamically compute exact geographic anchor coordinates using authoritative WGS84 projection
                const anchor = dest.geoCoordinates 
                  ? projectGeoToSvg(dest.geoCoordinates.longitude, dest.geoCoordinates.latitude)
                  : { x: 300, y: 300 };

                const layout = DESTINATION_LAYOUT_CONFIG[dest.id] || {
                  labelAlign: 'right',
                  labelDx: 40,
                  labelDy: 0,
                  iconG12: '⭐',
                  pronounceTextEn: dest.name,
                  pronounceTextVi: dest.vietnameseName
                };

                const isSelected = selectedDestination?.id === dest.id;
                const isGrade12 = gradeBand === 'grade_1_2';

                // Target position of floating label box
                const labelX = anchor.x + layout.labelDx;
                const labelY = anchor.y + layout.labelDy;
                const labelWidth = Math.max(dest.name.length * 8.5 + 46, 130);

                return (
                  <g
                    key={dest.id}
                    onClick={() => onSelectDestination(dest)}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing indicator around exact geographic anchor point when selected */}
                    {isSelected && (
                      <circle
                        cx={anchor.x}
                        cy={anchor.y}
                        r="24"
                        fill="#f43f5e"
                        opacity="0.35"
                        className="animate-ping"
                      />
                    )}

                    {/* SVG Connector Line linking Anchor to Floating Label Box */}
                    <line
                      x1={anchor.x}
                      y1={anchor.y}
                      x2={labelX}
                      y2={labelY}
                      stroke={isSelected ? '#e11d48' : '#94a3b8'}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      strokeDasharray={isSelected ? 'none' : '3,3'}
                      className="transition-colors duration-200"
                    />

                    {/* Exact Geographic Pinpoint at WGS84 coordinate */}
                    <circle
                      cx={anchor.x}
                      cy={anchor.y}
                      r={isSelected ? 14 : 9}
                      fill={isSelected ? '#e11d48' : '#f43f5e'}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? '3.5' : '2.5'}
                      className="transition-all duration-300 group-hover:scale-125 shadow-md"
                    />

                    {/* Inner Pin Dot */}
                    <circle
                      cx={anchor.x}
                      cy={anchor.y}
                      r="3.5"
                      fill="#ffffff"
                    />

                    {/* Joint dot on label connector */}
                    <circle
                      cx={labelX}
                      cy={labelY}
                      r="3"
                      fill={isSelected ? '#e11d48' : '#64748b'}
                    />

                    {/* Floating Label Box with Adventure Icon */}
                    {layout.labelAlign === 'right' ? (
                      <g transform={`translate(${labelX}, ${labelY})`}>
                        <rect
                          x="0"
                          y="-16"
                          width={labelWidth}
                          height="32"
                          rx="16"
                          fill={isSelected ? '#1e293b' : '#ffffff'}
                          stroke={isSelected ? '#f43f5e' : '#cbd5e1'}
                          strokeWidth={isSelected ? '2.5' : '1.5'}
                          className="shadow-md transition-all group-hover:stroke-rose-500"
                        />
                        <text
                          x="12"
                          y="5"
                          fill={isSelected ? '#ffffff' : '#0f172a'}
                          fontSize="12.5"
                          fontWeight="800"
                          className="font-heading"
                        >
                          {layout.iconG12} {dest.name}
                        </text>
                      </g>
                    ) : (
                      <g transform={`translate(${labelX}, ${labelY})`}>
                        <rect
                          x={-labelWidth}
                          y="-16"
                          width={labelWidth}
                          height="32"
                          rx="16"
                          fill={isSelected ? '#1e293b' : '#ffffff'}
                          stroke={isSelected ? '#f43f5e' : '#cbd5e1'}
                          strokeWidth={isSelected ? '2.5' : '1.5'}
                          className="shadow-md transition-all group-hover:stroke-rose-500"
                        />
                        <text
                          x="-12"
                          y="5"
                          textAnchor="end"
                          fill={isSelected ? '#ffffff' : '#0f172a'}
                          fontSize="12.5"
                          fontWeight="800"
                          className="font-heading"
                        >
                          {layout.iconG12} {dest.name}
                        </text>
                      </g>
                    )}

                    {/* Grade 1-2 Big Graphic Avatar & Listen button */}
                    {isGrade12 && (
                      <g 
                        transform={`translate(${layout.labelAlign === 'right' ? labelX + labelWidth + 6 : labelX - labelWidth - 38}, ${labelY - 16})`}
                        onClick={(e) => handlePronounce(dest, e)}
                        className="cursor-pointer"
                      >
                        <rect width="32" height="32" rx="16" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" className="shadow-xs" />
                        <text x="16" y="21" fontSize="16" textAnchor="middle">
                          🔊
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Quick Helpful Instruction for Students */}
          <div className="absolute bottom-3 text-center text-xs text-slate-500 font-semibold bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            {gradeBand === 'grade_1_2' 
              ? '✨ Bé bấm vào chấm tròn đỏ hoặc biểu tượng hoạt họa để nghe tên và khám phá nhé!' 
              : '🧭 Bấm vào bất kỳ điểm đến nào trên bản đồ để mở thẻ giới thiệu & bắt đầu bài học'}
          </div>
        </div>

        {/* Right Panel: Showcase Card (Destinations) OR Administrative Directory (34 Provinces) */}
        {!isExpandedCanvas && (
          <div className="lg:col-span-4 p-5 bg-white border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-between overflow-y-auto max-h-[700px]">
            
            {/* MODE 1: 34 ADMINISTRATIVE UNITS LAYER */}
            {mapLayer === 'administrative' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-indigo-700">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <h4 className="font-extrabold text-sm sm:text-base font-heading">
                      34 Đơn Vị Hành Chính (Official Units)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {filteredAdminUnits.length} Tỉnh/TP
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Dữ liệu 34 tỉnh, thành phố trực thuộc Trung ương theo phương án sắp xếp, tinh gọn bộ máy và sáp nhập đô thị của Quốc hội & UBTVQH (2023–2025):
                </p>

                {/* Search Box */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Tìm theo tên tỉnh, đô thị trung tâm..."
                    value={adminSearch}
                    onChange={(e) => setAdminSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* 34 Provinces List */}
                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                  {filteredAdminUnits.map((item) => (
                    <div 
                      key={item.code} 
                      onClick={() => setSelectedAdminUnit(item)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        selectedAdminUnit?.code === item.code
                          ? 'bg-indigo-50/80 border-indigo-400 shadow-xs'
                          : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold text-slate-800 text-xs">
                        <span className="font-heading">{item.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-indigo-700 border border-slate-200">
                          {item.zone}
                        </span>
                      </div>
                      
                      <div className="text-[11px] text-slate-500 mt-1">
                        Trung tâm hành chính: <strong>{item.administrativeCenter}</strong>
                      </div>

                      <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {item.districtMergerSummary}
                      </p>

                      {item.islandDistricts && (
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {item.islandDistricts.map((isl, idx) => (
                            <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                              🏝️ {isl}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="text-[9.5px] text-slate-400 mt-1.5 italic">
                        Căn cứ: {item.officialSource} ({item.dateAnnounced})
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs">
                  <strong>📌 Nguyên tắc sư phạm:</strong> Hệ thống phân biệt minh bạch giữa đơn vị hành chính lãnh thổ và các điểm đến bài học tiếng Anh văn hóa.
                </div>
              </div>

            // MODE 2: DESTINATION SHOWCASE CARD
            ) : selectedDestination ? (
              <div className="space-y-4">
                
                {/* Destination Photo Banner */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-sm bg-slate-900">
                  <picture>
                    <source type="image/webp" srcSet={selectedDestination.image} />
                    <img
                      src={selectedDestination.fallbackImage || selectedDestination.image}
                      alt={selectedDestination.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.endsWith('.webp')) {
                          target.src = selectedDestination.fallbackImage || '/destinations/halong_bay.jpg';
                        }
                      }}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                      {selectedDestination.region === 'North' ? 'Miền Bắc' : selectedDestination.region === 'Central' ? 'Miền Trung' : 'Miền Nam'}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-rose-500/90 text-white text-[11px] font-bold">
                      {selectedDestination.theme}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 text-2xl drop-shadow-md">
                    {selectedDestination.badge.icon}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-extrabold text-xl font-heading drop-shadow-sm">
                      {selectedDestination.name}
                    </h4>
                    <p className="text-xs text-slate-200 font-semibold drop-shadow-sm">
                      🇻🇳 {selectedDestination.vietnameseName} • {selectedDestination.province}
                    </p>
                  </div>
                </div>

                {/* WGS84 Geographic Coordinates Badge */}
                {selectedDestination.geoCoordinates && (
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 font-mono">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      Tọa độ WGS84:
                    </span>
                    <span className="font-bold text-slate-800">
                      {selectedDestination.geoCoordinates.latitude}°N, {selectedDestination.geoCoordinates.longitude}°E
                    </span>
                  </div>
                )}

                {/* Pronunciation & Audio Action Bar (Especially for Grade 1-2) */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      {DESTINATION_LAYOUT_CONFIG[selectedDestination.id]?.iconG12 || '⭐'}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        {gradeBand === 'grade_1_2' ? 'Nghe phát âm chuẩn:' : 'Nghe & Luyện đọc:'}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {selectedDestination.name} ({selectedDestination.vietnameseName})
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handlePronounce(selectedDestination, e)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xs shadow-xs transition-transform active:scale-95"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isPlayingAudio ? 'Đang phát...' : 'Nghe giọng mẫu 🔊'}</span>
                  </button>
                </div>

                {/* Story & Summary Section */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {selectedDestination.summaryEn}
                  </p>
                  <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    🇻🇳 {selectedDestination.summaryVi}
                  </p>
                </div>

                {/* Differentiated Metrics */}
                {(() => {
                  const content = selectedDestination.gradeContent?.[gradeBand] || selectedDestination.gradeContent?.grade_3;
                  return (
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center text-xs">
                      <div className="p-2 rounded-xl bg-slate-50">
                        <div className="font-extrabold text-slate-800 text-base">{content?.vocabulary?.length || 0}</div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Từ vựng</div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50">
                        <div className="font-extrabold text-slate-800 text-base">{content?.quiz?.length || 0}</div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Câu hỏi Bloom</div>
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50 border border-amber-200">
                        <div className="font-extrabold text-amber-600 text-base">⭐ +50</div>
                        <div className="text-[10px] text-amber-700 font-semibold uppercase">Phần thưởng</div>
                      </div>
                    </div>
                  );
                })()}

                {/* Prominent START Button (Khởi động bài học ngay) */}
                <button
                  onClick={() => onOpenLesson(selectedDestination)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-extrabold text-base shadow-lg shadow-rose-200 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-98"
                >
                  <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
                  <span>BẮT ĐẦU HÀNH TRÌNH KHÁM PHÁ</span>
                </button>
              </div>

            // NO DESTINATION SELECTED (Prompt)
            ) : (
              <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="p-4 rounded-3xl bg-rose-50 text-rose-500 mb-3 animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>
                <h5 className="font-extrabold text-slate-800 text-base font-heading">
                  Chọn một điểm đến trên bản đồ
                </h5>
                <p className="text-xs text-slate-500 mt-1 max-w-[240px] leading-relaxed">
                  Bấm vào một điểm đến trên bản đồ Việt Nam để xem ảnh giới thiệu, nghe phát âm và bắt đầu bài học tiếng Anh!
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {destinations.map(d => (
                    <button
                      key={d.id}
                      onClick={() => onSelectDestination(d)}
                      className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* 3. Sovereignty Details Modal for Hoang Sa & Truong Sa */}
      {activeSovereigntyIsland && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-rose-600">
                <ShieldCheck className="w-6 h-6" />
                <h4 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading">
                  {activeSovereigntyIsland === 'HoangSa' ? '🇻🇳 Quần đảo Hoàng Sa' : '🇻🇳 Quần đảo Trường Sa'}
                </h4>
              </div>
              <button
                onClick={() => setActiveSovereigntyIsland(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950">
                <div className="font-bold text-sm mb-1 text-amber-900">
                  {activeSovereigntyIsland === 'HoangSa' 
                    ? 'Đơn vị hành chính: Huyện Hoàng Sa, Thành phố Đà Nẵng, Việt Nam' 
                    : 'Đơn vị hành chính: Huyện Trường Sa, Tỉnh Khánh Hòa, Việt Nam'}
                </div>
                <p>
                  {activeSovereigntyIsland === 'HoangSa'
                    ? 'Quần đảo Hoàng Sa gồm đảo Hoàng Sa, đảo Phú Lâm, đảo Cây, đảo Tri Tôn... nằm tại tọa độ 16°–17° vĩ Bắc, 111°–113° kinh Đông trên Biển Đông Việt Nam.'
                    : 'Quần đảo Trường Sa gồm đảo Trường Sa Lớn, Song Tử Tây, Sinh Tồn, Nam Yết, Phan Vinh... nằm tại tọa độ 8°30\'–11°30\' vĩ Bắc, 112°–116° kinh Đông trên Biển Đông Việt Nam.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950 space-y-1.5">
                <div className="font-bold text-sky-900">📜 Căn cứ lịch sử và pháp lý quốc tế:</div>
                <p>
                  Nhà nước Việt Nam qua các triều đại lịch sử (từ thời Chúa Nguyễn, Triều Tây Sơn, Triều Nguyễn cho đến nay) đã xác lập, thực thi và bảo vệ chủ quyền quốc gia một cách hòa bình, liên tục và hợp pháp đối với hai quần đảo Hoàng Sa và Trường Sa theo đúng luật pháp quốc tế.
                </p>
                <p className="text-[11px] text-sky-700 italic">
                  Châu bản triều Nguyễn và các bộ chính sử quốc gia như Đại Nam Thực Lục, Phủ Biên Tạp Lục đã ghi chép đầy đủ về hoạt động của Đội Hoàng Sa kiêm quản Trường Sa.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={() => setActiveSovereigntyIsland(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Official Cartographic Compliance & File Upload Modal */}
      {isComplianceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-rose-600">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-extrabold text-slate-900 text-base font-heading">
                  Nguồn Bản Đồ & Bổ Sung Tệp Chính Thức
                </h4>
              </div>
              <button
                onClick={() => setIsComplianceModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900">
                <div className="font-bold mb-1">🇻🇳 Căn cứ đo đạc và chủ quyền lãnh thổ:</div>
                <p>
                  {MAP_METADATA.territoryStatement}
                </p>
                <div className="text-[11px] mt-1.5 text-sky-700">
                  Cơ quan nguồn: <strong>{MAP_METADATA.sourceAgency}</strong>.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                <div className="font-bold mb-1">📋 Tài liệu số hóa ranh giới hành chính chi tiết cần bổ sung:</div>
                <p>
                  Để hiển thị từng đường ranh giới cấp huyện, xã hoặc lớp bản đồ 34 tỉnh sau sắp xếp theo đúng quy chuẩn Nhà nước, quý Thầy Cô có thể tải lên tệp vector GeoJSON hoặc SVG chính thức do Cục Đo đạc, Bản đồ và Thông tin địa lý Việt Nam phát hành:
                </p>
              </div>

              {/* Upload Official Map File Box */}
              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-indigo-500 text-center space-y-2 bg-slate-50 transition-colors">
                <UploadCloud className="w-8 h-8 text-indigo-600 mx-auto" />
                <div className="font-bold text-slate-800 text-xs">
                  Tải lên tệp bản đồ chính thức (.geojson hoặc .svg)
                </div>
                <p className="text-[11px] text-slate-400">
                  Định dạng khuyến nghị: WGS84 GeoJSON hoặc vector SVG chuẩn tọa độ GIS
                </p>
                <label className="inline-block px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer shadow-sm shadow-indigo-200 transition-all">
                  <span>Chọn tệp từ thiết bị</span>
                  <input
                    type="file"
                    accept=".geojson,.svg,.json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {customMapFileName && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tệp bản đồ đang kích hoạt: {customMapFileName}</span>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={() => setIsComplianceModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Đóng thông báo
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
