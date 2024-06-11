   
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const FramerDown = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false});
  const maincontrols = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrols.start("show")
    }
  }, [isInView]);

  return (
    <div ref={ref} className='relative'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -30 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={maincontrols}
        transition={{ duration: 0.5, delay: 0.25 }}
        >
        {children}
      </motion.div>
    </div>
  )
}

export default FramerDown