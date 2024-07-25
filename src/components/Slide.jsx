const Slide = ({title, desc, img}) => {
  return (
    <div className={`slide w-52 h-64 bg-${img} bg-cover`}>
        <div className="absolute left-10 content">
            <h2 className="font-bold text-5xl">{title}</h2>
            <p className="font-thin">{desc}</p>
        </div>
    </div>
  )
}

export default Slide