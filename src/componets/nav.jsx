import { useState, useRef } from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { CheckInput } from './check';
import '../style/nav.css'










export function Navigator({ handleSumbmit, handleChange, search, error, checkFun, check, tagsFun, year, yearFun }) {
  const [active, setActive] = useState(true)
  const [tagssS, setTags] = useState()
  const [despliegue, setDespliegue] = useState(false);
  const [nav, setNav] = useState(false)


  const handleClick = () => {
    setDespliegue(false)
    setActive(true)
  }

  const handleClickTags = () => {


    setActive(false)
  }

  const handleOnclickOption = (e) => {
    let t = e.target.firstChild.data

    if (t === 'None') {
      t = '';
    }

    setDespliegue(false)
    setTags(t)
    tagsFun(t)

    handlemenu()
  }

  const despliegueClick = () => {
    setDespliegue(!despliegue)
  }
  const handlemenu = () => {
    setNav(!nav)
  }


  return <>
    <button onClick={handlemenu} className={!nav?'abrir svgham':'abrir svgx'}>
      {
        !nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      }
    </button>
    <nav className={nav ? 'left leftResponsive' : 'left leftRespons'}>
      <h2 >Seacrh by...</h2>
      <section >
        <button className={active ? 'btn active' : 'btn'} onClick={handleClick}>Name</button>
        <button className={!active ? 'btn active' : 'btn'} onClick={handleClickTags}>Tag</button>
      </section>
      {
        active ? <form className='form-titulo' onSubmit={(e) => { e.preventDefault(); handleSumbmit() }} >
          <input type="text" placeholder='Title movies' onChange={(e => { handleChange(e) })} defaultValue={search} />
          <button type='submit' onClick={handlemenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          {
            error && <p>{error}</p>
          }
          <CheckInput handlemenu={handlemenu} check={check} checkFun={checkFun} year={year} yearFun={yearFun} />
        </form  > :
          <form onSubmit={(e) => { e.preventDefault() }} className='form-tags' >
            <div className='form-input'>
              <input type="text" placeholder='Add Tag...' value={tagssS} readOnly />
              <button onClick={despliegueClick} style={despliegue ? { opacity: 1 } : { opacity: 0.7 }}>
                {
                  despliegue ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                }
              </button>
            </div>
            <form className={despliegue ? 'hola' : 'desactive'}>
              <span onClick={handleOnclickOption}>series</span>
              <span onClick={handleOnclickOption}>movie</span>
              <span onClick={handleOnclickOption}>None</span>
            </form>
          </form>
      }

      <button className='clear'>Clear all</button>
      <footer >
        <a href="https://github.com/alcias4/search-movies">
          <VscGithub />
        </a>
        <a href="https://www.instagram.com/camilo_andrade04/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/camiloand23">
          <FiTwitter />
        </a>

      </footer>
    </nav>
  </>
}