export interface HeroSlide {
  backgroundImage: string
  circleImage: string
}

import heroImg1 from '../../assets/hero/Image 1.jpg'
import heroImg2 from '../../assets/hero/Image 3.jpg'
import heroImg3 from '../../assets/hero/432324-Korean_Peninsula_node_full_image_2.jpg'

const heroSlides: HeroSlide[] = [
  {
    backgroundImage: heroImg1,
    circleImage: heroImg1,
  },
  {
    backgroundImage: heroImg2,
    circleImage: heroImg2,
  },
  {
    backgroundImage: heroImg3,
    circleImage: heroImg3,
  },
]

export default heroSlides
