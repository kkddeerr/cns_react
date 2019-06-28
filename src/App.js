import React , {useEffect, useState} from 'react';
import UserInput from './UserInput'
import UserList from "./UserList";

// class App extends  Component{

//     state = ({
//         users : []
//     });

//     onCreateUser = (data) => {
//         this.setState({
//             users : [...this.state.users , data]
//         })
//     };

//     onRemoveUser = (idx) => {
//         this.setState({
//             users : this.state.users.filter(user=> user.userIdx !== idx)
//         })
//     };

//     render(){
//         return (
//             <>
//                 <UserInput onCreateUser={this.onCreateUser}/>

//                 {
//                     this.state.users.map((user) =>{
//                         return <UserList key={user.userIdx}
//                                          user={user}
//                                          onRemoveUser={this.onRemoveUser}/>
//                     })
//                 }

//             </>
//         )
//     }

// }

const App = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        console.log('Mount is Done');
      }, []);

    const onCreateUser = (data) => {
        setUsers([...users,data])
    }

    const onRemoveUser = (idx) => {
        setUsers(users.filter(user=> user.userIdx !== idx))
    }

    return(
        <>
            <UserInput onCreateUser={onCreateUser}/>
                {
                    users.map((user) =>{
                        return <UserList key={user.userIdx}
                                        user={user}
                                        onRemoveUser={onRemoveUser}/>
                    })
                }
        </>
    )
}

export default App;
