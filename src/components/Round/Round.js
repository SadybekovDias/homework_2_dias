import styles from './Round.css'

const Round = (props) => {
    const {num} = props
    return (
        <div className={styles.krug}>
            <p>{num}</p>
        </div>
    )
}

export default Round;