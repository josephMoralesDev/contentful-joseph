"use client"
import "./index.css";
import "../../../public/gradient.png";
import ReactCurvedText from "react-curved-text";

export default function Home({name, headline, image}) {
  console.log(name)
  return (
    <div id={name}>
      <img className="z-[-1] absolute w-full h-[800px] top-0 left-0 object-cover" alt="Gradient" src="gradient.png" />
      <div className="home flex flex-col items-center p-5 pt-20">
        <div>
          <h1 className="text-center text-white mb-12">
            {name}
          </h1>
        </div>
        <div className="absolute">
          <ReactCurvedText
            width={"full"}
            height={500}
            cx={150}
            cy={250}
            rx={120}
            ry={120}
            startOffset={10}
            reversed={true}
            text={headline}
            textProps={{"style": {"fontSize": "20"}}}
          />
        </div>
        <div className="mt-12">
          <img className="ellipse" alt="Ellipse" src={image} />
        </div>
      </div>
    </div>
  );
}