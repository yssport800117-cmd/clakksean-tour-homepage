
import React, { useState, useEffect } from 'react';
import { FAQS } from '../constants';
import Button from '../components/Button';

const CommunityPage: React.FC = () => {
  // State to track which snapshot album is open and which photo inside it is selected
  const [lightboxState, setLightboxState] = useState<{ snapshotIdx: number; photoIdx: number } | null>(null);

  const reviews = [
    {
      id: 1,
      name: "박*현 님",
      type: "골프팀(4인)",
      date: "2025.10.20",
      content: "3박 5일 친구들과 함께 여행, 위더스 호텔 컨디션 최고였습니다. 가이드님이 추천해주신 현지 맛집 계요리가 아직도 생각나네요.",
      rating: 5,
    },
    {
      id: 2,
      name: "최*민 님",
      type: "자유여행(1인)",
      date: "2025.10.05",
      content: "혼자 가서 걱정했는데 밴드 조인으로 좋은 형님들 만났습니다. 혼자 오신 분들도 걱정 말고 오세요. 클락션투어에서 매칭 잘 해줍니다.",
      rating: 5,
    },
    {
      id: 3,
      name: "이*준 님",
      type: "비즈니스",
      date: "2025.11.12",
      content: "급하게 잡힌 일정이라 숙소 잡기가 어려웠는데, 담당자님이 백방으로 알아봐 주셔서 풀빌라 예약했습니다. 그리고 eTravel·입국 수속, 클락션투어가 대신 처리해 줘서 너무 편했습니다.서비스 감동입니다.",
      rating: 4,
    }
  ];

  const snapshots = [
    { 
      id: 1, 
      caption: "코리아 C.C 18홀 실전 라운딩", 
      gallery: [
        { url: "https://i.imgur.com/Bwf1131.jpg", desc: "코리아 C.C 라운딩 시작 전 실제 이용 골프카트 대기 현장" },
        { url: "https://i.imgur.com/DM4aQr4.jpg", desc: "코리아 C.C 18홀 라운딩 종료 후 고객팀 기념 사진" },
        { url: "https://i.imgur.com/ifzMy8Y.jpg", desc: "클락션투어 실고객 코리아 C.C 라운딩 실전 진행 모습" },
        { url: "https://i.imgur.com/wqkJlB2.jpg", desc: "코리아 C.C 데스크 결제후 티켓 전달 하는곳" },
        { url: "https://i.imgur.com/VeTP3Xp.jpg", desc: "코리아 C.C 메인 정문 입구 전경, 실제 차량 진입 동선" },
        { url: "https://i.imgur.com/KbmUjsJ.jpg", desc: "코리아 C.C 클럽하우스 외부 전경, 고객 대기 공간" },
        { url: "https://i.imgur.com/beXC636.jpg", desc: "코리아 C.C 클럽하우스 내부 카페 실사용 모습" },
        { url: "https://i.imgur.com/uRh4YKr.jpg", desc: "클럽하우스 테이블석에서 바라본 실제 필드 전경" }
      ]
    },
    { 
      id: 2, 
      caption: "카지노 호텔 실제 투숙 객실", 
      gallery: [
        { url: "https://i.imgur.com/pnOb3Jh.jpg", desc: "실제 고객이 투숙한 카지노 호텔 트윈 객실" },
        { url: "https://i.imgur.com/idSypSo.jpg", desc: "실제 고객이 이용하는 카지노 호텔 인피니티 수영장" },
        { url: "https://i.imgur.com/7VQ57br.jpg", desc: "클락 카지노 인근 실제 사용 호텔 외관 전경" },
        { url: "https://i.imgur.com/rRfHKUU.jpg", desc: "실제 고객이 사용하는 카지노 호텔 객실 욕실" },
        { url: "https://i.imgur.com/FGbrv8W.jpg", desc: "실제 투숙 기준으로 관리되는 카지노 호텔 욕실 세면대" },
        { url: "https://i.imgur.com/bZ0xF73.jpg", desc: "2인 이상 고객이 실제 이용하는 카지노 호텔 객실" },
        { url: "https://i.imgur.com/Mnhvcfv.jpg", desc: "실제 고객 휴식 용도로 운영되는 카지노 호텔 수영장" },
        { url: "https://i.imgur.com/bUQ26eH.jpg", desc: "야간에도 실제 고객이 이용하는 카지노 호텔 외부 전경" },
        { url: "https://i.imgur.com/UnjWhKx.jpg", desc: "실제 고객 이용 기준으로 운영되는 카지노 호텔 조식 레스토랑" }
      ]
    },
    { 
      id: 3, 
      caption: "팀 전용 프라이빗 풀빌라 휴식", 
      gallery: [
        { url: "https://i.imgur.com/c8eMqsL.jpg", desc: "팀 단위 고객이 실제 이용하는 프라이빗 풀빌라 야간 전경" },
        { url: "https://i.imgur.com/UtrqZSx.jpg", desc: "고객 귀중품 보관을 위한 풀빌라 객실 내 금고 실제 설치 모습" },
        { url: "https://i.imgur.com/EwoGtQp.jpg", desc: "라운딩 후 대표님들 실제 이용한 풀빌라 내부 저녁 술상 테이블" },
        { url: "https://i.imgur.com/keGS9iE.jpg", desc: "단체 고객 요청 시 제공되는 레촌 파티 실제 서비스 모습" },
        { url: "https://i.imgur.com/HaUC9VC.jpg", desc: "외부 간섭 없이 이용 가능한 풀빌라 전용 수영장" },
        { url: "https://i.imgur.com/90OJZ0N.jpg", desc: "풀빌라 내부 공용 냉장고 및 스낵·음료 자유 이용 공간" },
        { url: "https://i.imgur.com/Gs0pr5I.jpg", desc: "팀 단위 고객이 실제 사용하는 풀빌라 전용 욕실 시설" },
        { url: "https://i.imgur.com/JojC7MY.jpg", desc: "단체 조리 및 휴식이 가능한 풀빌라 주방 및 거실 공간" },
        { url: "https://i.imgur.com/83rHl0A.jpg", desc: "실제 고객이 투숙한 풀빌라 전용 침실 내부" },
        { url: "https://i.imgur.com/mxyKxhD.jpg", desc: "풀빌라 투숙 고객에게 실제 제공되는 한식 조식 상차림" }
      ]
    },
    { 
      id: 4, 
      caption: "현지 단골 맛집 저녁 식사", 
      gallery: [
        { url: "https://i.imgur.com/ZcfnpAZ.jpg", desc: "앙헬레스 대표 맛집 미쓰진 순대국" },
        { url: "https://i.imgur.com/QYGSzQS.jpg", desc: "앙헬레스 현지 인기 앵그리크랩 전문점" },
        { url: "https://i.imgur.com/DRjxxCw.jpg", desc: "클락 현지 레드크랩 매장 내부 수조 실제 운영 모습" },
        { url: "https://i.imgur.com/pHpAVOz.jpg", desc: "클락 현지 전통 요리 전문점 마타미 식당 입구 전경" },
        { url: "https://i.imgur.com/tbhX1TV.jpg", desc: "클락션투어 고객이 실제 방문한 마타미 식당 실내 테이블 이용 장면" },
        { url: "https://i.imgur.com/I0dF6Xz.jpg", desc: "중식 코스 요리 양장피 실제 주문 후 테이블 세팅 모습" },
        { url: "https://i.imgur.com/l3FCBtF.jpg", desc: "현지 중식당에서 실제 제공된 한상 차림 단체 식사 구성" },
        { url: "https://i.imgur.com/7fM6Ypq.jpg", desc: "앙헬레스 현지 해산물 식당에서 실제 제공된 코끼리조개 요리" },
        { url: "https://i.imgur.com/suyspYM.jpg", desc: "앙헬레스 앵그리크랩 대표 메뉴 실제 서빙 장면" },
        { url: "https://i.imgur.com/FxxyNXJ.jpg", desc: "염소탕 전문점 대나무집 외부 전경 실제 방문 촬영" },
        { url: "https://i.imgur.com/qDzBles.jpg", desc: "현지 숯불구이 매장에서 실제 굽고 있는 꼬치 요리 조리 장면" },
        { url: "https://i.imgur.com/FLnjkLv.jpg", desc: "현지 숯불 화덕 위에서 즉석 조리 중인 고기 요리 실제 모습" },
        { url: "https://i.imgur.com/AQDPrNW.jpg", desc: "단체 고객 예약 시 풀빌라로 실제 배달된 현지식 세트 구성" }
      ]
    },
    { 
      id: 5, 
      caption: "클락 액티비티", 
      gallery: [
        { url: "https://i.imgur.com/cL8Q2XJ.jpg", desc: "대표님 일정으로 실제 진행된 클락 ATV 체험 출발 전 현장" },
        { url: "https://i.imgur.com/Q58TLMb.jpg", desc: "클락 화산 계곡 코스로 실제 주행한 ATV 라이딩 구간" },
        { url: "https://i.imgur.com/gs3GAzt.jpg", desc: "ATV 체험 후 실제 제공된 한식 포함 현지식 식사" },
        { url: "https://i.imgur.com/GccZ7fl.jpg", desc: "대표님 일정 중 실제 방문한 클락 사격장 접수 데스크" },
        { url: "https://i.imgur.com/9Ezs6g6.jpg", desc: "권총& 총알탄창" },
        { url: "https://i.imgur.com/EM7F7jr.jpg", desc: "대표님 사격 실제 체험 진행 장면" },
        { url: "https://i.imgur.com/itvzKkh.jpg", desc: "수빅 방카 호핑투어" },
        { url: "https://i.imgur.com/el1Gz3r.jpg", desc: "수빅 방카 바나나 구이" },
        { url: "https://i.imgur.com/vmrYNcF.jpg", desc: "수빅 요트 체험 씨푸드" },
        { url: "https://i.imgur.com/ZHf46PI.jpg", desc: "수빅 호핑투어 식사포함" },
        { url: "https://i.imgur.com/HWdukQQ.jpg", desc: "수빅만 전경" },
        { url: "https://i.imgur.com/IoOsvIE.jpg", desc: "수빅요트 체험 대표님과 클락션" },
        { url: "https://i.imgur.com/xcvM8ZU.jpg", desc: "수빅요트체험 대표님 단체샷1" },
        { url: "https://i.imgur.com/x5EIT1w.jpg", desc: "푸닝온천 입구에서 대표님들" },
        { url: "https://i.imgur.com/cXXLRon.jpg", desc: "대표님 가족 일정으로 진행된 실제 아쿠아플래닛 이용 모습" },
        { url: "https://i.imgur.com/6YSiUlS.jpg", desc: "푸닝 온천 이동 전 실제 지프차 탑승 준비 장면" },
        { url: "https://i.imgur.com/uqQf5Fi.jpg", desc: "푸닝 온천 화산 모래 마사지 실제 체험 현장" },
        { url: "https://i.imgur.com/rHDlr9e.jpg", desc: "푸닝온천 전경" }
      ]
    },
    { 
      id: 6, 
      caption: "미모사 C.C 실전 라운딩", 
      gallery: [
        { url: "https://i.imgur.com/WyHLaMR.jpg", desc: "미모사CC 타이거우즈 코스 라운딩" },
        { url: "https://i.imgur.com/fBTRdgP.jpg", desc: "미모사CC 메인 코스 티박스" },
        { url: "https://i.imgur.com/eZmtoO6.jpg", desc: "대표님 야간 일정으로 실제 진행된 미모사CC 야간 라운딩" },
        { url: "https://i.imgur.com/FSWAoYb.jpg", desc: "미모사CC 시그니처 워터 해저드 홀 실제 플레이 구간" },
        { url: "https://i.imgur.com/28vIebm.jpg", desc: "라운딩 전후 실제 이용한 미모사CC 클럽하우스 전경" },
        { url: "https://i.imgur.com/qAezbZG.jpg", desc: "야간 라운딩 종료 후 실제 이용한 미모사CC 클럽하우스 외관" }
      ]
    },
    { 
      id: 7, 
      caption: "썬밸리 C.C 파노라마 라운딩", 
      gallery: [
        { url: "https://i.imgur.com/awxtcSr.jpg", desc: "실제 클락션투어 고객님들과 진행한 썬밸리 C.C 단체 라운딩 현장" },
        { url: "https://i.imgur.com/Kask5R4.jpg", desc: "라운딩 종료 후 고객님 단체 기념 촬영 실제 진행 모습" },
        { url: "https://i.imgur.com/9x7Cdb3.jpg", desc: "라운딩 중 실제 제공되는 썬밸리 클럽하우스 망고 쉐이크" },
        { url: "https://i.imgur.com/4Qs6tSq.jpg", desc: "재방문률 높은 썬밸리 C.C 대표 시그니처 홀 실전 플레이 구간" },
        { url: "https://i.imgur.com/jeLOpyw.jpg", desc: "썬밸리 클럽하우스에서 실제 고객이 바라본 라운딩 전경" },
        { url: "https://i.imgur.com/qqjUFi8.jpg", desc: "라운딩 전후 실제 이용하는 썬밸리 클럽하우스 식음 공간" },
        { url: "https://i.imgur.com/ghmXCsx.jpg", desc: "고객님들이 가장 많이 촬영하는 썬밸리 포토 시그니처 스팟" },
        { url: "https://i.imgur.com/tFPMgCY.jpg", desc: "클락션투어 실운영 기준으로 이용하는 썬밸리 C.C 전경" },
        { url: "https://i.imgur.com/riIxykk.jpg", desc: "실제 고객 일정 중 클락션 스태프 및 동반 고객 기념 촬영" }
      ]
    },
    { 
      id: 8, 
      caption: "노쇼핑 정찰제 마사지 샵", 
      gallery: [
        { url: "https://i.imgur.com/GWwLjRo.jpg", desc: "클락션투어 고객이 실제 이용하는 리본 마사지 개별 마사지 베드" },
        { url: "https://i.imgur.com/6Xt5fVS.jpg", desc: "마사지 전 대기 및 휴식을 위한 리본 마사지 내부 소파 공간" },
        { url: "https://i.imgur.com/YDAEpDD.jpg", desc: "리본 마사지 고객 전용 화장실 내부 실제 이용 모습" },
        { url: "https://i.imgur.com/8nQp9IO.jpg", desc: "리본 마사지 샵 외관 전경" },
        { url: "https://i.imgur.com/aoTKRbE.jpg", desc: "밀크스파 고객 전용 세신 베드 실제 운영 모습" },
        { url: "https://i.imgur.com/TKNVhz5.jpg", desc: "밀크스파 정찰제 운영 카운터 및 접수 데스크 실전 현장" },
        { url: "https://i.imgur.com/RQyk3cQ.jpg", desc: "솔 마사지 풋 마사지 전용 좌석 실제 운영 구역" },
        { url: "https://i.imgur.com/yp5pUxW.jpg", desc: "솔 마사지 내부 개별 마사지 룸 실사용 현장" },
        { url: "https://i.imgur.com/clxjBMT.jpg", desc: "정스파 고객 대기 전용 라운지 실제 이용 공간" },
        { url: "https://i.imgur.com/JVEDw5v.jpg", desc: "정스파 리셉션 데스크 및 예약 접수 실운영 모습" },
        { url: "https://i.imgur.com/etnm8QG.jpg", desc: "정스파 커플 전용 마사지 룸 실제 사용 현장" },
        { url: "https://i.imgur.com/kzMyygb.jpg", desc: "H마사지 고객 전용 개별 마사지 베드 실전 운영 구역" }
      ]
    },
  ];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxState) return;
    
    const currentGallery = snapshots[lightboxState.snapshotIdx].gallery;
    const newPhotoIdx = lightboxState.photoIdx === 0 
      ? currentGallery.length - 1 
      : lightboxState.photoIdx - 1;

    setLightboxState({ ...lightboxState, photoIdx: newPhotoIdx });
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxState) return;

    const currentGallery = snapshots[lightboxState.snapshotIdx].gallery;
    const newPhotoIdx = lightboxState.photoIdx === currentGallery.length - 1 
      ? 0 
      : lightboxState.photoIdx + 1;

    setLightboxState({ ...lightboxState, photoIdx: newPhotoIdx });
  };

  const closeLightbox = () => setLightboxState(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  // Derived state for easier access in render
  const currentSnapshotGroup = lightboxState ? snapshots[lightboxState.snapshotIdx] : null;
  const currentPhoto = currentSnapshotGroup ? currentSnapshotGroup.gallery[lightboxState!.photoIdx] : null;

  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">후기 & 커뮤니티</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            고객님들의 솔직한 여행 후기와 자주 묻는 질문들을 확인하세요.<br/>
            네이버 블로그&밴드에서 더 많은 정보를 얻으실 수 있습니다.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Section 1: Clarksean Tour On-Site Snapshots */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 mb-2">클락션투어 현장 스냅샷</h2>
            <p className="text-gray-600 pl-5 leading-relaxed">
              실제 골프장, 호텔, 차량, 맛집 등 클락 현장에서 직접 촬영한 사진들입니다.<br className="hidden md:block"/>
              여행 분위기를 미리 느껴보세요.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
             {snapshots.map((shot, index) => (
               <div key={shot.id} className="group cursor-pointer" onClick={() => setLightboxState({ snapshotIdx: index, photoIdx: 0 })}>
                 <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-100 relative">
                   {/* Display the first image of the gallery as thumbnail */}
                   <img 
                    src={shot.gallery[0].url} 
                    alt={shot.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <div className="bg-black/60 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>+{shot.gallery.length}장 보기</span>
                     </div>
                   </div>
                 </div>
                 <p className="text-sm md:text-base font-bold text-gray-800 text-center px-1">
                   {shot.caption}
                 </p>
               </div>
             ))}
          </div>
        </section>

        {/* Updated Reviews Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[#1A5FFF] mb-8">생생 리얼 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-[12px] shadow-sm border border-gray-100 flex flex-col relative hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 text-lg">{review.name}</span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{review.type}</span>
                    </div>
                    <div className="flex text-secondary text-sm">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 absolute top-6 right-6">{review.date}</span>
                </div>
                
                <p className="text-[#111111] text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                  {review.content}
                </p>

                <div className="flex items-center justify-end pt-4 border-t border-gray-50">
                  <button className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors text-sm group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    도움돼요
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-lg border border-gray-200 open:border-primary transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-gray-800 list-none">
                  <span className="flex items-center gap-3">
                    <span className="text-primary">Q.</span>
                    {faq.question}
                  </span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-100 mt-4 pt-4">
                  <span className="font-bold text-gray-900 mr-2">A.</span>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Simplified Community Links (Band ONLY) */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-[#03C75A] p-10 md:p-14 rounded-3xl text-white flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
             <div className="relative z-10 w-full max-w-2xl">
               <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">클락 골프 조인센터<br/>네이버 밴드 가입하기</h3>
               <p className="text-lg mb-10 opacity-90 font-medium">
                 밴드 회원 전용 혜택과 특가 프로모션,<br className="md:hidden" /> 실시간 조인 멤버 모집 현황을 놓치지 마세요.
               </p>
               
               <div className="inline-block w-full sm:w-auto">
                 <Button 
                   className="bg-white text-[#03C75A] hover:bg-gray-100 text-xl font-black py-5 px-10 shadow-xl transition-all hover:scale-105 active:scale-95"
                   onClick={() => window.open("https://band.us/@clarkjoin", "_blank", "noopener,noreferrer")}
                 >
                   클락 골프 조인센터 밴드 바로가기 &rarr;
                 </Button>
               </div>

               <p className="mt-5 text-sm md:text-base opacity-80 font-bold tracking-tight">
                 실시간 후기 · 조인 일정 · 공지 확인 가능
               </p>
             </div>
             
             {/* Decorative Background Icon */}
             <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-8 translate-y-8 select-none pointer-events-none">
               <span className="text-[12rem] font-black">N</span>
             </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxState && currentSnapshotGroup && currentPhoto && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2" onClick={(e) => { e.stopPropagation(); closeLightbox(); }} aria-label="닫기">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 rounded-full" onClick={handlePrev} aria-label="이전 이미지">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 rounded-full" onClick={handleNext} aria-label="다음 이미지">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center pointer-events-auto" onClick={e => e.stopPropagation()}>
            <img 
              src={currentPhoto.url} 
              alt={currentPhoto.desc} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl bg-black"
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                {currentSnapshotGroup.caption}
              </h3>
              <p className="text-gray-300 text-base mt-1">
                {currentPhoto.desc}
              </p>
              <p className="text-gray-500 text-sm mt-3 font-medium bg-white/10 inline-block px-3 py-1 rounded-full">
                {lightboxState.photoIdx + 1} / {currentSnapshotGroup.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
