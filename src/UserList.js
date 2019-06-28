
import React, {useState, useEffect} from 'react';
import './UserList.css'
// class UserList  extends  Component{


//     render(){
//         const {user, onRemoveUser} = this.props;
//         const {userIdx , id , nickname , email} = user
//         return (
//             <div className="test">
//                 <p>{userIdx}</p>
//                 <p>{id}</p>
//                 <p>{nickname}</p>
//                 <p>{email}</p>
//                 <button onClick={()=> {
//                     onRemoveUser(userIdx)
//                 }}>삭제</button>
//             </div>
//         )
//     }
    
// }

const UserList = (props) => {
    
    const {userIdx ,id, nickname ,email } = props.user
    
    return(
        <>
        <p>{userIdx}</p>
            <p>{id}</p>
            <p>{nickname}</p>
            <p>{email}</p>
            <button onClick={()=> {
                props.onRemoveUser(userIdx)
            }}>삭제</button>
        </>

    );
}


export default  UserList