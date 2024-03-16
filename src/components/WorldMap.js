import React, { Component } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const World = () => {
    return (
        <div>
            <ComposableMap>
                <Geographies geography="/features.json">
                    {({ geographies }) =>geographies.map((geo) => (<Geography key={geo.rsmKey} geography={geo} />))}
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default World