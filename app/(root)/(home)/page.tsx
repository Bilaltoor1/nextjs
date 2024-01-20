import Card from "@/components/Card";
import FilterHeader from "@/components/FilterHeader";
import QuestionCreate from "@/components/shared/QuestionCreate";
import {
  deleteQuestion,
  getQuestion,
  getSingleQuestion,
} from "@/lib/actions/question.action";

export default async function Home({ searchParams }: any) {
  const questions = await getQuestion({
    filter: searchParams.filter,
  });
  // await deleteQuestion();
  return (
    <div className="h-screen">
      <h1 className="h1-bold text-dark-100 mt-20">THis is piece of text</h1>
      <FilterHeader />
      <QuestionCreate />
      {questions?.map((item) => <Card item={item} key={item._id} />)}
    </div>
  );
}
