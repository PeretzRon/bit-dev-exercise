import React, {useState} from "react";
import User from "../../components/User/User";
import classes from './Users.module.css'
import ButtonsControl from "../../components/ButtonsControl/ButtonsControl";
import MoreInfo from "../../components/MoreInfo/MoreInfo";

const Users = () => {

    // contain the users data
    const [users, setUsers] = useState([]);
    // open or close more info component
    const [showMoreInfo, setShowMoreInfo] = useState({status: false, user: null});

    // fetch fake user from randomUser API and update state
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

    // delete all users
    const deleteAllHandler = () => {
        setUsers([]);
        setShowMoreInfo({status: false, user: null});
    }

    // open more details of user
    const moreInfoButtonHandler = userId => {
        const user = users.find(elem => elem.id === userId);
        setShowMoreInfo({status: true, user: user});
    }

    // close more info
    const closeMoreInfoHandler = () => {
        setShowMoreInfo({status: false, user: null});
    }


    return (
        <div>
            <ButtonsControl addNewUser={fetchFakeUser} deleteAll={deleteAllHandler}/>
            <div className={classes.Users}>
                {users.map(user => {
                    return <User key={user.id} user={user} moreInfo={() => moreInfoButtonHandler(user.id)}/>
                })}
            </div>
            {showMoreInfo.status && <MoreInfo userDetails={showMoreInfo.user} closeMoreInfo={closeMoreInfoHandler}/>}
        </div>

    )
}

export default Users;
