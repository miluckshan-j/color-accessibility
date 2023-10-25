import "./App.css";
import Card from "./components/Card";
import ColorSelector from "./components/ColorSelector";

function App() {
  return (
    <>
      <header className="my-4 p-2">
        <h1 className="text-2xl font-bold">Color Contrast Checker</h1>
      </header>
      <main className="mt-16 p-2">
        <div className="grid gap-4 md:gap-8 md:grid-cols-7">
          <ColorSelector classes="md:col-span-3 p-0" color="#ACC8E5" />
          <div className="flex justify-center items-center">
            <button className="px-4 py-2 bg-slate-200 rounded-lg">Flip</button>
          </div>
          <ColorSelector classes="md:col-span-3 p-0" color="#282A46" />
          <Card classes="md:col-span-7 grid gap-4 md:grid-cols-6">
            <div className="md:col-span-6 text-center">
              <p>Contrast Ratio</p>
              <p className="text-2xl font-semibold">7.5:1</p>
            </div>
            <Card classes="md:col-span-2 grid gap-4 md:grid-cols-2">
              <p className="md:col-span-2 text-sm text-center">Normal Text</p>
              <div className="md:col-span-1 grid gap-2 justify-center text-center">
                <p className="text-sm">WCAG AA</p>
                <p className="text-sm px-4 py-1 bg-green-600 text-white rounded-lg">
                  Pass
                </p>
              </div>
              <div className="md:col-span-1 grid gap-2 justify-center text-center">
                <p className="text-sm">WCAG AAA</p>
                <p className="text-sm px-4 py-1 bg-green-600 text-white rounded-lg">
                  Pass
                </p>
              </div>
            </Card>
            <Card classes="md:col-span-2 grid gap-4 md:grid-cols-2">
              <p className="md:col-span-2 text-sm text-center">Large Text</p>
              <div className="md:col-span-1 grid gap-2 justify-center text-center">
                <p className="text-sm">WCAG AA</p>
                <p className="text-sm px-4 py-1 bg-green-600 text-white rounded-lg">
                  Pass
                </p>
              </div>
              <div className="md:col-span-1 grid gap-2 justify-center text-center">
                <p className="text-sm">WCAG AAA</p>
                <p className="text-sm px-4 py-1 bg-red-600 text-white rounded-lg">
                  Fail
                </p>
              </div>
            </Card>
            <Card classes="md:col-span-2 grid gap-4">
              <p className="text-sm text-center">UI Components</p>
              <div className="grid gap-2 justify-center text-center">
                <p className="text-sm">WCAG AA</p>
                <p className="text-sm px-4 py-1 bg-green-600 text-white rounded-lg">
                  Pass
                </p>
              </div>
            </Card>
          </Card>
        </div>
      </main>
    </>
  );
}

export default App;
