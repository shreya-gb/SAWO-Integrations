import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className= "container">
      <h1 align= "center"> Hey EVERYONE! </h1>
      <Link href="/greetings">
          <button className= {styles.center}> Proceed!</button>
      </Link>
    </div>
 )
}
