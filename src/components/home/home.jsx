import React from 'react'
import classes from './home.module.css'
import ProductCard from './card/productcard'
import Question from './card/question'
import Carousel from '../navigation/trending/carousel/Carousel'
import profileData from '../../helpers/profileData.json'
import recommendedData from '../../helpers/recommendedData.json'
const Home = () => {
    return (

        <div className="container-fluid" >

            <div className="row">
                <div className={`col-md-2 ${classes.left}`}>
                    <ul className={`${classes.list}`}>
                        <li className={`${classes.color}`}> <a href='#'>Posts</a></li>
                        <li><a href='#' className={`fw-bold fs-8 `} style={{ color: 'black' }}>Forums</a></li>
                        <li><a href='#' className={`fw-bold fs-8 `} style={{ color: 'black' }}>Recent Activity</a></li>
                        <li> <a href='#' className={`fw-bold fs-8 `} style={{ color: 'black' }}>Saved for Later</a></li>
                    </ul>
                </div>

                <div className="col-md-7">
                    <ProductCard />
                    <Question />

                    <div className='row'>

                        {/* <Trending></Trending> */}
                        <Carousel className={"recommendCard"} data={recommendedData } theme={"bg-dark"}/> 
                    </div>
                    <div className='row'>

                        {/* <Profile></Profile> */}
                        <Carousel className={"profileCard"} data={profileData} /> 

                    </div>

                </div>
















                <div className={`col-md-3  ${classes.right}`}>
                    <div className={`${classes.fix}`}>
                        <div className={`row ${classes.order}`} >
                            <div className="col-md-6">
                                <h6 className="mt-4 fw-bold fs-5">Sort By</h6>
                                <div class="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        block
                                    </label>
                                </div>
                                <div class="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        checkbox
                                    </label>
                                </div>
                                <div class="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        html
                                    </label>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <h6 className="mt-4 fw-bold fs-5">Order By</h6>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        checkbox
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        html
                                    </label>
                                </div>
                            </div>

                        </div>
                        <hr style={{ color: '#379683', padding: "1px" , marginRight:"20px"}} />
                        <div className={`  ${classes.fellow}`}>

                            <div className={`${classes.head}`}>
                                <p className={`fw-bold fs-8 `} style={{ color: 'black' }}>People you may know</p>
                            </div>

                            <div className={`row  ${classes.bottom}`}>
                                <div className={`fw-bold ${classes.person} ${classes.person1}`}>
                                    <img src="https://picsum.photos/50" alt="img" />
                                    <a href='#'>Surya</a>
                                </div>
                                <div className={` fw-bold ${classes.person}`}>
                                    <img src="https://picsum.photos/50" alt="img" />
                                    <a href='#'>Surya</a>
                                </div>


                            </div>
                            <div className={`row  ${classes.bottom}`}>
                                <div className={`fw-bold ${classes.person} ${classes.person2}`}>
                                    <img src="https://picsum.photos/50" alt="img" />
                                    <a href='#'>Surya</a>
                                </div>
                                <div className={`fw-bold ${classes.person}`}>
                                    <img src="https://picsum.photos/50" alt="img" />
                                    <a href='#'>Surya</a>
                                </div>


                            </div>
                            <div className={`${classes.view}`}>
                                <a href='#' className={`fw-bold fs-8  ${classes.a}`} >View more</a>
                            </div>


                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}
export default Home;