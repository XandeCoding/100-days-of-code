import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import Img from 'gatsby-image'

const CarouselComponent = ({ carouselImages }) => {  

  carouselImages = carouselImages.map((image, index) => {
    image.id = index;
    return image;
  })

  const [ index, setImage ]  = useState(0)
  const transitions = useTransition(carouselImages[index], item => item.id, {
    from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0, position: 'absolute' },
      config: config.molasses,
    })

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(index => (index + 1) % carouselImages.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

 
  return transitions.map(({ item, props, key }) => ( 
    <animated.div key={ key } style={ props }>
      <Img fluid={ item } />
    </animated.div>  
  ))
}

export default CarouselComponent