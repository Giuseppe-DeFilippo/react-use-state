//importiamo i componenti 
import Button from "./components/ButtonComponents.jsx"
import languages from "./data/languages.js"
//funzione App()
function App() {
  //parte logica


  //parte html
  return (
    <>
      <header className="bg-secondary p-2">
        <h1>Learn Web Development</h1>
      </header>
      <main className="">
        <Button language={languages} />
      </main>
      <footer></footer>

    </>
  )


}

export default App;