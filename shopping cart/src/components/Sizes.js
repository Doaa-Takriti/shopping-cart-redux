import React, { useState } from "react";

export default function Sizes() {
    const [count, setCount] = useState({
        activeObject: null,
        objects: [{ id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        ]

    });
    function toggleActive(index) {
        setCount({ ...count, activeObject: count.objects[index] });
    }
    function toggleActiveStyles(index) {
        if (count.objects[index] === count.activeObject) {
            return "box active";


        } else {
            return "box inactive"
        }
    }

    return (

        <div id="boxes" >
            {
                count.objects.map((element, index) => (
                    <div key={index} className={toggleActiveStyles(index)} onClick={() => toggleActive(index)}>

                    </div>
                ))
            }

        </div>
    );
}