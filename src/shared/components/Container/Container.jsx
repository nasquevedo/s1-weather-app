import styles from './Container.module.css'

/**
 * Contenedor general para uso
 * recursivo
 * 
 * @param {*} param0 
 * @returns 
 */
const Container = ({ children}) => {
    return <div className={styles.container}>{children}</div>
}

export default Container