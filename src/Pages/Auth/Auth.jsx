import React, { useContext, useState } from 'react'
import styles from './Auth.module.css'
import { Link, useNavigate } from 'react-router'
import AuthLogo from './asset/amazon_logo_Auth.png'
import { auth } from '../../Utility/Firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {ClipLoader} from 'react-spinners'
import { Type } from "../../Utility/action.type.js";

import { DataContext } from '../../Components/DataProvider/DataProvider'

function Auth() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [{user}, dispatch] = useContext(DataContext);
const [loading, setLoading] = useState({
  signIn: false,
  signUp: false,
});

const navigate = useNavigate()

// console.log(password, email);


// console.log(user);

const authHundler = async(e)=> {
e.preventDefault()
let names = e.target.name
// console.log(names)

if (names == "signin") {
setLoading({...loading, signIn:true})
signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
  console.log(userInfo)
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user,
  })
  setLoading({...loading, signIn:false});
  navigate('/')
}).catch((err)=>{
  console.log(err)
  setError(err.message)
  setLoading({ ...loading, signIn: false });
})

}else {
createUserWithEmailAndPassword(auth, email,password).then((userInfo)=> {
  console.log(userInfo)
  setLoading({...loading, signUp:true })
dispatch({
  type: Type.SET_USER,
  user: userInfo.user,
});
 setLoading({ ...loading, signUp:false });
 navigate("/");
}).catch((err)=> {
  console.log(err)
  setError(err.message);
   setLoading({ ...loading, signUp: false });
})
}
}



  return (
    <>
      <section className={styles.AuthContainner}>
        <Link to='/'>
          <img src={AuthLogo} alt="" />
        </Link>

        <div className={styles.formContainner}>
          <h1>Sign In</h1>
          <form className={styles.form} action="">
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />{" "}
              {/*we call such a setup controlled input where we get our inputes using useState */}
            </div>

            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>

            <button type="submit" 
            name="signin" 
            onClick={authHundler}>
              {loading.signIn ? (
                <ClipLoader color="#fff" size={15}></ClipLoader>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p>
            By signing-in you agree to the AMAZONE CLONED STORE conditions of
            Use & Sale. Please see our privacy Notice, our cokies Notice and our
            Interest-Based Ads Notice.{" "}
          </p>

          <button type="submit" 
          name="signup" 
          onClick={authHundler}>
            {loading.signUp ? (
              <ClipLoader color="#fff" size={15}></ClipLoader>
            ) : (
              "Create your Amazon Acount"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </>
  );
}

export default Auth
