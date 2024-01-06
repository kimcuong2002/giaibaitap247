import { createQueryKeys } from '@lukemorales/query-key-factory';

import questionsApi from '@/api/questions';

const questions = createQueryKeys('questions', {
  getAllQuestions: () => ({
    queryKey: ['questions'],
    queryFn: ({ queryKey = 'paginate?page=1&limit=10' }) =>
      questionsApi.getAllQuestions({ queryKey }),
    }),
    
    
});
