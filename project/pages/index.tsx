import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css';
import LoginPage from '../components/LoginPage';

export default function Home() {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  )
}
