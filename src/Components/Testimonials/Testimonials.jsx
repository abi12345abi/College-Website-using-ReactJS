import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../Images/next-icon.png';
import back_icon from '../../Images/back-icon.png';
import user_1 from '../../Images/user-1.png';
import user_2 from '../../Images/user-2.png';
import user_3 from '../../Images/user-3.png';
import user_4 from '../../Images/user-4.png';

const Testimonials = () => {

      const slider = useRef();
      let tx = 0;
const slideForward = ()=>{
      if(tx > -50){
        tx-=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if(tx < 0){
        tx+=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
}
   



  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>

                    <p>Choosing to pursue my degree at Edusity was one of
                    the best decisions I've ever made. The supportive
                    community, state-of-art facilities, and commitment
                    to acadamic excellence have truly exceeded my 
                    expectations.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Jhon David</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>

                    <p>Studying at Edusity has been an incredible journey. 
                    The dedicated faculty, modern resources, and a vibrant 
                    learning environment have helped me grow academically 
                    and personally beyond my expectations.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Anisha Gemma</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>

                    <p>Being a part of Edusity has been an enriching experience. 
                    The institution's focus on academic excellence, hands-on 
                    learning, and a welcoming community has made my educational
                    journey truly fulfilling.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Elena Josephine</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>

                    <p>Choosing Edusity for my education was a life-changing decision. 
                    The top-notch curriculum, industry-oriented training, and unwavering 
                    support from mentors have truly shaped my career path. </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
