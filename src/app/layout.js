
import NextTopLoader from 'nextjs-toploader'
import './globals.css'




export async function generateMetadata(){
  const data = await(await fetch(process.env.BASE_URL + "/api/home-meta")).json()
  return{
    "title": data.data.title,
    "description": data.data.description,
    "keywords": "next.js project, news portal nextjs project, full stack nextJS project, full stack news website, NEXT.JS PROJECT",
    "openGraph": {
      "title": data.data.title,
      "images": data.data.img,
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NextTopLoader color="#6ED1EC" height={2} speed={200} showSpinner={false}/>
        </body>
    </html>
  )
}
