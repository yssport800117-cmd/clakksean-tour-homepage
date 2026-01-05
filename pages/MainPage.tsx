
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { IMAGES, REVIEWS, PACKAGES, HERO_SLIDER_IMAGES, PREMIUM_SERVICE_IMAGES } from '../constants';

const MainPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPremiumImageIndex, setCurrentPremiumImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDER_IMAGES.length);
    }, 5000); // 5 seconds interval for Hero

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const premiumInterval = setInterval(() => {
      setCurrentPremiumImageIndex((prevIndex) => (prevIndex + 1) % PREMIUM_SERVICE_IMAGES.length);
    }, 4500); // 4.5 seconds interval for Premium Service

    return () => clearInterval(premiumInterval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Background Slider */}
        {HERO_SLIDER_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ease-in-out transform scale-105 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img.src})` }}
            role="img"
            aria-label={img.alt}
          />
        ))}
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-black font-bold text-sm mb-6 animate-fade-in-up">
            NO.1 필리핀 클락 전문 여행사
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up delay-100 drop-shadow-lg">
            클락 골프 & 프리미엄 휴식 여행<br />
            <span className="text-secondary">클락션투어</span>가 가장 편합니다
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 drop-shadow-md">
            복잡한 예약은 그만. 숙소, 골프, 차량까지.<br />
            현지 직영으로 거품 없이, 24시간 케어로 안전하게 모십니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a 
              href="https://open.kakao.com/o/s3ByEJJh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="w-full">
                카카오톡 3초 상담
              </Button>
            </a>
            <a 
              href="https://talk.naver.com/WV3CXKC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="white" size="lg" className="w-full">
                실시간 견적 요청
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">왜 클락 여행은 힘들까요?</h2>
            <p className="text-gray-600 text-lg">즐거워야 할 여행, 준비부터 스트레스 받지 마세요.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">복잡한 부킹 절차</h3>
              <p className="text-gray-600">골프장 따로, 호텔 따로, 차량 따로...<br/>언어도 안 통하는데 예약하다 지치시죠?</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">불투명한 가격</h3>
              <p className="text-gray-600">중간 대행사가 많아 늘어나는 수수료.<br/>현지 가격보다 비싸게 가고 계십니다.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">불안한 현지 케어</h3>
              <p className="text-gray-600">문제 발생 시 연락두절?<br/>누구에게 도움을 청해야 할지 막막합니다.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-4 bg-blue-50 rounded-xl">
              <p className="text-primary font-bold text-xl">
                💡 클락션투어는 <span className="underline decoration-secondary decoration-4 underline-offset-4">현지 직영 원스톱 시스템</span>으로 이 모든 문제를 해결했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 w-full relative aspect-video rounded-lg shadow-2xl overflow-hidden bg-gray-800">
               {PREMIUM_SERVICE_IMAGES.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt="VIP Service" 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentPremiumImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="md:w-1/2">
              <div className="mb-8">
                <h3 className="text-secondary font-bold text-lg mb-2">PREMIUM SERVICE</h3>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">황제를 위한<br/>빈틈없는 VIP 케어</h2>
                <p className="text-gray-400">공항 픽업부터 귀국하는 순간까지, 전담 가이드와 전용 VIP 밴 차량으로 편안하게 모십니다.</p>
              </div>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  <span>전 일정 전용 VIP 밴 기사 포함</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  <span>eTravel·입국 수속 대행 서비스</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  <span>맛집 & 엔터테인먼트 예약</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  <span>노쇼핑, 노옵션 원칙 준수</span>
                </li>
              </ul>
              <div>
                <div className="mb-12"></div>
                <Link to="/services">
                  <div className="inline-block">
                    <Button variant="secondary">서비스 자세히 보기 &rarr;</Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Packages Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">인기 추천 패키지</h2>
            <p className="text-gray-600">재방문율 1위, 검증된 코스만 추천합니다.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map(pkg => (
              <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {pkg.tags.map(tag => (
                      <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-primary">{pkg.price}</span>
                    <Link to="/golf-packages" className="text-sm text-gray-500 hover:text-black font-medium flex items-center gap-1">
                      자세히보기 &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Updated) */}
      <section className="py-20 bg-[#0E1118] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Column: Title & Metrics */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                재방문율이 증명하는<br/>
                <span className="text-primary">클락션투어</span>의 퀄리티
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                고객님들의 실제 경험이 만든 신뢰, 숫자로 확인하세요.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-[#1A5FFF] mb-2">100+</div>
                  <div className="text-[#D0D0D0] text-base">월 평균 상담</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-[#1A5FFF] mb-2">1,000+</div>
                  <div className="text-[#D0D0D0] text-base">골프팀 행사 진행</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-[#1A5FFF] mb-2">4.9 / 5.0</div>
                  <div className="text-[#D0D0D0] text-base">고객 만족도</div>
                </div>
              </div>
            </div>

            {/* Right Column: Review Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-[#131722] rounded-[14px] p-8 md:p-10 relative border border-gray-800 shadow-2xl">
                <div className="absolute top-0 right-0 mt-6 mr-6">
                  <span className="bg-secondary text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    BEST REVIEW
                  </span>
                </div>
                
                <div className="flex text-secondary mb-4">
                  {'★★★★★'}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-white">
                  "처음엔 반신반의했는데, 공항 픽업부터 골프장 부킹, 저녁 식사 장소까지 완벽했습니다. 
                  <span className="text-blue-400 font-medium"> 특히 총무님 혜택이 쏠쏠하네요.</span> 다음 달에 친구들이랑 또 갑니다."
                </blockquote>

                <div className="flex items-center gap-4 border-t border-gray-700 pt-6">
                  <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                    <img src="https://i.imgur.com/oAi6aUa.jpg" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">김*수 고객님</div>
                    <div className="text-sm text-gray-400">50대, 사업가 / 3박 5일 풀빌라 패키지 이용</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-16 text-center flex flex-col items-center">
             <Button 
               variant="outline" 
               className="border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all text-xl font-bold py-4 px-8"
               onClick={() => window.open("https://band.us/@clarkjoin", "_blank", "noopener,noreferrer")}
             >
               클락 골프 조인센터 밴드 바로가기 &rarr;
             </Button>
             <p className="mt-4 text-sm text-gray-400 font-medium">
               실시간 후기 · 조인 일정 · 공지 확인 가능
             </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            지금 문의하면 <span className="text-secondary inline-block border-b-4 border-secondary pb-1">오픈기념</span> 특별 혜택!
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            저희 클락션투어에서는 단체팀 이용 시, 고생 하시는 <span className="text-white font-bold">총무님(견적 확인·진행 담당자)</span>께 <br className="hidden md:block"/>
            감사의 의미로 <span className="text-secondary font-bold">특별한 혜택</span>을 드리고 있습니다.<br/>
            망설이지 말고 지금 바로 상담받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://open.kakao.com/o/s3ByEJJh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="shadow-2xl w-full">
                카카오상담하기
              </Button>
            </a>
            <a 
              href="https://talk.naver.com/WV3CXKC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="white" size="lg" className="shadow-2xl text-primary w-full">
                1:1맞춤견적요청
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
