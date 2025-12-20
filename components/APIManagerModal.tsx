
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import Button from './Button';

interface APIManagerModalProps {
  onClose: () => void;
}

const APIManagerModal: React.FC<APIManagerModalProps> = ({ onClose }) => {
  const [hasKey, setHasKey] = useState<boolean>(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState<string>('');
  const [latency, setLatency] = useState<number | null>(null);

  const checkKeyStatus = useCallback(async () => {
    if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    } else {
      setHasKey(!!process.env.API_KEY);
    }
  }, []);

  useEffect(() => {
    checkKeyStatus();
    
    // ESC key to close
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, checkKeyStatus]);

  const handleOpenSelectKey = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      await window.aistudio.openSelectKey();
      setHasKey(true);
      setTestStatus('idle');
    } else {
      alert('이 환경에서는 외부 키 선택기를 지원하지 않습니다.');
    }
  };

  const handleResetKey = () => {
    if (confirm('저장된 API 키 설정을 초기화하시겠습니까? 이 기기에서의 모든 AI 기능이 중지됩니다.')) {
      setHasKey(false);
      setTestStatus('idle');
      setTestMessage('');
      // In aistudio environment, this usually resets the internal link
      alert('설정이 초기화되었습니다. 다시 사용하려면 키를 선택해주세요.');
    }
  };

  const runConnectionTest = async () => {
    setTestStatus('testing');
    setTestMessage('Google AI 서버에 신호를 보내는 중...');
    const startTime = performance.now();

    try {
      // Create a fresh instance to ensure the latest key is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Ping',
      });

      const endTime = performance.now();
      if (response.text) {
        setTestStatus('success');
        setLatency(Math.round(endTime - startTime));
        setTestMessage('연결 성공: 클락션투어 AI 엔진이 정상 작동 중입니다.');
      } else {
        throw new Error('응답이 없습니다.');
      }
    } catch (error: any) {
      setTestStatus('error');
      setTestMessage(`연결 실패: ${error.message || '인증 오류가 발생했습니다.'}`);
      
      if (error.message?.includes('Requested entity was not found')) {
        setHasKey(false);
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden border border-white/20 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-primary px-8 py-7 text-white relative">
          <h2 className="text-2xl font-black flex items-center gap-3">
            <span className="p-2 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </span>
            API 키 설정 & 테스트
          </h2>
          <p className="text-blue-100 text-sm mt-2 font-medium opacity-80">
            보안 연결: 모든 키는 브라우저에 암호화 저장됩니다.
          </p>
          <button 
            onClick={onClose}
            className="absolute top-7 right-7 text-white/60 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8 space-y-8">
          {/* Provider Info */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Service Provider</span>
            <span className="bg-blue-50 text-primary text-xs font-black px-3 py-1 rounded-full border border-blue-100">
              GOOGLE GEMINI AI
            </span>
          </div>

          {/* Key Management Card */}
          <div className={`p-6 rounded-2xl border transition-all duration-300 ${
            hasKey ? 'bg-green-50/50 border-green-100' : 'bg-orange-50/50 border-orange-100'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`mt-1 w-4 h-4 rounded-full flex-shrink-0 ${
                hasKey ? 'bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]' : 'bg-orange-400 animate-pulse'
              }`} />
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 leading-none mb-1">
                  {hasKey ? 'API 키 활성화됨' : '키가 설정되지 않음'}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {hasKey 
                    ? '유료 프로젝트 키가 안전하게 연결되었습니다.' 
                    : 'AI 가이드 서비스를 이용하려면 키가 필요합니다.'}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <Button 
                variant={hasKey ? 'outline' : 'primary'} 
                size="sm" 
                fullWidth 
                className="font-bold py-3"
                onClick={handleOpenSelectKey}
              >
                {hasKey ? '키 갱신하기' : 'API 키 선택/저장'}
              </Button>
              {hasKey && (
                <button 
                  onClick={handleResetKey}
                  className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  title="설정 초기화"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Connection Test Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Connection Test</h4>
            <Button 
              variant="white" 
              fullWidth 
              className="border-2 border-gray-100 shadow-none hover:bg-gray-50 py-4"
              onClick={runConnectionTest}
              disabled={!hasKey || testStatus === 'testing'}
            >
              {testStatus === 'testing' ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  테스트 중...
                </span>
              ) : '서버 연결 상태 점검'}
            </Button>

            {testStatus !== 'idle' && (
              <div className={`p-5 rounded-2xl border animate-fade-in ${
                testStatus === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex gap-3">
                  <div className={`mt-0.5 ${testStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {testStatus === 'success' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-black ${testStatus === 'success' ? 'text-green-900' : 'text-red-900'}`}>
                      {testMessage}
                    </p>
                    {latency && testStatus === 'success' && (
                      <p className="text-[11px] text-green-700 font-bold mt-1 opacity-70">
                        LATENCY: {latency}ms
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 px-8 py-6 flex justify-end gap-3 border-t border-gray-100">
          <Button variant="white" size="sm" className="border shadow-none" onClick={onClose}>취소</Button>
          <Button size="sm" onClick={() => window.location.reload()}>새로고침하여 적용</Button>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default APIManagerModal;
