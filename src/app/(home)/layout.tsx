
import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import BentoGrid from "app/components/shared/bentoGrid/page";


export default function HomeLayout({children} : {children: React.ReactNode}){
    return(
        <div>

            <BentoGrid />

            <Description />

            {children}

        </div>
    )
}
