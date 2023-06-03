import { useState } from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import '../style/nav.css'










export function Navigator({ handleSumbmit, handleChange, search, error }) {
  const [active, setActive] = useState(true)
  const [tag, setTag] = useState('');
  const [despliegue, setDespliegue] = useState(false);

  const handleClick = () => {
    setDespliegue(false)
    setActive(true)
  }

  const handleClickTags = () => {

    setActive(false)
  }

  const handleOnclickOption = (e) => {
    let data = e.target.firstChild.data
    if (data === 'None') {
      setDespliegue(false)
      setTag('')
      return
    }
    setTag(data)
    setDespliegue(false)
  }

  const despliegueClick = () => {
    setDespliegue(!despliegue)
  }

  

  return <nav className='left'>
    <h2>Seacrh by...</h2>
    <section>
      <button className={active ? 'btn active' : 'btn'} onClick={handleClick}>Name</button>
      <button className={!active ? 'btn active' : 'btn'} onClick={handleClickTags}>Tag</button>
    </section>
    {
      active ? <form className='form-titulo' onSubmit={(e)=>{e.preventDefault(); handleSumbmit(tag)}}>
        <input type="text" placeholder='Title movies' onChange={handleChange} defaultValue={search} />
        <button type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        {
          error && <p>{error}</p>
        }
      </form> :
        <form onSubmit={(e) => { e.preventDefault() }} className='form-tags'>
          <div className='form-input'>
            <input type="text" placeholder='Add Tag...' value={tag}  readOnly/>
            <button onClick={despliegueClick} style={despliegue? {opacity:1}: {opacity:0.7}}>
              {
                despliegue ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinejoin="round"  d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
              }
            </button>
          </div>
          <div className={despliegue ? 'hola' : 'desactive'}>
            <span onClick={handleOnclickOption}>series</span>
            <span onClick={handleOnclickOption}>movie</span>
            <span onClick={handleOnclickOption}>None</span>
          </div>
        </form>
    }

    <button className='clear'>Clear all</button>
    <footer>
      <a href="#">
        <VscGithub />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FiTwitter />
      </a>

    </footer>
  </nav>
}