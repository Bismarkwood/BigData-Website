export interface HeroSlide {
  backgroundImage: string
  circleImage: string
}

import geospatialBg from '../../assets/hero/Geospatial.jpg'
import heroImg2 from '../../assets/hero/hero section image 2.png'

const heroSlides: HeroSlide[] = [
  {
    backgroundImage: geospatialBg,
    circleImage: geospatialBg,
  },
  {
    backgroundImage: heroImg2,
    circleImage: heroImg2,
  },
]

export default heroSlides
