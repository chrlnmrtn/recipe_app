import React from 'react'
import { data4 } from "./data/data4";
import Menu from "./Menu";

export default function Sweets() {
    return (
        <div>
            <Menu recipes={data4} title="Sweets" />
        </div>
    )
}
