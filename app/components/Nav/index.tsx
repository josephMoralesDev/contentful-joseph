"use client"

import React, { useState, useEffect } from 'react';
import NavItems from './NavItems';

export default function Nav ({navLinks}) {

    const nav = navLinks.map((n, i) => <NavItems name={n.name} key={i}/>);

    return (
        <div className="bg-black font-bold z-1 w-full flex flex-row justify-center align-middle items-center justify-between">
            <p href="#Think Tacos" className="text-white text-lg pl-4">
                Think Tacos
            </p>
            <div className="pr-2 flex flex-row justify-end justify-items-end items-end">
                {nav}
            </div>
        </div>
    );
}