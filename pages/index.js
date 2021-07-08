import Layout from "../components/layout";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import {Fade} from "react-reveal";

export default function Home() {

  const introProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
    config: {
        duration: 800
    }
  })
  const helloProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    config: {
        duration: 800
    }
  })
  const imProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2500,
    config: {
        duration: 800
    }
  })
  const jamesProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2800,
    config: {
        duration: 800
    }
  })

  return (
    <Layout home >
      <animated.div className="introDiv" style={introProps}>
        <h1><animated.span style={helloProps}>Hello,</animated.span> <animated.span style={imProps}>I'm</animated.span> <animated.span style={jamesProps}>James</animated.span></h1>
        <div className="descDiv">
          <Image height={400} width={300} src="/Headshot.JPG" className="headshot"/>
          <hr/>
          <animated.p id="aboutme" style={jamesProps}>I'm a web developer who draws from a Customer relations and Medical end-user background to develop innovative and appealing web solutions. I'm strongly motivated to empower users and businesses by streamlining their interactions. I recently earned a certificate in full stack development from the University of Utah Coding Bootcamp, building strong skills in the SQL, Mongodb, Javascript, Express, Git, Node and React.js. I'm known for being highly collaborative and driven to develop responsive and attractive mobile first web-app designs. With each project I try to build on previous experience and feed-back to make the end-user experience increasingly intuitive and impactful.</animated.p>
          <a id="cvbtn" href="./James Walker CV.pdf" download="JamesWalkerCV">Download my CV</a>
        </div>
        
      </animated.div>
    </Layout>
  )
}
