function App() {
  return (
    <>
      <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen ">
        <h1 className=" text-center text-slate-800 mb-8 text-4xl ">Our Pricing</h1>
        <div className=" flex flex-wrap flex-row justify-center gap-0 text-center max-w-6xl mx-auto lg-gap-0 lg-flex-row rounded-md lg:w-full lg:flex-nowrap ">
          <article className=" p-8 rounded bg-white shadow ">
            <h2 className=" text-slate-800 text-xl mb-5 ">Basic</h2>
            <h3 className=" flex items-center text-slate-700 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>19.99</h3>
            <h3 className=" flex items-center text-slate-700 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>199.99</h3>
            <ul className=" flex justify-center flex-col my-8">
              <li className=" border-t py-3 border-slate-600  ">500 GB Storage</li>
              <li className=" border-t py-3 border-slate-600  "> 2 Users Allowed</li>
              <li className=" border-y py-3 border-b border-slate-600  ">Send up to 3 GB</li>
            </ul>
            <button className=" linear-gradient btn text-white  py-3 w-full rounded-lg shadow uppercase cursor-pointer hover:border-2 border-2">Learn More</button>
          </article>

          <article className="linear-gradient p-8 rounded shadow lg:scale-110 ">
            <h2 className=" text-xl mb-5 text-white ">Professional</h2>
            <h3 className=" flex items-center text-5xl justify-center  text-white"><span className=" text-3xl mr-3">$</span>24.99</h3>
            <h3 className=" flex items-center text-5xl justify-center  text-white"><span className=" text-3xl mr-3">$</span>249.99</h3>
            <ul className=" flex justify-center flex-col my-8">
              <li className=" text-white border-t py-3 border-white ">1 GB Storage</li>
              <li className=" text-white border-t py-3 border-white " > 5 Users Allowed</li>
              <li className=" text-white border-y py-3 border-white ">Send up to 10 GB</li>
            </ul>
            <button className=" bg-white text-slate-800 py-3 w-full rounded-lg shadow border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200 ">Learn More</button>
          </article>

          <article className=" p-8 bg-white rounded shadow ">
            <h2 className=" text-slate-800 text-xl mb-5 ">Master</h2>
            <h3 className=" flex items-center text-slate-700 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>39.99</h3>
            <h3 className=" flex items-center text-slate-700 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>399.99</h3>
            <ul className=" flex justify-center flex-col my-8">
              <li className=" border-t py-3 border-slate-600  ">2 GB Storage</li>
              <li className=" border-t py-3 border-slate-600  "> 10 Users Allowed</li>
              <li className=" border-y py-3 border-b border-slate-600  ">Send up to 20 GB</li>
            </ul>
            <button className=" linear-gradient btn text-white  py-3 w-full rounded-lg shadow uppercase cursor-pointer hover:border-2 border-2">Learn More</button>
          </article>
        </div>
      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Adegun John Timilehin</a>.
  </div>
      </section>
    </>
  );
}

export default App;
