
import React from 'react';
import { PACKAGES, IMAGES } from '../constants';
import Button from '../components/Button';

const GolfPackagesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">골프 & 패키지</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            클락 최고의 명문 골프장 라운딩과 휴식을 한번에.<br/>
            고객님의 취향과 일정에 맞춘 다양한 패키지가 준비되어 있습니다.
          </p>
        </div>
      </div>

      {/* Package Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">추천 패키지</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
              <div className="h-64 relative overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex gap-2">
                    {pkg.tags.map(tag => (
                      <span key={tag} className="bg-secondary text-black text-xs font-bold px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{pkg.title}</h3>
                <p className="text-gray-600 mb-6 text-sm flex-1">{pkg.description}</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                   <div className="flex justify-between items-end mb-4">
                     <span className="text-gray-500 text-sm">1인 기준</span>
                     <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                   </div>
                   <a 
                     href="https://open.kakao.com/o/s3ByEJJh" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block w-full"
                   >
                     <Button fullWidth variant="primary">상담 및 예약</Button>
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Golf Course Intro */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 border-l-4 border-primary pl-4">클락 내 주요 골프장 라인업</h2>
          <p className="text-gray-600 pl-5">재방문율이 높은 골퍼들이 선택하는 디하이츠·미모사·코리아 C.C만 선별해 소개합니다.</p>
        </div>
        
        <div className="space-y-12">
          {/* Block 1: Mimosa C.C */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="md:w-1/2 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img src="https://i.imgur.com/MaVp9BZ.jpg" alt="미모사 CC" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="md:w-1/2">
              <span className="text-secondary font-bold text-sm tracking-widest mb-2 block">MIMOSA GOLF COURSE</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">미모사 C.C</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                '타이거 우즈가 극찬한 필리핀 최고 명문 골프장'으로 알려진 미모사 C.C는
                아름다운 조경과 100년 넘은 아카시아 나무들이 어우러진 코스에서
                품격 있는 라운딩을 즐기실 수 있습니다.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 36홀 규모 (마운틴 / 아카시아)</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 클락 공항 기준 차량 15분 내외</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 페어웨이 카트 진입 가능</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 한국인 선호도 최상 골프장</li>
              </ul>
            </div>
          </div>

          {/* Block 2: D'Heights C.C */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="md:w-1/2 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img src="https://i.imgur.com/1JPa0Ic.jpg" alt="디하이츠 CC" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="md:w-1/2">
              <span className="text-secondary font-bold text-sm tracking-widest mb-2 block">D'HEIGHTS GOLF CLUB</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">디하이츠 C.C (구 썬밸리)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                해발 370m 고지에 위치해 시원한 바람과 함께 라운딩이 가능한 코스입니다.
                클락 시내가 한눈에 내려다보이는 파노라마 뷰와 다채로운 코스 레이아웃이 특징입니다.
              </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 36홀 규모</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 한국 기업 운영, 안정적인 관리</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 페어웨이·그린 컨디션 우수</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 난이도 있는 홀 배치로 손맛 좋은 코스</li>
              </ul>
            </div>
          </div>

          {/* Block 3: Korea C.C */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="md:w-1/2 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img src="https://i.imgur.com/psCW6Rj.jpg" alt="코리아 CC" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="md:w-1/2">
              <span className="text-secondary font-bold text-sm tracking-widest mb-2 block">KOREA COUNTRY CLUB</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">코리아 C.C</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                한국 골퍼를 위해 설계된 코리아 C.C는
                넓은 페어웨이와 직관적인 코스 구성 덕분에
                초보부터 상급자까지 모두 편안하게 라운딩할 수 있는 클락 대표 인기 코스입니다.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 18홀 규모, 라운딩 동선 효율적</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 위더스·한인타운 숙소와 접근성 우수</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 가성비 좋은 그린피</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 초보·중급 골퍼 동반 팀에 특히 추천</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolfPackagesPage;
