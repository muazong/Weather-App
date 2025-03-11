import Logo from './components/Logo';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';

function TopContent() {
  return (
    <div className="flex justify-between w-full max-w-[1150px]">
      <div>
        <Logo />
        <SearchForm />
      </div>
      <WeatherInfo />
    </div>
  );
}

export default TopContent;
