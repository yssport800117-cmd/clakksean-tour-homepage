import React from 'react';
import Button from './Button';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex gap-2">
        <Button className="flex-1 bg-[#FEE500] text-black hover:bg-[#FDD835]" size="md">
          카카오톡 상담
        </Button>
        <Button className="flex-1" variant="primary" size="md">
          견적 요청
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;