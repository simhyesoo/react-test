import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useStore } from './Store';
import './App.css';


function App() {
  const [isActive, setisActive] = useState(false);
  const { popular, getMovie, thumb, detailMovie, detail } = useStore();
  // console.log(data)

  useEffect(() => {
    getMovie('popular');
    getMovie('top_rated');
  }, [])
  function popup(id) {
    console.log(id)
    detailMovie(id)
    setisActive(true)
  }



  if (!popular.length) return <>준비중...</>;

  return (
    <div className="App">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          popular.map((obj) => {
            return <SwiperSlide>
              <figure onClick={() => { popup(obj.id) }}>
                <img src={thumb + obj.poster_path} />
                <figcaption>{obj.title}</figcaption>
              </figure>
            </SwiperSlide>
          })
        }
      </Swiper>

      <div className={`pop ${isActive ? ' active' : ''}`}>
        {detail.homepage}
      </div>
    </div>
  );
}

export default App;
