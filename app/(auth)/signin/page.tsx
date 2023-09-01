'use client'
import React, { useState } from 'react';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/autentica/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        
      });

      console.log('Ate aqui tudo certo');
      console.log(response)

      if (response.ok) {
        const data = await response.json();
        console.log('Ate aqui tudo muito certo');

        if (data.authenticated) {
          // Lógica de sucesso, redirecionar para a página Verifica
          window.location.href = '/verifica';
        } else {
          // Lógica de erro
          console.error('Credenciais inválidas');
        }
      } else {
        // Lógica de erro
        console.error('Erro ao autentica');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <section className="bg-gradient-to-b from-preto-fundo to-indigo-1000" style={{ minHeight: '100vh' }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        <div className="text-center pb-12 md:pb-16">
             <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-300">IPPER<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-300"> Technologies</span> </h1>
             <div className="max-w-3xl mx-auto">
               <p className="text-xl text-gray-600 mb-8" data-aos-delay="150">Intelligent Personal Protection Equipment Recognition </p>
               <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
               </div>
            </div>
           </div>

          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Campo de email */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Insira seu endereço de email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* Campo de senha */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-400 text-sm font-medium mb-1" htmlFor="password">
                      Senha
                    </label>
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-800"
                    placeholder="Insira sua senha"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {/* Botão de login */}
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full" type="submit">
                    Entrar
                  </button>
                </div>
              </div>
              {/* Exibir mensagem de erro, se houver 
              {errorMessage && (
                <div className="mt-4 text-red-500">{errorMessage}</div>
              )}*/}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
