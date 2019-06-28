
import React, {useState, useEffect ,useRef} from 'react';

// class UserInput  extends  Component{

//     idRef = null;
//     nicknameRef = null;
//     emailRef = null;
//     userIdx = 1;

//     state = ({
//         id : '',
//         nickname:'',
//         email:''
//     });

    // onChange = (e) => {

    //     const {name , value} = e.target
    //     this.setState({
    //         [name] : value
    //     })
    // };

    // onClear = () => {
    //     this.setState({
    //         id :'',
    //         nickname : '',
    //         email : ''
    //     });

    //     this.idRef.value = '';
    //     this.nicknameRef.value = '';
    //     this.emailRef.value = '';
    // };

    // onAddUser = () => {
    //     const {onCreateUser} = this.props;

    //     const {id , nickname , email} = this.state;

    //     onCreateUser({
    //         userIdx : this.userIdx,
    //         id , nickname , email
    //     });
    //     this.userIdx += 1;
    //     this.onClear()
    // };




//     render() {
//         return (
            // <>
            //     <p>아이디 : <input type="text" name="id" onChange={this.onChange} ref={ref=>this.idRef = ref}/></p>
            //     <p>닉네임 : <input type="text" name="nickname" onChange={this.onChange} ref={ref=>this.nicknameRef = ref}/></p>
            //     <p>이메일 : <input type="text" name="email" onChange={this.onChange} ref={ref=>this.emailRef = ref}/></p>
            //     <p>{this.state.id} ({this.state.nickname}) email : {this.state.email}</p>

            //     <button onClick={this.onAddUser}>저장 </button>
            //     <button onClick={this.onClear}>리셋 </button>

            // </>
//         )
//     }

// }

const UserInput = (props) => {

    const idRef = useRef(null)
    const nicknameRef = useRef(null)
    const emailRef = useRef(null)
    
    //const [users,setUsers] = useState({id:'', nickname : '', email:''});
    
    const [id,setId] = useState('');
    const [nickname,setNickname] = useState('');
    const [email,setEmail] = useState('');
    const [userIdx, setUserIdx] = useState(1);
    

    // const onChange = (e) => {

    //     const {name , value} = e.target;
    //     setUsers(users[name] = value);

        
    // };

    const onClear = () => {

        //setUsers({id:'',nickname:'',email:''})
        setId('');
        setNickname('');
        setEmail('');
        idRef.current.value = '';
        nicknameRef.current.value = '';
        emailRef.current.value = '';
    };

    const onAddUser = () => {
       
        props.onCreateUser({
            userIdx : userIdx,
            id , nickname , email
        });
        setUserIdx(userIdx+1);
        console.log(userIdx);
        onClear()
    };
    
    return (
        <>
        <p>아이디 : <input type="text" name="id" onChange={(e) => setId(e.target.value)} ref={idRef}/></p>
        <p>닉네임 : <input type="text" name="nickname" onChange={(e) => setNickname(e.target.value)} ref={nicknameRef}/></p>
        <p>이메일 : <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} ref={emailRef}/></p>
        <p>{id} ({nickname}) email : {email}</p>

        <button onClick={onAddUser}>저장 </button>
        <button onClick={onClear}>리셋 </button>
         </>
    )
}

export default UserInput