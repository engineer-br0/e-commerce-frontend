const logout = () => {
  try {
    //const { setIsLogin } = ContextInit();
    //   console.log("Logging out");
    const cookie = document.cookie;
    //console.log("cookie", cookie);
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;;`;
    //console.log("cookie", cookie);
    //setIsLogin(false);
    return true;
  } catch (er) {
    console.log("er", er);

    return false;
  }
};

export default logout;

///// logout chal gya hai bro......
