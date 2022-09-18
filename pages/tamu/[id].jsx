/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Script from "next/script"
import { useRouter } from 'next/router'

const Tamu = () => {
  const router = useRouter()
  const { id } = router.query

  return (
          <h1 className="text-4xl mb-5 font-Alice drop-shadow-xl test" id="test">{id}</h1>
  )
}

export default Tamu