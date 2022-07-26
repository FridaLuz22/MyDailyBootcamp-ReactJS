import Navbar from './components/Navbar'
import { SidebarLeft,DailyContent,SidebarRight, Main} from './components/Layout';
import ProfileCard from './components/ProfileCard';
import TeamCard from './components/TeamCard';
import InputPost from './components/InputPost';
import StorieCard from './components/StorieCard';
import AdCard from './components/AdCard';
import FollowMe from './components/Follow';
import PostCard from './components/PostCard';
import {useState} from 'react'
import ModalDelete from './components/ModalDelete';
import ModalNewPost from './components/ModalNewPost';
function App() {
  const [modalDelete, setModalDelete]=useState(false)
  const [modalNewPost, setModalNewPost]=useState(false)
  
  return (
    <>
      <Navbar />
      <Main>
        <SidebarLeft>
          <ProfileCard />
          <TeamCard/>
        </SidebarLeft>

        <DailyContent>
          <InputPost setModalNewPost={setModalNewPost}/>
          <PostCard setModalDelete={setModalDelete}/> 
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
