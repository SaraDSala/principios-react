import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'GuyFawkes1917',
    name: 'Andrés Alguacil',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App(){
  return(
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing}) =>(
          (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          ))
      )}
    </section>
  )
}