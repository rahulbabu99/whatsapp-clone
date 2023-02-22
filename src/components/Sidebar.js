import React,{useEffect, useStste} from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./Sidebar.css";
import Userprofile from './Userprofile';
import db from '../firebase'
function Sidebar({currentUser,signOut}) {

    const[allUsers, setAllUsers]=useStste([])
    const[searchInput, setSearchInput]=useStste("")
    useEffect(()=>{
        const getAllUsers= async()=>{
            const data= await db.collection('users').onSnapshot(snapshot =>{
                setAllUsers(snapshot.docs.filter((doc) => doc.data().email !== 
                currentUser.email))
            });
        };

        getAllUsers();
    },[])

    const searchedUser= allUsers.filter((user)=>{
        if (searchInput){
            if(user.dat().fullname.toLowerCase().includes(searchInput.
                toLowerCase())){
                    return user
                }
        }
    });

    const searchItem= searchedUser.map((user) =>{
        return(
            <Userprofile name={user.data.fullname} 
            photoURL={user.data().photoURL}
            />
        )
    });


  return (
    <div className="sidebar">
        <div className="sidebar-header">
            <div className="sidebar-header-img" >
                <img src={currentUser?.photoURL} alt="" />
            </div>
            <button onClick={signOut} >LogOut</button>
            <div className="sidebar-header-button">
                <TollIcon/>
                <InsertCommentIcon/>
                <MoreVertIcon/>

            </div>
        </div>
        <div className='sidebar-search'>
            <div className='sidebar-search-input'>
                <SearchIcon/>
                <input type="text" name="search" placeholder='Search...'
                value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
            </div>

        </div>
        <div className="sidebar-chat-list">
            {
                searchItem.length>0 ? (searchItem
                ) :(
            <Userprofile name="nikhil"  photoURL="./user.png" />
                )}
            <Userprofile name="vishnu"  photoURL="./user.png"/>
            

        </div>
    </div>
  )
}

export default Sidebar