import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">클락션투어</h2>
            <p className="text-sm leading-relaxed mb-6">
              필리핀 클락 골프 & 카지노 여행의 새로운 기준.<br/>
              신뢰할 수 있는 현지 직영 여행사.
            </p>
            <img 
              src="https://i.imgur.com/LUl55tv.png" 
              alt="클락션투어 파트너" 
              className="w-full max-w-[320px] rounded-[12px] h-auto object-contain"
            />
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">고객센터</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-white font-bold">Contact</span>
                <span>010-6632-5008 (한국)</span>
                <span>+63-962-637-3774 (필리핀)</span>
              </li>
              <li className="flex flex-col gap-1 mt-2">
                <span className="text-white font-bold">주소 (필리핀)</span>
                <span className="text-sm leading-relaxed text-gray-400">
                  KACC Annex BuildingUnit 301<br/>
                  2nd Floor J.Abad Santos and<br/>
                  E.Quirino Street, Clark Freeport<br/>
                  Zone, Pampanga
                </span>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <span className="text-white">카카오톡 ID:</span> clarktiger
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white">운영시간:</span> 연중무휴 24시간
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">사업자 정보</h3>
            <ul className="space-y-2 text-sm">
              <li>상호: 클락션투어(clarksean Tour)</li>
              <li>대표: 양승(토파즈 영어뮤지컬)</li>
              <li>사업자등록번호: 171-06-01486</li>
              <li>한국사무실: 경기도 평택시 고덕갈평5길 32, 611호(고덕동, 그랜드메디컬타워)</li>
              <li>업태: 도매 및 소매업(통신판매)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} clarksean Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;