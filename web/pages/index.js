import Head from 'next/head';
import {Header, Card} from '../components';
import axios from '../utils/axios';

export default function Home({data}) {
  return (
    <div>
      <div className="jumbotron z-0 py-6">
        <Header isTranslucent />
        <div className="overlay z-10"></div>
        <h1 className="title z-20 my-4">단기방을 한 번에 찾고<br/>원하는 기간만큼 계약하세요.</h1>
        <button className="text-lg font-bold py-2 px-8 rounded-full text-white z-20 hover:border-transparent border border-white hover:bg-white hover:text-black">
          방 보러가기
        </button>
      </div>

      <div className="new-rooms">
        {data.map((d, i) => <Card key={i} data={d} />)}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:8000/api/rooms/?type=new');
  const {data} = res;
  
  return {props: {data}};
}