import {Ubuntu, Major_Mono_Display} from "next/font/google";


export const ubuntu = Ubuntu({
  weight: ["300", "500", "700"],
  subsets: ["latin-ext"]

})
export const majorMonoDisplay = Major_Mono_Display({
  weight: ["400"],
  subsets: ["latin-ext"],
  preload: true,
  style: "normal"
})