import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={"bg-background h-screen"}>
      <Image
        className={"absolute bottom-0"}
        src="/forg-self-portrait.png"
        alt="forg self portrait"
        width={500}
        height={500}
      />
    </div>
  )
}
