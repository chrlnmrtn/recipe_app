import React from 'react'

import { data8 } from "../src/data/data8";
import Menu from "./Menu";

export default function MakeitYourself() {
    return (
        <div>
            <Menu recipes={data8} title="Make It Yourself" />
        </div>
    )
}
