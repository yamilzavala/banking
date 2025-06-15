import AuthForm from "@/components/AuthForm"
import styles from "./page.module.scss"

const SignUp = async () => {
  return (
    <section className={styles.center}>
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp