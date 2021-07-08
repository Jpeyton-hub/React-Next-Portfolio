import Layout from '../components/layout';
import { useSpring, animated } from "react-spring";

const Contact = () => {

    const titleprops = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 800,
        config: {
            duration: 800
        }
      })
    const emailprops = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1000,
        config: {
            duration: 800
        }
      })
    const linkedprops = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1200,
        config: {
            duration: 800
        }
      })
    const gitprops = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1400,
        config: {
            duration: 800
        }
      })
    const endprops = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1600,
        config: {
            duration: 800
        }
      })

    return (
        <Layout contact >
            <div className='contactDiv'>
                <animated.h1 style={titleprops}>Let's get in Touch!</animated.h1>
                <animated.h2 style={emailprops} className='emailline'>Feel free to <a className='mailto' href='mailto:jpwalk319@gmail.com'>email me</a></animated.h2>
                <animated.h2 style={linkedprops} className='emailline'>Find me on <a className='mailto' href='https://www.linkedin.com/in/james-walker-727270206/'>Linkedin</a></animated.h2>
                <animated.h2 style={gitprops} className='emailline'>Or visit my <a className='mailto' href='https://github.com/Jpeyton-hub'>Github Page</a></animated.h2>
                <animated.h4 style={endprops} className='emailline'>I'm always happy to collaborate on projects or just chat about new things in the tech world!</animated.h4>               
            </div>
            
        </Layout>
    )
}

export default Contact
