import ReactMarkdown from 'react-markdown'
import rehypeRaw  from 'rehype-raw';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const MarkerComponent = ({ text }) => <div>{text}</div>;

export default function HoursLocations({name, locations}) {


    const locationsMap = locations.map((l, i) => {
        const content = documentToReactComponents(l.locationContent?.json);
        const { coordinate: { lat, lon } } = l;
        return (
            <>
                <iframe
                    style={{
                        maxWidth: '500px'
                    }}
                    width="100%"
                    height="200"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS_KEY}
                        &q=${lat},${lon}`}>
                </iframe>
                <div className="pt-8 pb-6 text-white [font-family:'Murecho-SemiBold',_Helvetica] font-semibold text-[14px] text-center tracking-[0] leading-[normal]">
                    {content}
                </div>
            </>
        );
    });
    
    return (
        <div id={name} className="locations bg-black p-5 px-0 text-center w-full flex flex-col justify-center items-center">
            <h1 className="text-white uppercase pb-8 pt-4">
                {name}
            </h1>

               {locationsMap}         
        </div>
    );
}