import Head from 'next/head';
import Image from 'next/image';

function Login() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline" //sm까지는 히든이고, 그 이후범위는 인라인이다. 상위 디브에서 md부터 bg가 투명되니까 md보다 작을때는 bg가 검은색이라서 md일때까지 까만거임
        objectFit="cover"
      />
    </div>
  );
}

export default Login;
