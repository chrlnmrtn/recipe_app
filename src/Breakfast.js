import React from 'react'

import { data } from "../src/data/data";
import Menu from "./Menu";

export default function Breakfast() {
    
    return (
        <span>
            <Menu recipes={data} title="Breakfast" />
        </span>
    )
}
