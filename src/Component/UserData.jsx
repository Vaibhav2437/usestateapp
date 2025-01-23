import { useState } from "react"

const UserData = ()=>{
    const [user,setUser] = useState({id :101, name: 'Vaibhav', city: 'Nagpur',contact :776655456, isActive:false})
    
    const [emp,setEmp] = useState({id :1,name:'Girish',city:'Pune',Contact : 2233776557,isActive:false})
    const update =()=>{
        if(user.isActive){
            setUser({
                id :101, 
                name: 'Vaibhav', 
                city: 'Nagpur',
                contact :776655456, 
                isActive:false
            })
        }else{
            setUser({
                id :102, 
                name: 'Rohit', 
                city: 'Pune',
                contact :7768775456, 
                isActive:true
            })
        }
    }
    const updatedata = () =>{
        if(emp.isActive){
            setEmp({
                id :1,
                name:'Girish',
                city:'Pune',
                Contact : 2233776557,
                isActive:false
            })
        }else{
            setEmp({
                id :2,
                name:'xyz',
                city:'Pune',
                Contact : 22354446557,
                isActive:true
            })
        }
    }
    return(
        <div>
            <h2>User Comp</h2>
            <table className="table ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.city}</td>
                        <td>{user.contact}</td>
                        <td><button className="btn btn-danger" onClick={update}>Update</button></td>
                    </tr>
                    <tr>
                    <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.city}</td>
                        <td>{emp.Contact}</td>
                        <td><button className="btn btn-danger" onClick={updatedata}>Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UserData;