import QuizCard from "./Quiz"
import useQuizzesStore from "../store/quiz"
import { Center, Loader } from "@mantine/core"

export default function QuizList() {
  const quizzes = useQuizzesStore(state => state.quizzes)
  const params = useQuizzesStore(state => state.params)

  if (!quizzes) { 
    return (
      <Center>
        <Loader variant="dots"/>
      </Center>
    )
  }

  return (
    <>
      {quizzes?.map((quiz, idx) => (
        <QuizCard 
          key={quiz.id}
          index={(params.page-1)*params.maxView + idx+1}
          quiz={quiz}
          styles={(theme) => ({
            root: {
              marginBottom: theme.spacing.xs
            }
          })}
        />
      ))}
    </>
  )
}