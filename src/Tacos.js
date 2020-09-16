import React from 'react'

import { data3 } from "../src/data/data3";
import Menu from "./Menu";

export default function Tacos() {
    return (
        <div>
            <Menu recipes={data3} title="Tacos Tacos Tacos" />
            
        </div>
    )
}
