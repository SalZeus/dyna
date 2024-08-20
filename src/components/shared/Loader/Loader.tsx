import { MotionDiv } from 'app/components/home/MotionDiv/MotionDiv';
import styles from './loader.module.scss';

export const Loader = () => {
  
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    }
  };
  
    return (
      <>
        <MotionDiv className="loader"
          variants={loaderVariants}
          animate="animationOne"
        ></MotionDiv>
      </>
    )
  
};