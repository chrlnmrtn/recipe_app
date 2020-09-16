import React from 'react'

import { data4 } from "../src/data/data4";
import Menu from "./Menu";

export default function Sweets() {
    return (
        <span>
            <Menu recipes={data4} title="Sweets" />
        </span>
    )
}
