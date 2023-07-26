import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import CategoryNav from '@/components/CategoryNav'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Purple Place',
  description: 'Made by Noushin Tabassum Elina',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <NavBar></NavBar>

        <CategoryNav></CategoryNav>

        <div className="flex container mx-auto overflow-hidden px-3 z-10">
          <Sidebar></Sidebar>
          <div className=''> {children} </div>
        </div>


        <footer>This is footer</footer>
      </body>
    </html>
  )
}
