import { Button } from "@/components/ui/button"
import { Hero } from "../../hero"
import { Services } from "@/components/Services"
import { Fleet } from "@/components/Fleet"
import { About } from "@/components/About"
import { Booking } from "@/components/Booking"
import { Contact } from "@/components/Contact"
export const HomeComponent = () => {

return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Fleet />
      <About />
      <Booking />
      <Contact />
    </div>
)

}


export default HomeComponent