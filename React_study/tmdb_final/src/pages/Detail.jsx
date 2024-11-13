//영화 상세정보 페이지

import { useParams } from 'react-router-dom';
import '../styles/common.css'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Wrap, Main } from '../styles/StyledComponent'
import MovieDetail from '../components/MovieDetail'
import CreditSlider from '../components/slider/CreditSlider';


function Detail() {
   const {movieId}  =useParams()
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieDetail />
            <CreditSlider movieId={movieId} />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Detail