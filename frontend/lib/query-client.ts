import {QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Tempo em milissegundos para considerar o cache inválido
        staleTime: 1000 * 60 * 5, // 5 minutos
        refetchOnWindowFocus: false,
      },
    },
  });

export default queryClient