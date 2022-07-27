import Navbar from './components/Navbar'
import { SidebarLeft,DailyContent,SidebarRight, Main} from './components/Layout';
import ProfileCard from './components/ProfileCard';
import TeamCard from './components/TeamCard';
import InputPost from './components/InputPost';
import StorieCard from './components/StorieCard';
import AdCard from './components/AdCard';
import FollowMe from './components/Follow';
import PostCard from './components/PostCard';
import ModalDelete from './components/ModalDelete';
import ModalNewPost from './components/ModalNewPost';
import {useEffect, useState} from 'react'

function App() {
  const [modalDelete, setModalDelete]=useState(false)
  const [modalNewPost, setModalNewPost]=useState(false)
  
  const [ datos , setDatos] = useState({})
  const [ posts , setPosts] = useState([])
  const [ teams , setTeams] = useState([])
  
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
  })

    fetch("https://my-daily-bootcamp.herokuapp.com/users.json").then((response)=>{
      return response.json()
  }).then((team)=>{ 
    setTeams([...team])
  });



  },[])

  return (
    <>
      <Navbar />
      <Main>
        <SidebarLeft>
          <ProfileCard datos={datos}/>
          <div className="teams">
            <h2>My team</h2>
          {teams.map((team,index)=>{
            return <TeamCard team={team} key={index}/>
          })}
          </div>
        </SidebarLeft>

        <DailyContent>
          <InputPost setModalNewPost={setModalNewPost}/>
          {posts.map((post,index)=>{
            return <PostCard data = {post} setModalDelete={setModalDelete} key={index}/>
          })}
        </DailyContent>

        <SidebarRight>
          <StorieCard/>
          <AdCard/>
          <FollowMe/>
        </SidebarRight>
      </Main>
      <ModalDelete openModalDelete={modalDelete} setModalDelete={setModalDelete}/>
      <ModalNewPost openModalNewPost ={modalNewPost} setModalNewPost={setModalNewPost} />
    </>
  )
}
export default App
