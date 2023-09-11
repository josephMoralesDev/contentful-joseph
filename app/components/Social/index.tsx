import "./index.css";
import "../../../public/gradient.png";

export default function Social({name, image, socialCollection}) {
    const socialMap = socialCollection.map((s, i) => {
        return (
            <div className="my-6 p-4 px-8 border-8 border-solid border-white flex flex-row justify-between items-center">
                <img className="w-[50px] h-[50px]" src={s.icon.url} />
                <p className="text-white text-xl">{s.name}</p>
            </div>
        );
    });
  
    return (
        <div id={name} className="relative w-full flex justify-center flex-col items-center">

            <img className="z-[-1] absolute w-full h-[800px] top-0 left-0 object-cover" alt="Gradient" src="gradient.png" />
            <div className="pt-20 social flex flex-col items-center p-5">
                <div>
                <h1 className="text-center text-white">
                    {name}
                </h1>
                <div className="flex justify-center mb-8">
                    <img className="w-[100px] h-[100px]" src={image} />
                </div>
                {socialMap}
                </div>
            </div>
        </div>
  );
}