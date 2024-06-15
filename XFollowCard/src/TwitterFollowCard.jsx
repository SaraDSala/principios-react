import{useState} from 'react' ;

export function TwitterFollowCard({children,userName, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo ' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  //Estado interno para cada componente
  const handleClick =() =>{
    setIsFollowing(!isFollowing)
  }

  const imageSrc =`https://unavatar.io/youtube/${userName}`
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt={`Avatar de ${userName}`}
          src={imageSrc} />
        <div className='tw-followCard-info'>
          <strong> {children} </strong>
          <span className='tw-followCard-user'> @{userName} </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-follow'> {text}</span>
          <span className='tw-followCard-stopFollow'> Dejar de seguir </span>
        </button>
      </aside>
    </article>
  )
}