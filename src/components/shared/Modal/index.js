import React, { useEffect, useCallback } from 'react'
import classNames from 'classnames'

export default function Modal({ show, onClose, children, center, big ,escape,opacity}) {
  const closeOnEscape = useCallback((event) => {
    event = event || window.event

    let isEscape = false
    if ('key' in event) {
      isEscape = event.key === 'Escape' || event.key === 'Esc'
    } else {
      isEscape = event.keyCode === 27
    }

    if (isEscape && show) {
      onClose()
    }
  }, [])

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscape, escape)

    return function cleanUp() {
      return document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const centerPosition = center ? 'flex items-center justify-center' : null
  let childPosition = center ? 'flex lg:w-2/3 w-4/5 items-center justify-center mt-2' : null

  if (big) {
    childPosition += 'xl:w-8/12 lg:w-7/12 md:w-7/12 sm:w-8/12 w-full'
  }

  const bodyClass = classNames(
    `fixed min-h-full w-full top-0  left-0 z-50 bg-gray-900 ${opacity} ${centerPosition}`,
    {
      'opacity-0': !show,
      // 'animate-modalOut': !show,
      'pointer-events-none': !show,
      'overflow-x-hidden': show,
      'overflow-y-visible': show,
      'animate-modalIn': show,
    }
  )

  return (
    <div className={bodyClass}>
      <div className={childPosition}>{children}</div>
    </div>
  )
}
