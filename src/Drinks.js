import React from 'react'

import { data6 } from "../src/data/data6";
import Menu from "./Menu";

export default function Drinks() {
    return (
        <div>
            <Menu recipes={data6} title="Drinks" />
        </div>
    )
}
