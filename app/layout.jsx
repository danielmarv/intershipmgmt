import '@styles/globals.css';
import Sidebar from '@components/Sidebar/Sidebar';


export const metadata = {
  title: "BU IMS",
  description: 'Internship Management System'
}; 

const RootLayout = ({children}) => {
    
    return (
        <html lang="en">
            <body>
                
                <div className="main">
                    <div className="gradient"/>
                </div>

                <main className="app">
                    <div className="flex">
                        <aside className="max-w-[64px] xl:w-full xl:max-w-[280px]">
                            <Sidebar />
                        </aside>
                        <main className="flex-1">
                            {children}
                        </main>
                    </div>
                </main>
            </body>
        </html>
    )
  }
  
  export default RootLayout;