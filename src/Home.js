import useFetch from "./useFetch";
import Create from "./Create";
import DoList from "./DoList";

const Home = () => {
    const {data: lists} = useFetch('http://localhost:7000/lists');

    return (
        <div className='Home'>
            { lists && <Create />}
            { lists && <DoList lists = {lists} />}
        </div>
    );
}
 
export default Home;