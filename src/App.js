
function App() {
  return (
    <>

    <div>
    <h1 className="text-3xl 
      font-bold 
      underline 
      text-center">TailwindCss Kurulum</h1>
    </div>


    <div>
      <h1 className=" bg-red-600 text-2xl text-center">Tailwind</h1>
    </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-3">

      <div className="m-10">
        <img src="https://pbs.twimg.com/profile_images/1417052605776375813/Jc9RL5o7_400x400.jpg"
        className="rounded-xl h-[200px] animate-pulse m-auto"/>
      </div>

      <div className="card">
        <h1>KORAY</h1>
        <p className="line-clamp-1 hover:line-clamp-none p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      </div>

      <div>
        <button className="btn">Click Me</button>
      </div>

      </div>
    
      
    </>

    
  );
}

export default App;
