import React from 'react'

import { data7 } from "./data/data7";
import Menu from "./Menu";

export default function MakeyourOwn() {
    return (
        <div>
            <Menu recipes={data7} title="Make your Own" />
        </div>
    )
}
