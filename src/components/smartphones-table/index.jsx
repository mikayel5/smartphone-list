import React from  'react';
import './style.css'


export default function SmartphonesTable(props){
    return (
       <div className="tables">
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
            
       </div>
   )
}