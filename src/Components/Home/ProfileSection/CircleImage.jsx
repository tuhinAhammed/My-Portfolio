import { React , useEffect } from 'react';
import "../ProfileSection/Profile.css";


const  CircleImage = () => {
  useEffect(() => {
    const texts = document.querySelectorAll(".profileCircleText p");
    texts.forEach(text => {
      const newText = text.textContent.split("").map((char, i) => 
        `<span style = "transform:rotate(${i * 9}deg)">${char}</span>`
      ).join("");
      text.innerHTML = newText;
    });
  }, []); // Empty dependency array means this runs once after the initial render.

  return (
    <div className='mainDiv '>
      <div className="circleDiv ">
        <div className="profilelogo bg-theme"></div>
        <div className="profileCircleText ">
          <p className='!text-primary'>Tuhin Ahammed - MERN Stack Developer -</p>
          {/* Tuhin Ahammed - M E R N Stack Developer - */}
        </div>
      </div>   
    </div>
  );
}

export default CircleImage;