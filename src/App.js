function App() {
  return (
    <>
      <section className="p-5">
        <div className=" flex flex-wrap flex-col justify-center gap-8 text-center">
          <article className=" p-8 rounded bg-white shadow ">
            <h2 className=" text-slate-800 text-xl mb-5 ">Basic</h2>
            <h3 className=" flex items-center text-slate-800 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>19.99</h3>
            <h3 className=" flex items-center text-slate-800 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>199.99</h3>
            <ul className=" flex items-center justify-center flex-col my-8">
              <li className=" border-t py-3 border-slate-600  ">500 GB Storage</li>
              <li className=" border-t py-3 border-slate-600  "> 2 Users Allowed</li>
              <li className=" border-y py-3 border-b border-slate-600  ">Send up to 3 GB</li>
            </ul>
            <button className="linear-gradient">Learn More</button>
          </article>

          <article className="linear-gradient p-8 rounded-shadow ">
            <h2 className=" text-xl mb-5 text-white ">Professional</h2>
            <h3 className=" flex items-center text-slate-800 text-5xl justify-center  text-white"><span className=" text-3xl mr-3">$</span>24.99</h3>
            <h3 className=" flex items-center text-slate-800 text-5xl justify-center  text-white"><span className=" text-3xl mr-3">$</span>249.99</h3>
            <ul className=" flex items-center justify-center flex-col my-8">
              <li>1 GB Storage</li>
              <li> 5 Users Allowed</li>
              <li>Send up to 10 GB</li>
            </ul>
            <button className="">Learn More</button>
          </article>

          <article className=" p-8 rounded bg-white shadow ">
            <h2 className=" text-slate-800 text-xl mb-5 ">Master</h2>
            <h3 className=" flex items-center text-slate-800 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>39.99</h3>
            <h3 className=" flex items-center text-slate-800 text-5xl justify-center"><span className=" text-3xl mr-3">$</span>399.99</h3>
            <ul className=" flex items-center justify-center flex-col my-8">
              <li className=" border-t py-3 border-slate-600  ">2 GB Storage</li>
              <li className=" border-t py-3 border-slate-600  "> 10 Users Allowed</li>
              <li className=" border-y py-3 border-b border-slate-600  ">Send up to 20 GB</li>
            </ul>
            <button className="linear-gradient">Learn More</button>
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
