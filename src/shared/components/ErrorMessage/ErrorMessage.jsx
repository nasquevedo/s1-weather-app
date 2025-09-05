import styles from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.container}>
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage