import { Button } from 'flowbite-react';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-hospital-blue mb-4">
        Hospital Booking System
      </h1>
      <Button color="blue">Test Flowbite Button</Button>
      <p className="mt-4 text-gray-600">
        If this button is styled, Tailwind + Flowbite works!
      </p>
    </div>
  )
}

export default App