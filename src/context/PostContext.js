import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import PostReducer from "./PostReducer";
// import { AuthContext } from "./AuthContext";

// const GetPosts = async () => {
//     const {user} = useContext(AuthContext)
//     const userPosts = await axios.get("/posts/timeline/"+user._id);
//     return userPosts;
// }
const INITIAL_STATE =  {
    post: [],
    friends: []
}

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

    return (
        <PostContext.Provider
        value = {{
            post: state.post,
            friends: state.friends,
            dispatch
        }}
        >{children}</PostContext.Provider>
    );
};