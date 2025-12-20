
import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import Button from '../components/Button';

// Kakao Open Chat Link Constant
// Explicitly typed as string to prevent TypeScript from inferring a literal type,
// which avoids unintentional comparison errors when checking for '#' or empty values.
const KAKAO_OPENCHAT_URL: string = "https://open.kakao.com/o/s3ByEJJh";

const ServicesPage: React.FC = () => {
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);

  const otherServices = [
    {
      title: 'VIP 의전 차량',
      desc: '공항 픽업/샌딩부터 골프장 이동까지, 최신형 벤 and 리무진으로 편안하게 모십니다. 베테랑 기사가 안전 운행을 책임집니다.',
      img: 'https://i.imgur.com/QIsvCIs.jpg',
      icon: '🚐'
    },
    {
      title: '맛집 & 엔터테인먼트 예약',
      desc: '현지인만 아는 찐맛집부터 고급 레스토랑, 마사지, KTV 등 유흥까지 검증된 곳만 예약 대행해 드립니다.',
      img: '', // Placeholder, will use slides
      slides: [
        'https://i.imgur.com/2VBm17P.jpg',
        'https://i.imgur.com/bvk0Djr.jpg',
        'https://i.imgur.com/VPBiWVA.jpg'
      ],
      icon: '🍽️'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFoodIndex((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleEtravelClick = () => {
    // Check if the URL is valid before attempting to open it.
    if (!KAKAO_OPENCHAT_URL || KAKAO_OPENCHAT_URL === '#') {
      alert('카카오 오픈채팅 링크가 설정되지 않았습니다. 관리자에게 문의해주세요.');
      return;
    }
    window.open(KAKAO_OPENCHAT_URL, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">프리미엄 서비스</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            여행의 질을 높여주는 클락션투어만의 세심한 배려.<br/>
            작은 불편함 하나까지 해결해 드립니다.
          </p>
        </div>
      </div>

      {/* Simplified eTravel Section */}
      <div className="bg-blue-50 py-16" id="etravel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4 shadow-md">
              클락션투어 예약 고객 전용
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              eTravel·입국 수속,<br className="md:hidden" /> 클락션투어가 대신 처리해드립니다.
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              클락션투어 예약 고객은 <span className="font-bold text-primary border-b-2 border-primary">100% 무료 대행</span>.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto border border-blue-100 p-10 md:p-16 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
                <span className="text-2xl">💡</span>
                신청 후 1~2일 내 QR코드 카카오톡 발송
              </div>
              
              <div className="w-full max-w-md">
                <Button 
                  fullWidth 
                  size="lg" 
                  className="text-lg shadow-xl hover:translate-y-0.5 transition-transform py-5"
                  onClick={handleEtravelClick}
                >
                  카카오톡에서 eTravel 대행 신청하기 &rarr;
                </Button>
              </div>

              <p className="mt-6 text-sm text-gray-400 font-medium">
                (입국 1회용 / 재사용 불가)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Services */}
      <div className="container mx-auto px-4 py-20 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">기타 프리미엄 서비스</h2>
        <div className="grid gap-16 max-w-5xl mx-auto">
          {otherServices.map((service, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg group h-64 md:h-80">
                  {service.slides ? (
                    service.slides.map((slide, i) => (
                      <img 
                        key={i}
                        src={slide}
                        alt={service.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                          i === currentFoodIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))
                  ) : (
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 px-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-2 text-primary shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                <div className="w-20 h-1.5 bg-secondary rounded-full mb-4"></div>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <ul className="space-y-2 mt-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm md:text-base">24시간 언제든 대응 가능합니다.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm md:text-base">거품 없는 현지 실비 정산 원칙을 준수합니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-4">특별한 요청사항이 있으신가요?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            기념일 이벤트, 비즈니스 미팅, 통역 등 무엇이든 말씀해 주세요.<br/>
            클락션투어의 전문 컨시어지가 도와드립니다.
          </p>
          <a 
            href={KAKAO_OPENCHAT_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" size="lg" className="border-2 font-bold">1:1 맞춤 서비스 문의</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
