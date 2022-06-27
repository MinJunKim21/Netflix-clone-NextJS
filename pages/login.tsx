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

      <img
        src="https://rb.gy/ulxxee"
        width={150}
        height={150}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className=" text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>

        <button className="w-full rounded bg-[#e50914] py-3 font-semibold">
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix?{' '}
          <button type="submit" className=" text-white hover:underline">
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
