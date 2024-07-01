import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/Users';
import { useState } from 'react';

function App() {

    const dispatch = useDispatch()
    const userList = useSelector(state => state.users.value)

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [updatedUsername, setUpdatedUsername] = useState("")

    return (
        <div>
            <div className="addUser">
                <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <button onClick={() => {
                    dispatch(addUser({
                        id: userList[userList.length - 1].id + 1,
                        name,
                        username
                    }))
                }}>Add user</button>
            </div>
            <div className="displayUser">
                {userList.map((user, i) => {
                    return <div key={i}>
                        <h1>{user.name}</h1>
                        <p>{user.username}</p>
                        <input type="text" placeholder='new username' onChange={(e) => setUpdatedUsername(e.target.value)} />
                        <button onClick={() => dispatch(updateUser({
                            id: user.id,
                            updatedUsername
                        }))}>update</button>
                        <button onClick={() => dispatch(deleteUser(user))}>delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default App
