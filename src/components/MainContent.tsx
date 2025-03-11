import BottomContent from './BottomContent';
import TopContent from './TopContent';

function MainContent() {
  return (
    <div
      style={styles.background}
      className="flex flex-col justify-center items-center h-[95%] max-w-[1200px] w-full m-[20px]"
    >
      <TopContent />
      <BottomContent />
    </div>
  );
}

const styles = {
  background: {
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
};

export default MainContent;
