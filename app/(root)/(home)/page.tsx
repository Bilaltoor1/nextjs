import Card from "@/components/Card";
import FilterHeader from "@/components/FilterHeader";
import QuestionCreate from "@/components/shared/QuestionCreate";
import {
    getQuestion,
} from "@/lib/actions/question.action";
import ButtonLightDarkMode from "@/components/LightDarkMode/ButtonLightDarkMode";
import Pagination from "@/components/pagination/pagination";

export default async function Home({searchParams}: any) {
    const {questions, isNext} = await getQuestion({
        filter: searchParams.filter,
        searchQuery: searchParams.q,
        page: searchParams.page ? +searchParams.page : 1,
        pageSize : searchParams.pageSize ? +searchParams.pageSize : 2,
    });
    // await deleteQuestion();
    return (
        <div className="h-screen">
            <h1 className="h1-bold text-dark-100 mt-20">THis is piece of text</h1>
            <FilterHeader/>
            <ButtonLightDarkMode/>

            <QuestionCreate/>
            {questions?.map((item) => <Card item={item} key={item._id}/>)}
            <Pagination pageNumber={
                searchParams && searchParams.page
                    ? +searchParams.page
                    : 1
            } isNext={isNext}/>
        </div>
    );
}
