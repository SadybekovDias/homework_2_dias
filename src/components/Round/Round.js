import styles from './Round.css'

const Round = (props) => {
    const {num} = props
    return (
        <div className={styles.circle}>
            <p className='loto'>{num}</p>
        </div>
    )
}

export default Round;