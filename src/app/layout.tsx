import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google'

import { Open_Sans, Roboto_Mono, Anek_Latin } from 'next/font/google'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const dingTalkFont = localFont({
  src: 'fonts/DingTalk JinBuTi.ttf',
  display: 'swap',
  variable: '--font-dingtalk',
})

const smileyFont = localFont({
  src: 'fonts/SmileySans.ttf',
  display: 'swap',
  variable: '--font-smiley',
})

const wujieheiFont = localFont({
  src: 'fonts/WuJieHei.ttf',
  display: 'swap',
  variable: '--font-wujiehei',
})

const notoscFont = localFont({
  src: 'fonts/NotoSerifSC-Black.otf',
  display: 'swap',
  variable: '--font-notosc',
})

const kingsoftFont = localFont({
  src: 'fonts/Kingsoft_Cloud_Font.ttf',
  display: 'swap',
  variable: '--font-kingsoft',
})

const xinYiGuanHeiFont = localFont({
  src: 'fonts/ZiTiQuanXinYiGuanHeiTi.ttf',
  display: 'swap',
  variable: '--font-xinyiguanhei',
})

const alibabaFont = localFont({
  src: 'fonts/AlibabaPuHuiTi-3-55-Regular.ttf',
  display: 'swap',
  variable: '--font-alibaba',
})
 
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})
 

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

//👇 Configure the object for our second font
const ankeLatin = Anek_Latin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anke',
})
 
export const metadata: Metadata = {
 
  title: " Jcover - Better Cover Image Generator Tools",
  description: "Jcover is a better cover image generator tool for Medium, YouTube, BiliBili, Blog and more.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${robotoMono.variable} ${ankeLatin.variable} ${wujieheiFont.variable} ${smileyFont.variable} ${notoscFont.variable} ${kingsoftFont.variable} ${xinYiGuanHeiFont.variable} ${alibabaFont.variable} font-sans light`}>

      <body>
        <Providers>
          {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-L0HREZLHE4" />
    </html>
  );
}