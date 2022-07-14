import axios from "axios"
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const github = axios.create({
    baseURL:GITHUB_URL
})

export const searchUsers = async (text) =>{
   
    const params = new URLSearchParams({
        q:text
    })
    const response = await github.get(`${GITHUB_URL}/search/users?${params}`)
    return response.data.items
//    dispatch({
//     type:'GET_USERS',
//     payload:items
//    })
}
//Get User and Repos in a single function
export const getUserAndRepos = async(login) => {
    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])
    return {
        user : user.data,
        repos : repos.data
    }
}

// Get User and Repos seprately
// export const getUser = async (login) =>{
//     const response = await fetch(`${GITHUB_URL}/users/${login}`)
  
//     if(response.status === 404){
//         window.location = '/notfound'
//     }
//     else{
//         const data = await response.json()
//         return data
      
//     } 
// }
// export const getUserRepos = async (login) =>{
//     const params = new URLSearchParams({
//         sort:'created'
//     })
//     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)
//     const data = await response.json()
//     return data
 
    
// }