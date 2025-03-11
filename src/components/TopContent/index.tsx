import Logo from './components/Logo';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';

function TopContent() {
  return (
    <div className="flex justify-between items-center w-full max-w-[1150px] gap-[30px] flex-1/2">
      <div className="flex flex-col items-start justify-center flex-1/2">
        <Logo />
        <SearchForm />
      </div>
      <div className="flex-1/2">
        <WeatherInfo />
      </div>
    </div>
  );
}

export default TopContent;
