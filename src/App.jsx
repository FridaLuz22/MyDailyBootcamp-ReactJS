import Navbar from './components/Navbar'
import { SidebarLeft,DailyContent,SidebarRight, Main} from './components/Layout';
import ProfileCard from './components/ProfileCard';
import TeamCard from './components/TeamCard';
import InputPost from './components/InputPost';
import StorieCard from './components/StorieCard';
import AdCard from './components/AdCard';
import FollowMe from './components/Follow';
import PostCard from './components/PostCard';
import {useEffect, useState} from 'react'

function App() {
  const [ datos , setDatos] = useState({})
  const [ posts , setPosts] = useState([])
  useEffect(()=> {

    fetch("https://my-daily-bootcamp.herokuapp.com/users/62.json").then((response)=>{
      return response.json()
  }).then((data)=>{ 
    setDatos({...data})
  });

    fetch("https://my-daily-bootcamp.herokuapp.com/posts.json").then((response)=>{
      return response.json()
    }).then((data)=>{
      setPosts([...data])
      console.log("akjlsjdklajdskl",posts)
    })




  },[])

  return (
    <>
      <Navbar />
      <Main>
        <SidebarLeft>
          <ProfileCard datos={datos}/>
          <TeamCard/>
        </SidebarLeft>

        <DailyContent>
          <InputPost/>
          {posts.map((post)=>{
            return <PostCard data = {post}/>
          })}
        </DailyContent>

        <SidebarRight>
          <StorieCard/>
          <AdCard/>
          <FollowMe/>
        </SidebarRight>
      </Main>
    </>
  )
}
export default App
