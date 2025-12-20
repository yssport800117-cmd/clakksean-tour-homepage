import React from 'react';
import { HOTELS, IMAGES } from '../constants';
import Button from '../components/Button';

const StayCasinoPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">숙소 & 카지노</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            최고급 호텔의 럭셔리함과 프라이빗 풀빌라의 여유로움.<br/>
            그리고 클락의 화려한 밤을 책임질 카지노 가이드까지.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hotels & Villas */}
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">엄선된 숙소</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {HOTELS.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="h-72 relative">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-primary flex items-center gap-1">
                  <span>★</span> {hotel.rating}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${hotel.type === 'HOTEL' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {hotel.type === 'HOTEL' ? '5성급 호텔' : '프라이빗 풀빌라'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{hotel.name}</h3>
                <p className="text-gray-600 mb-6 flex-1">{hotel.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">주요 특징:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.features.map(feature => (
                      <span key={feature} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href="https://open.kakao.com/o/s3ByEJJh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" fullWidth>예약문의</Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Casino Guide */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" 
               style={{ backgroundImage: "url('https://i.imgur.com/gLCbFka.jpg')", backgroundSize: 'cover' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-secondary">클락 카지노 가이드</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Block 1: Hann Casino */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 border-b border-gray-600 pb-2">한 카지노 (Hann Casino)</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  클락 내 핵심권, 최대 규모의 카지노 리조트입니다. 스위소텔 및 메리어트 호텔과 연결되어 있어 접근성이 매우 뛰어납니다. 쾌적한 시설과 다양한 게임 테이블을 보유하고 있습니다.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 위치: 클락 중심부</li>
                  <li>• 특징: 최신 시설, 럭셔리 엔터테인먼트</li>
                </ul>
              </div>
              
              {/* Block 2: Royce Casino */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 border-b border-gray-600 pb-2">로이스 카지노 (Royce Casino)</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  최근 리노베이션을 통해 새롭게 태어난 로이스 카지노입니다. 한국인 친화적인 서비스와 편안한 분위기로 많은 사랑을 받고 있습니다. 부담 없이 게임을 즐기기에 적합합니다.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 위치: 클락 공항 인근</li>
                  <li>• 특징: 한국인 친화적, 가성비</li>
                </ul>
              </div>

              {/* Block 3: Hilton Clark Casino */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 border-b border-gray-600 pb-2">힐튼 카지노 (Hilton Clark Casino)</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  클락 공항과 가까운 힐튼 클락 호텔 내에 위치한 카지노로, 조용하고 세련된 분위기에서 여유 있게 게임을 즐기기에 좋습니다. 호텔 투숙객은 객실–카지노 동선이 편리해 비즈니스·가족 여행객 모두에게 추천드립니다.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 위치: Clark Hilton Hotel 내</li>
                  <li>• 특징: 고급스러운 인테리어, 조용한 분위기, 호텔 투숙객 동선 최적</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-4 bg-black/30 rounded-lg border border-white/10">
              <p className="text-sm text-center text-gray-300">
                ※ 클락션투어는 건전한 게임 문화를 지향합니다. 카지노 방문 시 VIP 의전 및 안전한 환전/송금 서비스를 도와드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCasinoPage;