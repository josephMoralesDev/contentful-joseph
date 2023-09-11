import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./index.css";

export default function MenuItem({name, helper, longtext, json}) {

    const menu = documentToReactComponents(json)
    return (
        <div className="item shadow-[0px_4px_4px_#00000040] m-10 mb-20 p-5 pb-20 top-0 left-0 bg-white border-8 border-solid border-yellow-400 ">
            <h1 className=" text-center uppercase pb-2">
                {name}
            </h1>
            <div className="text-black text-[14px] text-center flex flex-col justify-center items-center">
                {menu}
            </div>
            {helper &&
                <div className="absolute bottom-50 right-10">
                    <div className="relative w-[138px] h-[138px] bg-black rounded-[69px] shadow-[0px_4px_4px_#00000040]">
                        <p className="absolute w-[106px] top-[35px] left-[16px] rotate-[30.48deg] [font-family:'Murecho-Bold',_Helvetica] font-bold text-white text-[16px] text-center tracking-[0] leading-[normal]">
                            {helper}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}