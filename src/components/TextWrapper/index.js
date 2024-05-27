import React, { useState, useEffect } from 'react'
import './index.scss'
import { motion, AnimatePresence } from 'framer-motion'

function TextWrapper(props) {
  const { isVisible } = props
  const [show, setShow] = useState(false)
  const TextLines = [
    'INTRODUCING FEED',
    'FEED APP',
    'MEET THE TEAM',
    'SCHEDULE A MEETING',
    'SEE THE LIVE PROTOTYPE',
  ]
  const handleExit = () => {
    setShow(false)
  }
  useEffect(() => {
    if (isVisible) {
      setShow(true)
    }
  }, [isVisible])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // 持续时间为 1 秒
        >
          <div
            className="text-wrapper"
            style={{ display: show ? 'block' : 'none' }}
          >
            <AnimatePresence onExitComplete={handleExit}>
              {isVisible &&
                TextLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {line}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TextWrapper
