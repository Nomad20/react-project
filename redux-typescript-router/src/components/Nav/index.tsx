import { NavLinkPersist } from '../../supports/Persistence'
import style from './nav.module.scss'

export function Nav() {

  const className = ({ isActive }: { isActive: boolean }) => {
    return `${isActive ? style.active : ''} ${style.link}`
  }

  return (
    <nav>
      <NavLinkPersist className={className} to='/blog'>Blog</NavLinkPersist>
      <NavLinkPersist className={className} to='/pricing'>Pricing</NavLinkPersist>
      <NavLinkPersist className={className} to='/about'>About Us</NavLinkPersist>
    </nav>
  )
}
