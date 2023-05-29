export const metadata = {
  title: 'IPPER Technologies - Login',
  description: 'IPPER Technologies',
}

import Link from 'next/link'
import React from 'react';
import connectToDatabase from '../../../conexao';


export default function SignIn() {

  class Login extends React.Component<{}, any> {
    constructor(props: {}) {
      super(props);
  
      this.state = {
        email: '',
        password: '',
        errorMessage: '',
      };
    }
  
    handleLogin = async () => {
      const { email, password } = this.state;
  
      try {
        const db = await connectToDatabase();
        const collection = db.collection('dados');
        const user = await collection.findOne({ email });
  
        if (user && user.password === password) {
          // Login successful
          this.setState({ errorMessage: 'Logged in successfully!' });
        } else {
          // Invalid email or password
          this.setState({ errorMessage: 'Invalid email or password' });
        }
      } catch (error) {
        // Error connecting to the database
        this.setState({ errorMessage: 'Error connecting to the database' });
        console.error(error);
      }
    };
  
     handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    render() {
      const { email, password, errorMessage } = this.state;

  
  return (
    <section className="bg-preto-fundo"style={{ minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-300">IPPER<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-300"> Technologies</span> </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8"data-aos-delay="150">Intelligent Personal Protection Equipment Recognition </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="email" >Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Insira seu endereço de email" required value={email} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="password" >Senha</label>
                   
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Insira sua senha" required value={password} onChange={this.handleChange}/>
                  
                </div>
                
              </div>
              
              <div className="flex flex-wrap -mx-3 mb-4 md:grid-cols-1 lg:grid-cols-2">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-600 ml-2">Manter conectado</span>
                    </label>
                  </div>
                  <div>
                  <Link href="/reset-password" className="text-sm font-medium text-indigo-600 hover:underline">Esqueceu sua senha?</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full" onClick={this.handleLogin}>Entrar</button>
                </div>
                <div>{errorMessage}</div>
              </div>
            </form>
           
            
          </div>

        </div>
      </div>
    </section>
  )
}
  }}
