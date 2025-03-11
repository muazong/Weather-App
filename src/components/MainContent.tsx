import BottomContent from './BottomContent';
import TopContent from './TopContent';

function MainContent() {
  const background = {
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  return (
    <div
      style={background}
      className="flex justify-center items-center h-[95%] max-w-[1200px] w-full"
    >
      <TopContent />
      <BottomContent />
    </div>
  );
}

export default MainContent;
