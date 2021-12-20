import { signIn, useSession, signOut } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SignInButton(){
  const { data: session, status } = useSession()

  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/>
      {session?.user.name}
      <FiX 
        color="#737380" 
        className={styles.closeIcon}
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('GitHub')}
    >
      <FaGithub color="#eba417"/>
      Sign In with GitHub
    </button>
  );
}