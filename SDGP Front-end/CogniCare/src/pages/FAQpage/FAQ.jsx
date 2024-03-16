import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-violet-500 to-blue-700">
      <div className="p-4">
      
        <h1 className="mt-5 mb-6 text-center p-4" style={{fontFamily:"-moz-initial", fontSize:"80px", color:"#F0F3F4", fontWeight:"bold"}}>FAQ</h1>
        <FAQ />
      </div>
    </div>
  );
}

export default App;