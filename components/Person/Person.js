import Loading from "@/components/Loading";
import PersonMovies from "@/components/Person/PersonMovies";
import { handleImgUrl } from "@/config/functions";
import Image from "next/image";
import { Suspense } from "react";

const PersonProfileImage = ({ data }) => {
  return (
    <div className="w-[30%] relative h-[100%] border border-black-30">
      <Image src={handleImgUrl(data, "profile")} fill alt="" />
    </div>
  );
};

const PersonDetails = ({ data }) => {
  return (
    <div className="flex flex-grow flex-col gap-4 border border-white-30 p-2">
      <div className="flex flex-col gap-3 ">
        <i className="text-xl opacity-50">Also Known As : </i>
        {data.also_known_as.map((item, i) => (
          <label className="text-xl" key={i}>
            {item}
          </label>
        ))}
      </div>
      <div className=" flex gap-3 text-xl">
        <i className="opacity-50 ">Born in : </i>
        <label>{data.place_of_birth}</label>
      </div>
      <div className=" flex gap-3 text-xl">
        <i className="opacity-50 ">Birthday : </i>
        <label>{data.birthday}</label>
      </div>
      {data.deathday && (
        <div className=" flex gap-3 text-xl">
          <i className="opacity-50 ">Deathday : </i>
          <label>{data.deathday}</label>
        </div>
      )}{" "}
      <div className=" flex gap-3 text-xl">
        <i className="opacity-50 ">Popularity : </i>
        <label>{data.popularity}</label>
      </div>
    </div>
  );
};

const Person = ({ data }) => {
  return (
    <div className=" flex flex-col w-full dark:text-white px-4  ">
      <h3 className="text-4xl pb-2 border-b-4 border-white-30 w-max">{data.name}</h3>
      <p className="text-lg opacity-50 pb-2">
        {data.known_for_department} . {data.place_of_birth}
      </p>
      <div className="h-[30rem] gap-4 w-full flex relative ">
        <PersonProfileImage data={data} />
        <Suspense fallback={<Loading absloute />}>
          <PersonMovies data={data.movies} />
        </Suspense>
        <PersonDetails data={data} />
      </div>
      <div className="text-justify flex gap-4 flex-col">
        <h3 className="py-4 border-b-4 border-b-white-30 text-4xl opacity-50">Biography</h3>
        <p className=" text-lg">{data.biography}</p>
      </div>
    </div>
  );
};

export default Person;
