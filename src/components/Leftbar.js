import React, {useContext} from 'react'
import styled from 'styled-components'
import {MdRssFeed} from "react-icons/md"
import {BsChatSquareDotsFill} from "react-icons/bs"
import {AiFillPlayCircle} from "react-icons/ai"
import {HiUserGroup} from "react-icons/hi"
import {BsFillBookmarksFill} from "react-icons/bs"
import {FaQuestionCircle} from "react-icons/fa"
import {GrUserWorker} from "react-icons/gr"
import {BiCalendarEvent} from "react-icons/bi"
import {FaGraduationCap} from "react-icons/fa"
import { Users } from '../dummyData'
import { PostContext } from '../context/PostContext'

const Leftbar = () => {
    const {friends, dispatch} = useContext(PostContext);
    console.log(friends);
    return (
        <Container>
            <div className="sidebar">
                <ul className="leftbar-list">
                    <li className="list-item">
                        <MdRssFeed className="leftbar-icon" />
                        <span className="icon-text">Feed</span>
                    </li>
                    <li className="list-item">
                        <BsChatSquareDotsFill className="leftbar-icon" />
                        <span className="icon-text">Chats</span>
                    </li>
                    <li className="list-item">
                        <AiFillPlayCircle className="leftbar-icon" />
                        <span className="icon-text">Videos</span>
                    </li>
                    <li className="list-item">
                        <HiUserGroup className="leftbar-icon" />
                        <span className="icon-text">Groups</span>
                    </li>
                    <li className="list-item">
                        <BsFillBookmarksFill className="leftbar-icon" />
                        <span className="icon-text">Bookmarks</span>
                    </li>
                    <li className="list-item">
                        <FaQuestionCircle className="leftbar-icon" />
                        <span className="icon-text">Questions</span>
                    </li>
                    
                    <li className="list-item">
                        <BiCalendarEvent className="leftbar-icon" />
                        <span className="icon-text">Events</span>
                    </li>
                   
                </ul>
                <Button>Show More</Button>
                <hr className="leftbarhr" />
                {/* <FriendList>
                    {Users.map(({id, profilePicture, username})=>{
                            return  <li key={id} className="friend">
                                    <img src={profilePicture} alt="rajesh" />
                                    <span>{username}</span>
                    </li>
                    })}
                    
                    
                
                </FriendList> */}
            </div>

        </Container>
    )
}
const FriendList = styled.ul`
    list-style: none;
    .friend{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1vh;
        /* justify-content: space-between; */
        img{
            margin-left: -35px;
            margin-right: 15px;
            height: 50px;
            width: 50px;
            object-fit: cover;
            border-radius: 50px;
            cursor: pointer;
        }
    }
`
const Button = styled.button`
    width: 80%;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1vh;
`

const Container = styled.div`
    top: 8vh;
    
    overflow-y: scroll;
        
        ::-webkit-scrollbar{
        width: 5px;
        }
        ::-webkit-scrollbar-track{
            background-color: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb{
            background-color: rgb(179, 179, 179);
        }
    
  
    .sidebar{
        padding: 3vh;
       
        
    }
    
    .leftbar-list{
        padding: 0;
        margin: 0;
        list-style: none;
        .list-item{
            display: flex;
            align-items: center;
            margin-bottom: 3vh;
            .leftbar-icon{
                margin-right: 1vw;
            }
        }
    }
    .friend{
        img{
        
        }
    }
`

export default Leftbar
