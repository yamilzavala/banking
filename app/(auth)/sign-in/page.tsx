
import AuthForm from "@/components/AuthForm"
import styles from "./page.module.scss"

const SignIn = () => {
  return (
    <section className={styles.center}>
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn