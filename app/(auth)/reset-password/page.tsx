export const metadata = {
  title: 'IPPER Techonologies - Redefinição de Senha',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <section className="bg-preto-fundo" style={{ minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-120 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4 text-white">Redefinição de Senha</h1>
            <p className="text-xl text-gray-600">Informe o email que você utilizou para fazer o login, e iremos mandar um email para você redefinir sua senha</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-sm font-medium mb-1 text-gray-400" htmlFor="email">Email <span className="text-indigo-700">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Insira seu e-mail" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full">Enviar email</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
