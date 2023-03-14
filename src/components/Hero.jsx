import { motion } from "framer-motion"
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Finn</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className="text-[#915eff]">computer science student <br className="sm:block hidden"/></span> creating <span className="text-[#915eff]">mods and games</span>, based in the UK.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      
    </section>
  )
}

export default Hero