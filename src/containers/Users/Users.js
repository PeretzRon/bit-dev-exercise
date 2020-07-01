import React, {useState} from "react";
import User from "../../components/User/User";
import classes from './Users.module.css'
import ButtonsControl from "../../components/ButtonsControl/ButtonsControl";

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchFakeUser = async () => {
        const data = await fetch('https://randomuser.me/api/');
        const jsonData = await data.json();
        const parseJson = jsonData.results[0];
        setUsers([...users,
            {
                id: new Date().toString() + Math.random().toString(),
                name: parseJson['name'].first,
                gender: parseJson['gender'],
                country: parseJson['location'].country,
                email: parseJson['email'],
                city: parseJson['location'].city,
                postCode: parseJson['location'].postcode,
                age: parseJson['dob'].age,
                phone: parseJson['phone'],
                cell: parseJson['cell'],
                picture: parseJson['picture'].medium,
            }])
    }

    const deleteAllHandler = () => {
        setUsers([]);
    }


    return (
        <div>
            <ButtonsControl addNewUser={fetchFakeUser} deleteAll={deleteAllHandler}/>
            <div className={classes.Users}>
                {users.map(user => {
                    return <User key={user.id} user={user}/>
                })}
            </div>
        </div>

    )
}

export default Users;
