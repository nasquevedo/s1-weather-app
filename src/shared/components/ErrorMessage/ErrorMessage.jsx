import styles from './ErrorMessage.module.css'

/**
 * Muestra el mensaje enviado
 * para uso recursivo
 * 
 * @param {*} param0 
 * @returns 
 */
const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.container}>
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage