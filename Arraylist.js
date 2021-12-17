import React from 'react';


import{DropdownButton,Dropdown} from 'react-bootstrap';



     class Arraylist extends React.Component{
        myproduct={
            mysubproduct:[{
                "fruit":"apple",
                "veg":"carrot"
            },
        {
            "fruit":"mango",
            "veg":"beetroot"
        
    
        
        }]
    
        }
        render(){
            return(
                <div>
                    <select>
                        {this.myproduct.mysubproduct.map(data=>(
                            
                            <option>{data.fruit}
                                </option>
                                
       
                        ))}
                    </select>
                    <DropdownButton varient="success" title="--select product--">
                    {this.myproduct.mysubproduct.map(data=>(
                    <Dropdown.Item >{data.veg}</Dropdown.Item>
                    ))}
       
                </DropdownButton>
                </div>
       
            );
        }
       }
       export default Arraylist;
       