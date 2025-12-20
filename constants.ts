
import { NavLink, Package, Hotel, Review, FAQ } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: '홈', path: '/' },
  { label: '골프 & 패키지', path: '/golf-packages' },
  { label: '숙소 & 카지노', path: '/stay-casino' },
  { label: '프리미엄 서비스', path: '/services' },
  { label: '후기 & 커뮤니티', path: '/community' },
];

export const IMAGES = {
  HERO_BG: "https://loremflickr.com/1600/900/golf,resort/all",
  GOLF_COURSE: "https://loremflickr.com/800/600/golfcourse/all",
  HOTEL_CASINO: "https://loremflickr.com/800/600/casino,hotel/all",
  VIP_CAR: "https://loremflickr.com/800/600/limousine,van/all",
  COMMUNITY_MEET: "https://loremflickr.com/800/600/handshake,golf/all",
  POOL_VILLA: "https://loremflickr.com/800/600/pool,villa/all",
  PORTRAIT_MAN: "https://loremflickr.com/200/200/man,portrait/all",
};

export const HERO_SLIDER_IMAGES = [
  {
    src: 'https://i.imgur.com/La82IEj.jpg',
    alt: '클락 골프 여행 전경'
  },
  {
    src: 'https://i.imgur.com/eHaxBb0.jpg',
    alt: '고급 리조트 시설'
  },
  {
    src: 'https://i.imgur.com/fUvLECv.jpg',
    alt: '편안한 골프 라운딩'
  }
];

export const PREMIUM_SERVICE_IMAGES = [
  'https://i.imgur.com/47Yq66n.jpg',
  'https://i.imgur.com/GdWiZXs.jpg',
  'https://i.imgur.com/Y317alm.jpg'
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    title: '베스트셀러 3박5일 호텔팩',
    description: '가장 인기 있는 코스로 구성된 실속형 패키지. 디하이츠CC + 코리아CC 라운딩 포함.',
    price: '₩844,000~',
    image: 'https://i.imgur.com/dhvnREl.jpg',
    tags: ['인기No.1', '실속형', '3박5일'],
  },
  {
    id: 'p2',
    title: '황제 프라이빗 풀빌라 팩',
    description: '우리끼리만 즐기는 프라이빗 풀빌라와 전담 가이드, VIP 의전 차량 제공.',
    price: '₩922,000~',
    image: 'https://i.imgur.com/LI1y8r8.jpg',
    tags: ['프라이빗', '풀빌라', 'VIP케어'],
  },
  {
    id: 'p3',
    title: '무제한 라운딩 & 카지노',
    description: '낮에는 골프, 밤에는 카지노. 24시간이 즐거운 올인원 엔터테인먼트 패키지.',
    price: '상담문의',
    image: 'https://i.imgur.com/ngrEW8f.jpg',
    tags: ['무제한골프', '카지노', '올인원'],
  },
];

export const HOTELS: Hotel[] = [
  {
    id: 'h1',
    name: '스위소텔 클락(Swissôtel Clark) · 로이스 호텔(Royce Hotel) · 위더스 호텔(Widus Hotel)',
    type: 'HOTEL',
    description: '클락을 대표하는 5성급 호텔 라인업입니다. 카지노와 바로 연결되거나 인접해 이동이 매우 편리합니다.',
    rating: 5,
    image: 'https://i.imgur.com/cMyly1d.jpg',
    features: ['5성급', '카지노 인접', '조식 포함'],
  },
  {
    id: 'h2',
    name: '클락 프라이빗 풀빌라',
    type: 'POOL_VILLA',
    description: '4룸~7룸 대형 풀빌라. 전담 메이드와 기사가 상주하여 편안한 휴식을 보장합니다.',
    rating: 4.8,
    image: 'https://i.imgur.com/LuiSJIb.jpg',
    features: ['개인수영장', 'BBQ파티', '전담메이드'],
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: '김** (52세)',
    date: '2023.10.15',
    content: '다른 여행사 쓰다가 클락션투어로 바꿨는데 확실히 다릅니다. 가이드분이 센스있게 다 챙겨주셔서 골프만 치면 되니 너무 편했네요.',
    rating: 5,
    image: IMAGES.PORTRAIT_MAN,
  },
  {
    id: 'r2',
    author: '이** (48세)',
    date: '2023.11.02',
    content: '친구 4명이서 풀빌라 잡고 다녀왔습니다. 숙소 컨디션 대박이고 저녁에 바비큐 파티 준비해주신 것도 최고였습니다. 내년에 또 갈게요.',
    rating: 5,
  },
  {
    id: 'r3',
    author: '박** (60세)',
    date: '2023.09.20',
    content: '공항 픽업부터 샌딩까지 의전 차량이 너무 좋았습니다. 카지노 안내도 잘 해주셔서 재밌게 놀다 갑니다.',
    rating: 4.5,
  },
];

export const FAQS: FAQ[] = [
  {
    question: '예약은 어떻게 진행되나요?',
    answer: '카카오톡 상담 또는 견적 요청을 남겨주시면 담당자가 스케줄 확인 후 상세 견적서를 발송해 드립니다. 입금 확인 후 바우처가 발행됩니다.',
  },
  {
    question: '현지에서 추가 비용이 있나요?',
    answer: '패키지에 포함된 내역 외에 캐디팁, 개인 경비, 매너팁 등은 현지에서 지불하셔야 합니다. 사전에 투명하게 안내해 드립니다.',
  },
  {
    question: '비행기 표는 포함인가요?',
    answer: '항공권은 포함되어 있지 않습니다. 고객님께서 직접 발권하시거나, 요청 시 최저가 항공권을 대행 예약해 드립니다.',
  },
];
