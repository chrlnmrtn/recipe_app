import React from 'react'

import { data7 } from "../src/data/data7";
import Menu from "./Menu";

export default function FortheDog() {
    return (
        <div>
            <Menu recipes={data7} title="For the Dog" />
        </div>
    )
}
