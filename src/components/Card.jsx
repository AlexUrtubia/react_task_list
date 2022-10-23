import React from 'react'

export default function Card(props) {
  return (
    <div class="w-3/5 self-start my-10 p-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        {props.children}
    </div>
  )
}
