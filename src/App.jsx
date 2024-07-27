import { useState } from "react";
import Button from "./components/Button";
import { useExtractColor } from "react-extract-colors";
import Navbar from "./components/Navbar";

const App = () => {
  
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1580319978358-045c4fdccd16?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "space blue"
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=2916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "leaf green"
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1674347953915-1431abd16563?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "velvet red"
    },

    {
      url: 'https://images.unsplash.com/photo-1505659903052-f379347d056f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "tunnel dark"
    },
    {
      url: 'https://images.unsplash.com/photo-1505739998589-00fc191ce01d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "yellow theme"
    },
  ];

  const [currIndex,  setCurrIndex] = useState(0);

  // const prevSlide = () => {

  //   if(currIndex === 0) {
  //     setCurrIndex(slides.length - 1)
  //   } else {
  //     setCurrIndex(currIndex - 1 )
  //   }
  // }

  // const nextSlide = () => {

  //   if(currIndex === slides.length-1) {
  //     setCurrIndex(0)
  //   } else {
  //     setCurrIndex(currIndex + 1 )
  //   }
  // }

  // const reorderSlides = (index) => {
  //   let dotList = document.querySelectorAll('#dot');
  //   let slideList = document.querySelectorAll('#slide');
  //   // setArr[lists]
  //   document.getElementById('dots').prepend(dotList[index])
  //   document.getElementById('slides').prepend(slideList[index])
  //   // console.log(index)
  //   // lists.append(lists[index])
  //   // lists[index].remove()
  //   console.log(slideList.key)
  // }

  const { dominantColor } = useExtractColor(slides[currIndex].url, {
    format: "hex",});

  const gotoSlide = (slideIndex) => {
    setCurrIndex(slideIndex)
    console.log(dominantColor);
  }


  return (
    <div className="relative w-screen h-screen justify-center items-center">
    <Navbar />
      <div style={{backgroundImage: `url(${slides[currIndex].url})`}} className="flex flex-col gap-5 w-full h-full contrast-100 text-white justify-center items-center bg-center bg-cover saturation-200 duration-150 z-10">
      </div>
        {/* <div className="flex w-full justify-center items-center">
          <h1 className="bg-black/50 px-24 py-5 text-4xl font-thin">Do slides</h1>

          <div className="flex absolute w-full justify-between text-2xl">
            <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-black cursor-pointer hover:shadow-white hover:shadow-sm duration-100" onClick={prevSlide}>{'<'}</span>
            <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-black cursor-pointer hover:shadow-white hover:shadow-sm duration-100" onClick={nextSlide}>{'>'}</span>
          </div>
        </div> */}
        <div className="w-full px-5 flex flex-col gap-5 lg:flex-row justify-center items-center  absolute bottom-32">
          <div id="contents" className="flex w-96 bg-black/70 px-6 py-4 left-10 gap-6 transition-all duration-200 cursor-default z-50 text-white">
            {slides.map((i, index) => (<div id="content" key={index} className={currIndex === index ? "flex flex-col" : "hidden"}>
            <h2 className='text-4xl mb-5 uppercase font-thin'>{slides[index].title}</h2>
            <p className='text-xs font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, sequi corporis labore unde eos nulla dolorem reprehenderit laboriosam ullam. Provident voluptate corporis iste facere nam, in ipsa sapiente numquam, corrupti qui fugit. Amet minus minima molestias eum, aliquid possimus harum dolore asperiores suscipit! Maiores eaque maxime reiciendis, enim illo error.</p>
            <Button bgColor={dominantColor}/>
            </div>))}
            </div>

          <div id="slides" className="lg:flex text-white w-full hidden justify-center items-center lg:justify-end lg:items-center gap-2 z-50">
              {slides.map((i, index) => (<div id="slide" key={index} style={{backgroundImage: `url(${slides[index].url})`, cursor: "pointer", }} className={currIndex === index ? "w-60 h-60 rounded-3xl border-[3px] border-white bg-cover bg-center bg-white" : "w-32 h-32 rounded-lg bg-cover bg-center bg-white"}  onClick={() => gotoSlide(index)}></div>))}
          </div>
        </div>
        <div id="dots" className="absolute bottom-10 flex w-full items-end justify-center gap-4 z-50">
            {slides.map((slide, slideIndex) => (<span id="dot" key={slideIndex} style={currIndex === slideIndex ? {backgroundColor: `${dominantColor}`} : {backgroundColor: "white"}} className={currIndex === slideIndex ? "w-4 h-4 border-2 border-white rounded-full pointer-events-none duration-150 cursor-pointer" : "w-3 h-3 rounded-full hover:w-4 hover:h-4 duration-150 cursor-pointer"} onClick={() => gotoSlide(slideIndex)}></span>))}
        </div>
    </div> 
  )
}

export default App