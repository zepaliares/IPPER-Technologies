// import React from 'react';
// import {handleSignIn, SignIn} from 'app/(auth)/signin/page.tsx'
// import Connect from '../components/formMongo.mjs'

// let emailForm = null; // Variável para armazenar o primeiro valor retornado por handleSignIn
// let senhaForm = null;

// let emailBanco = null; // Variável para armazenar o primeiro valor retornado por handleSignIn
// let senhaBanco = null;

// const ConnectToDB = () => {

//   const {emails} = Connect();
//   emailBanco = emails;
//   // Chama handleSignIn para obter email e password
//   const { email, password } = handleSignIn();
//   emailForm = email; // Atribui o valor retornado por handleSignIn à variável valor1
//   senhaForm = password; // Atribui o valor retornado por handleSignIn à variável valor2

//   // Chama fetchData passando email e password como argumentos
//   fetchData(email, password);

//   console.log('Valor da usuário:', emails);
//   console.log('Valor 1:', emailForm);
//   console.log('Valor 2:', senhaForm);
 

//   return (
//     <div>
//       {emails === emailForm ? window.location.href = '../app/(auth)/verifica' : window.location.href = '../app/(auth)/signin'}
//     </div>
//   );
// };


// export default ConnectToDB;
