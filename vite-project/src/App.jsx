import './App.css'
import Button from './component/Button'
import Images from '../public/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
import Person from './component/person'
//most the same file name
function App() {


  return (
    <>
    <nav>
      <h1>Company</h1>
      <hr width="1420px"/>
<a href="/html/">HTML</a> |
<a href="/css/">CSS</a> |
<a href="/js/">JavaScript</a> |
<a href="/python/">Python</a>
</nav>
<h1 className='Em'>Employees in the Company </h1>
<div className='pp'><Person img={Images} name="Khloud" lang="javaScript" year="year:2023" company="copmany: E" serves="serves: programming"></Person>
<Person img={Images} name="Njla" lang="java" year="year:2023" company="copmany: Er" serves="serves: programming"></Person>
<Person img={Images} name="Nurah" lang="python" year="year:2023" company="copmany: Ej" serves="serves: programming" ></Person>
</div>

<footer>
  <p>Author: khloud Alabdullah</p>
  <p><a href="mailto:hege@example.com">khl444ud@gmail.com</a></p>
</footer>
  </>
  )
}
//to export the funcaion
export default App
