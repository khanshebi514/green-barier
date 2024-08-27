import React from 'react'

export default function LinkUi({path, label}) {
  return (
    <li className="text-white list-disc ml-4">
        <a className="text-white" href={path}>{label}</a>
    </li>
  )
}
