import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import Details from './Details';
import Streams from './Streams';
import Profile from './Profile';
import Header from './Header';

function RouterPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/details" element={<Details />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default RouterPage;