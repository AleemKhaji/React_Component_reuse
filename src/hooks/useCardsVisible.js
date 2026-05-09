import { useState, useEffect } from 'react'

function getCardsVisible() {
  const w = window.innerWidth
  if (w < 576)  return 1   // mobile
  if (w < 1024) return 2   // tablet
  return 3                  // desktop
}

export default function useCardsVisible() {
  const [cardsVisible, setCardsVisible] = useState(
    getCardsVisible()   // initialise from current width
  )

  useEffect(() => {
    function handleResize() {
      setCardsVisible(getCardsVisible())
    }

    window.addEventListener('resize', handleResize)

    // cleanup — remove listener when component unmounts
    return () => window.removeEventListener('resize', handleResize)
  }, [])  // empty array = run once on mount

  return cardsVisible
}
