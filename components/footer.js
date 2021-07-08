import Image from 'next/image'
import {useSpring, animated} from 'react-spring'


const Footer = () => {

    const footProps = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1300,
        config: {
            duration: 800
        }
      });

    return (
        <animated.footer style={footProps}>
            <Image width={250} height={30} src='/NameTransparent.png' />
            <h5>&#169; 2021</h5>
        </animated.footer>
    )
}

export default Footer
