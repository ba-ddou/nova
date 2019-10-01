import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'
import SliderCard from './components/SliderCard'
import Pagination from './components/Pagination';
import branding from '../../assets/images/branding.jpg'
import web from '../../assets/images/web.jpg'
import design from '../../assets/images/design.jpg'
import swipe from './swipe'
@observer
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            nextLeft: "-100%"
        }
        this.slide = this.slide.bind(this);
        this.onTabClick = this.onTabClick.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.swipeTimeout = this.swipeTimeout.bind(this);
    }
    componentDidMount = () => {
        swipe(this.slideLeft, this.slideRight);
        setTimeout(() => {
            this.setState({ left: "-200%", nextLeft: "-100%" });
        }, 2000);
        this.timer = setInterval(this.slide, 5000);
    }

    slide() {
        this.setState((state, props) => {
            if (state.left === 0) return { left: "-100%", nextLeft: "-200%" }
            else if (state.left === "-200%") return { left: "-100%", nextLeft: 0 }
            else if (state.left === "-100%") return { left: state.nextLeft }
        });
    }

    onTabClick(position) {
        // alert(position);
        this.swipeTimeout();
        if (position === 0) this.setState({ left: 0, nextLeft: "-100%" })
        else if (position === "-200%") this.setState({ left: "-200%", nextLeft: "-100%" })
        else if (position === "-100%") this.setState({ left: "-100%", nextLeft: "-200%" })

    }

    slideLeft() {
        this.swipeTimeout();
        this.setState((state, props) => {
            if (state.left === 0) return { left: "-100%", nextLeft: "-200%" }
            else if (state.left === "-100%") return { left: "-200%", nextLeft: "-100%" }
            else if (state.left === "-200%") return {}
        });
    }

    slideRight() {
        this.swipeTimeout();
        this.setState((state, props) => {
            if (state.left === 0) return {}
            else if (state.left === "-100%") return { left: 0, nextLeft: "-100%" }
            else if (state.left === "-200%") return { left: "-100%", nextLeft: 0 }
        });
    }

    swipeTimeout() {
        clearInterval(this.timer);
        setTimeout(() => {
            this.timer = setInterval(this.slide, 5000);
        }, 16000);
    }


    render() {
        return (
            <div id="slider">

                <div id="slider-wrapper" style={{
                    left: this.state.left
                }}>
                    <SliderCard id="sliderCard-branding"
                        style={{
                            backgroundImage: `url(${branding})`
                        }}
                        data={{
                            title: "Branding",
                            description: "Working in a deeply collaborative manner with each of our clients, we can identify what makes you different; curating a style, tone of voice, and visual identity which creates a stronger connections with your customers. "
                        }} />
                    <SliderCard id="sliderCard-web"
                        style={{
                            backgroundImage: `url(${web})`
                        }}
                        data={{
                            title: "Web",
                            description: "We develop fast, reliable and secure web apps and infrastructures using cutting-edge technologies. Your website is the hub of your online presence and we want to ensure that it provides your users with the best possible experience."
                        }} />
                    <SliderCard id="sliderCard-design"
                        style={{
                            backgroundImage: `url(${design})`
                        }}
                        data={{
                            title: "UI/UX",
                            description: "We translate your company's vision into interfaces and experiences that users love. Your online appearance will be seen and judged by an audience and we want to ensure you are prepared to capture their attention and hold it in place."
                        }} />
                </div>
                <Pagination onTabClick={this.onTabClick} position={this.state.left} />

            </div>
        )
    }
}
