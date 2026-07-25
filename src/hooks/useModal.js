import { useCallback, useEffect, useRef, useState } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Manages open/close state for a modal, traps Tab focus inside it while
 * open, closes on Escape, and returns focus to the element that opened it.
 */
export default function useModal(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  const open = useCallback(() => {
    triggerRef.current = document.activeElement
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    if (triggerRef.current instanceof HTMLElement) {
      triggerRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const node = containerRef.current
    const focusable = node?.querySelectorAll(FOCUSABLE)
    focusable?.[0]?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        close()
        return
      }
      if (e.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return { isOpen, open, close, containerRef }
}