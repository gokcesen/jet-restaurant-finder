import RestaurantCard from './components/RestaurantCard'
import { mockRestaurants } from './data/mockRestaurants'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-3xl font-bold text-orange-600">
          Restaurant Finder
        </h1>

        <RestaurantCard restaurant={mockRestaurants[0]} />
      </div>
    </main>
  )
}

export default App
