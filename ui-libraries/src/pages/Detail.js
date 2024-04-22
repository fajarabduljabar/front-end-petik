import React from 'react'
// import DetailProduct from '../component/DetailProduct'
import NavbarComponent from '../component/Navbar'
import Footer from '../component/Footer'
import DetailCourse from '../component/DetailCourse.js'

const Detail = () => {
  return (
    <div>
        <NavbarComponent/>
      {/* <DetailProduct/> */}
      <DetailCourse/>
      <Footer/>
    </div>
  )
}

export default Detail
