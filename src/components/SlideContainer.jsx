import Slide from "./Slide"

const SlideContainer = ({img1, img2, img3, img4}) => {
  return (
    <div className="absolute slides flex gap-4 justify-end bottom-56 bg-white w-full py-5 px-3">
       <Slide img={img1} title={1} desc="one"/>
       <Slide img={img2} title={2} desc="two"/>
       <Slide img={img3} title={3} desc="three"/>
       <Slide img={img4} title={4} desc="four"/>
    </div>
  )
}

export default SlideContainer