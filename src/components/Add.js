import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, deleteEmployee, removeEmployee } from "../actions";
import addReducers from "../reducers/addReducers"


const Add = () => {

    const [inputData, setInputData] = useState('')
    const list = useSelector((state) => state.addReducers.list)
    const dispatch = useDispatch()

    return (
        <div className='main'>
            <div className='child' style={{ display: "flex" }}>
                <input type="text" value={inputData}
                    onChange={(ev) =>
                        setInputData(ev.target.value)
                    }
                    placeholder="enter employee name" />
                <p onClick={() => dispatch(addEmployee(inputData), setInputData(''))}
                style={{marginLeft: '5px'}}
                >Add</p>
            </div>

            <div className="showItems">
                {
                    list.map((elem) => {
                        return (
                            <div className="eachItem"
                                style={{ display: "flex" }}
                                key={elem.id}
                            >
                                <h3>{elem.data}</h3>
                                <div className="add-btn">
                                    <p onClick={() => dispatch(deleteEmployee(elem.id), setInputData(''))}
                                        style={{ paddingLeft: "10px", paddingTop: "5px" }}>delete</p>
                                </div>
                            </div>
                        )

                    })
                }

            </div>

            <div className="showItems">
                <p onClick={() => dispatch(removeEmployee())}
                    style={{ paddingLeft: "10px", paddingTop: "5px" }}>delete all employees</p>
            </div>


        
        </div>
    )
}


export default Add;