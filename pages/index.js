import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Head>
        <title>52WOSP</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
            <span className="ml-3 text-xl">🚀 52 Weekends of Side Projects</span>
          </a>
        </div>
      </header>

      <main>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Challenge Yourself To Build
                <br className="hidden lg:inline-block" />A Side Project every Weekend
              </h1>
              <p className="mb-8 leading-relaxed text-gray-500">
                For the maker inside you, there's still no greater challenge than building your dream. From creating something new comes a person that is bold and confident, enthusiastic and alive. 52 Weekends of Side Projects is a challenge for makers to build a side project every weekend in a year.
              </p>

              <div className="flex justify-center">

                <a
                  href="https://twitter.com/intent/tweet?text=I%27m%20publicly%20committing%20to%20the%2052WeekendsOfSideProjects%20Challenge%20starting%20this%20Weekend!%20Learn%20More%20and%20Join%20me!%20hey%20@yhdesai&url=52wosp.com&hashtags=52WOSP&hashtags=52WeekendsOfSideProjects&hashtags=BuildInPublic"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Tweet to commit to the challenge</button>
                </a>
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="image.svg" />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
