import logo from '../logo.png';
import Search from '../components/search/Search';

const HomeScreen = () => {
  return (
    <div className='app'>
      <img src={logo} className="app-logo" alt="logo" />
      <Search button={true} />
    </div>
  );
}

export default HomeScreen;