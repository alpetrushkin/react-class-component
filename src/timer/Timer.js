import {Component} from "react";
import styles from './timer.module.css'

class Timer extends Component {
    state = {
        count: 0,
        isCounting: false
    }

    componentDidMount() {
        const userCount = localStorage.getItem('timer')
        if (userCount) {
            this.setState({count: +userCount})
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('timer', this.state.count)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }


    handleStart = () => {
        this.setState({isCounting: true})
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    handleStop = () => {
        this.setState({isCounting: false})
        clearInterval(this.timerId)
    }

    handleReset = () => {
        this.setState({isCounting: false, count: 0})
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.title}>React Timer</div>
                    <div className={styles.count}>{this.state.count}</div>
                    <div className={styles.btnBox}>
                        {!this.state.isCounting
                        ? <button onClick={this.handleStart} className={styles.button}>Start</button>
                        : <button onClick={this.handleStop} className={styles.button}>Stop</button>}
                        <button onClick={this.handleReset} className={styles.button}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer