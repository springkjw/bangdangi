import {Card} from '../../components';
import axios from '../../utils/axios';

export default function RoomList({data}) {
  return (
    <div>
      {data.map((d, i) => <Card key={i} data={d} />)}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:8000/api/rooms/');
  const {data} = res;

  return {props: {data}};
}