import React from "react";
import Auxiliary from "../../hoc/Auxiliary";



const Layout = (props) => {
  return (
    // wrap everyting around a higher order component
    <Auxiliary>
      <div>Toolbarm, sidedrawer, backdrop</div>
      <main>
        {props.children}
      </main>
    </Auxiliary>
  )
}

export default Layout;