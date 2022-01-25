import './Carousel.css'

function Carousel() {
    return <>
        <div class="container-xl">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <h2>Testimonials</h2>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">

                        {/* <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol> */}

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="img-box"><img src="/images/1.jpeg" alt="" /></div>
                                <p class="testimonial">Some rich ass dude doing stuff that I don't care about and buying stuff that I don't care about. Oh la la la la le o la lew aler aihfdie ajhfjeh aihiedhidhai. This shit is easy as fuck for me. hehehehehehehehhehehehe</p>
                                <p class="overview"><b>Lady orthon</b>, Some rich ass Lady</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box"><img src="/images/2.jpeg" alt="" /></div>
                                <p class="testimonial">Some rich ass dude doing stuff that I don't care about and buying stuff that I don't care about. Oh la la la la le o la lew aler aihfdie ajhfjeh aihiedhidhai. This shit is easy as fuck for me. hehehehehehehehhehehehe</p>
                                <p class="overview"><b>Lady Roberto</b>, Some dumb ass lady</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box"><img src="/images/3.jpeg" alt="" /></div>
                                <p class="testimonial">Some rich ass dude doing stuff that I don't care about and buying stuff that I don't care about. Oh la la la la le o la lew aler aihfdie ajhfjeh aihiedhidhai. This shit is easy as fuck for me. hehehehehehehehhehehehe.</p>
                                <p class="overview"><b>Lady Dumbfuck</b>, Some rich and dumb ass lady</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box"><img src="/images/4.jpeg" alt="" /></div>
                                <p class="testimonial">Some rich ass dude doing stuff that I don't care about and buying stuff that I don't care about. Oh la la la la le o la lew aler aihfdie ajhfjeh aihiedhidhai. This shit is easy as fuck for me. hehehehehehehehhehehehe.</p>
                                <p class="overview"><b>Lady Dumbfuck</b>, Some rich and dumb ass lady</p>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Carousel