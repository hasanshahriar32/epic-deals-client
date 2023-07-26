import { Toaster } from 'react-hot-toast'
import './App.css'
import AllRoutes from './routes/AllRoutes'
// use react query 
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
const queryClient = new QueryClient()


function App() {

  return (
    <>
      {/* // Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
    <AllRoutes></AllRoutes>
    <Toaster/>
    </QueryClientProvider>
   
    </>
  )
}

export default App
