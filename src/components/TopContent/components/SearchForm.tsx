import { FaAngleDown, FaCity, FaHome, FaSearch } from 'react-icons/fa';
import { IoEarthOutline } from 'react-icons/io5';

function SearchForm() {
  return (
    <div style={styles.background} className="w-full p-4">
      <h2 className="text-white font-bold mb-3">ĐỊA ĐIỂM</h2>
      <form className="flex flex-col gap-3">
        {/* COUNTRY */}
        <div className={styles.searchContainer}>
          <label htmlFor="country" className={styles.label}>
            <IoEarthOutline />
            ĐẤT NƯỚC
          </label>
          <select className={styles.select}>
            <option value="" disabled selected>
              Lựa chọn đất nước
            </option>
            <option value="vietnam">Việt Nam</option>
          </select>
          <FaAngleDown className={styles.downIcon} />
        </div>

        {/* CITY */}
        <div className={styles.searchContainer}>
          <label htmlFor="city" className={styles.label}>
            <FaCity />
            THÀNH PHỐ
          </label>
          <select className={styles.select}>
            <option value="" disabled selected>
              Lựa chọn thành phố
            </option>
            <option value="hanoi">Hà Nội</option>
          </select>
          <FaAngleDown className={styles.downIcon} />
        </div>

        {/* TOWN */}
        <div className={styles.searchContainer}>
          <label htmlFor="tow" className={styles.label}>
            <FaHome />
            THỊ TRẤN
          </label>
          <select className={styles.select}>
            <option value="" disabled selected>
              Lựa chọn thị trấn
            </option>
            <option value="sontay">Sơn Tây</option>
          </select>
          <FaAngleDown className={styles.downIcon} />
        </div>

        {/* BUTTON */}
        <div>
          <button
            className="flex justify-center items-center gap-1 font-semibold float-end bg-[rgb(213,229,213)] border px-3 py-1 rounded-sm cursor-pointer hover:bg-[rgba(213,229,213,0.5)] transition-colors duration-300 ease-in-out"
            type="button"
          >
            <FaSearch size="16px" />
            <p>TÌM KIẾM</p>
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  background: {
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 137, 137, 0.5)',
  },
  searchContainer:
    'flex gap-5 bg-[rgb(234,234,234)] rounded-sm border border-black hover:bg-[rgba(234,234,234,0.8)] transition-colors duration-200 ease-in-out relative',
  label:
    'flex items-center justify-center gap-1 min-w-[120px] h-[40px] text-white font-bold text-sm bg-black',
  select: 'appearance-none w-full text-md cursor-pointer',
  downIcon: 'absolute right-2 top-3 bottom-0 text-[16px] cursor-pointer',
};

export default SearchForm;
