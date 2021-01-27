import React from 'react';
import {Route,Switch} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Services from './Services';

const CompA = ()=>{ 

  const errorPage = ()=>{ 
    return(
      <h1>Oops page not found!!</h1>
    )
  }
   
  const Name = ()=>{ 
    return(
      <h1>Gulab Jamoon </h1>
    )
  }

//switch is used for swicth url 
// render about page exactly as '/'
// render contact page exactly '/contact'
// if any error in url render without any path


  return(
    <>
     <Menu />
     <Switch>
        {/* what if we has to pass props */}
        {/* Observe render is used in contact*/}
        {/* when passing props use render */}
        <Route exact path='/' component={ ()=> <About name="About"/> } />
        <Route exact path='/contact' render={ ()=> <Contact name="Contact" /> } />
        <Route exact path='/services' component={()=> <Services name="Service"/> } />
        <Route path='/contact/name' component={Name} />
        <Route component={errorPage} />
     </Switch>
    </>
  )
}

export default CompA;