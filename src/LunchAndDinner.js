import React from 'react'

import { data2 } from "../src/data/data2";
import Menu from "./Menu";

export default function LunchAndDinner() {
    return (
        <div>
            <Menu recipes={data2} title="Lunch and Dinner" />
        </div>
    )
}
