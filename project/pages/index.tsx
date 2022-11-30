import Head from 'next/head'
import styles from '../styles/home.module.css';
import LoginPage from '../components/LoginPage';
import axios, { AxiosResponse } from 'axios';
import { server } from '../config';
import { NextPage } from 'next';

const Home: NextPage = (props) => {
  return (
    <div>
      <LoginPage techStack={props}></LoginPage>
    </div>
  )
}

export default Home;

//Used ServerSideProps since further down the road when I need to update my skillset, I will
//be able to do that in the backend and the changes will reflect onto the page
export async function getServerSideProps() {
  const response = await axios.get(`${server}/api/getTech`);
  let techStackLst = []
  if (response.status === 200) {
    const data = response.data['techStack']
    for (let i = 0; i < data.length; i++) {
      techStackLst.push(data[i]['stack'])
    }
  }
  return { props: {techStackLst}}
}