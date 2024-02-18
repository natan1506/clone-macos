import { useEffect, useState } from "react"

export function Header() {
  const [hoursNow, setHoursNow] = useState<string>()
  const [dayCurrent, setDayCurrent] = useState<string>()

  const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    setHoursNow(`${hour}:${minute}`)
  }
  
  setInterval(() => {
    getHours()
  }, 1000)

  useEffect(() => {
    var today = new Date().toLocaleDateString('en-us', { weekday:"short", day:"numeric", month:"short" });

   setDayCurrent(today);
  }, [])

  return (
    <div className="dark:text-gray-100 text-gray-800 flex gap-3 shadow-xl backdrop-filter backdrop-blur-md px-2 border dark:border-gray-800 border-gray-400 bg-opacity-60 bg-[#e2e3e5] dark:bg-[#3a3946] dark:bg-opacity-30">
      <div className="flex justify-between items-center w-full">
        <div><span>Clone MacOs</span></div>
        <div className="flex gap-2">
          <span className="text-sm">
            {dayCurrent}
          </span>
          <span className="text-sm">
            {hoursNow}
          </span>
        </div>
      </div>
    </div>
  )
}