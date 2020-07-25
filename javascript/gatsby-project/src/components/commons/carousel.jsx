import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CarouselComponent = ({ carouselImages }) => {  

  const ImgStyle = styled.div `
    min-width: 500px;
    max-width: 60rem;
    margin: auto;
  ` 

  carouselImages = carouselImages.map((image, index) => {
    image.id = index;
    return image;
  })

  const [ index, setImage ]  = useState(0)
  const transitions = useTransition(carouselImages[index], item => item.id, {
    from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0, position: 'absolute' }
    })

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(index => (index + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 
  return transitions.map(({ item, props, key }) => ( 
    <animated.div key={ key } style={ props }>
      <ImgStyle>
        <Img fluid={ item } />
      </ImgStyle>
    </animated.div>  
  ))
}

export default CarouselComponent