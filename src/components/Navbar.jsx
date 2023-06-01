import Link from "next/link"
import { Logo } from "."
import { useRouter } from "next/router"
import { motion ,useScroll} from "framer-motion"
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon, } from './Icons'
const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const CustomLinks = ({ href, className, title }) => {
        const router = useRouter();
        return (
            <li className={`${className} group relative`}>
                <Link href={href} className="">{title}</Link>
                <span className={`h-[2px]
                ${router.asPath === href ? "w-full" : "w-0"}
                color_change
                bg-dark
                ease
                opacity-60
                inline-block duration-500 transition-all
                group-hover:opacity-100
                group-hover:w-full 
                absolute  left-1/2 -translate-x-1/2 -bottom-0.5`}></span>
            </li>
        )
    }
    return (
        <header className="sticky top-0 w-full
        shadow
        z-10 bg-light">
            <nav className="container mx-auto 
            relative
            py-8 font-medium flex items-center justify-between">
                <ul className="flex gap-4 px-4 items-center">
                    <CustomLinks href="/" title="Home">Home</CustomLinks>
                    <CustomLinks href="/about" title="About">About</CustomLinks>
                    <CustomLinks href="/projects" title="Projects">Projects</CustomLinks>
                    <CustomLinks href="/articles" title="Articles">Articles</CustomLinks>
                </ul>
                <ul className="flex gap-4 px-4 items-center justify-center flex-wrap ">
                    <motion.li
                    className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="https://twitter.com" target="_blank">
                            <TwitterIcon />
                        </a>
                    </motion.li>
                    <motion.li
                    className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="" target="_blank">
                            <GithubIcon />
                        </a>
                    </motion.li>
                    <motion.li
                    className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="" target="_blank">
                            <LinkedInIcon />
                        </a>
                    </motion.li>
                    <motion.li
                    className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="" target="_blank">
                            <PinterestIcon />
                        </a>
                    </motion.li>
                    <motion.li
                    className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""
                            whileHover={{
                                y: -9
                                , x: 90
                            }}

                            href="" target="_blank">
                            <DribbbleIcon />

                        </a>
                    </motion.li>

                </ul>
                <div className="absolute left-1/2 top-2 -translate-x-1/2">

                    <Logo></Logo>

                </div>
                <motion.div
        className="progress-bar
        bg-orange-400
        left-0
        h-4
        absolute top-auto bottom-0 "
        style={{ scaleX: scrollYProgress }}
      />
            </nav>

        </header>
    )
}

export default Navbar