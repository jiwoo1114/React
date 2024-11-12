import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function SearchResult() {
    return (  
        <Wrap>
            <Menu />
            <Main $padding='30px 0'>SearchResult</Main>
            <Footer/>
        </Wrap>
    );
}
export default SearchResult