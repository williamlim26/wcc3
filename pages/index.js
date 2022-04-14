import Link from 'next/link'
import Head from 'next/head'
import Calculator from '../components/projects/Calculator'
import TodoList from '../components/projects/TodoList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>William&#39;s Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Calculator /> */}
      <TodoList />
    </div>
  )
}
