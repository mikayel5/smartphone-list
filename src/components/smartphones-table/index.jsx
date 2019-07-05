import React from  'react';

export default function SmartphonesTable(props){

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Maker</th>
                    <th>Display</th>
                    <th>CPU</th>
                    <th>Memory</th>
                </tr>
            </thead>
            <tbody>
            {
                    Object.keys(props.data).map((key) =>{
                        console.log(props.data[key].name.id)
                        

                        return (
                            <tr key = {key}>
                                <td>{props.data[key].name.id}</td>
                                <td>{props.data[key].maker.name}</td>
                                <td>{props.data[key].display.h} x {props.data[key].display.w}</td>
                                <td>{props.data[key].cpu.cores}</td>
                                <td>{props.data[key].memory.ram}</td>
                            </tr>
                        )
                    })
                }
         

            </tbody>
        </table>
    )
}
