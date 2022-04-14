import Link from 'next/link'
import Head from 'next/head'
import Calculator from '../components/projects/Calculator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>William's Site 3</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <Calculator />
    </div>
  )
}
