"use client"

import React, { useState, useEffect } from 'react';


export default function NavItems({name, active}) {
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(name));
    }, [name]);


    if (name === 'Think Tacos')
        return;

    return (
            <a
                href={`#${name}`}
                className={`${active} py-4 px-1 tracking-[0] text-[13px] -top-px text-white font-medium text-center leading-[normal]`}
            >
                {name}
            </a>
    );
}