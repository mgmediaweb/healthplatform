import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import DetailScreen from './routes/detailScreen';
import HomeScreen from './routes/homeScreen';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DetailScreen />} path="/detail/:city" />
        <Route element={<HomeScreen />} index />
        <Route
          element={(
            <section className="flex-center">
              <div className="container text-center">404 Page not found</div>
            </section>
          )}
          path="*"
        />
      </Routes>
    </Router>
  );
}

export default App;
