import MenuItem from "./MenuItems";

export default function Menu({name, menus}) {

    const menuComponents = menus.map((prop, i) => {
        return (
            <MenuItem
                key={i}
                name={prop.name}
                helper={prop.helper}
                longtext={prop.longtext}
                json={prop?.menuContent?.json}
            />
        );
    });

    return (
        <div id={name} className="relative w-full bg-white flex justify-center items-center flex-col">

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[113px] h-[50px] shadow-[0px_4px_4px_#00000040]">
                    <div className="w-[113px] h-[50px] bg-black">
                        <div className="w-full text-center">
                            <div className="[font-family:'Koulen-Regular',_Helvetica] font-normal text-white text-[37.8px] text-center tracking-[0] leading-[normal]">
                                {name}
                            </div>
                        </div>
                    </div>
                </div> 
            {menuComponents}
        </div>
    );
}