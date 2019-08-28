import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styles from './styles.scss'
import SliderCard from './components/SliderCard'
import Pagination from './components/Pagination';


@observer
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            nextLeft: "-100%"
        }
        this.slide = this.slide.bind(this);
    }
    componentDidMount = () => {
        setInterval(this.slide, 5000);
    }

    slide() {
        this.setState((state, props) => {
            if (state.left === 0) return { left: "-100%", nextLeft: "-200%" }
            else if (state.left === "-200%") return { left: "-100%", nextLeft: 0 }
            else if (state.left === "-100%") return { left: state.nextLeft }
        });

    }


    render() {
        return (
            <div id="slider">

                <div id="slider-wrapper" style={{
                    left: this.state.left
                }}>
                    <SliderCard data={{
                        title: "Branding",
                        description: "Working in a deeply collaborative manner with each of our clients, we can identify what makes you different; curating a style, tone of voice, and visual identity which creates a stronger connections with your customers. "
                    }} />
                    <SliderCard data={{
                        title: "Web",
                        description: "Go digital and build your web infrastructure using cutting-edge technologies."
                    }} />
                    <SliderCard data={{
                        title: "Design",
                        description: "Communicate your ideas through captivating designs."
                    }} />
                </div>
                <Pagination position={this.state.left} />

            </div>
        )
    }
}
