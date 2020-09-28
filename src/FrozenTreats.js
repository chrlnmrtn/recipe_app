import React from 'react'

import { data5 } from "./data/data5";
import Menu from "./Menu";

export default function FrozenTreats() {
    return (
        <span>
            <Menu recipes={data5} title="FrozenTreats" />
        </span>
    )
}
