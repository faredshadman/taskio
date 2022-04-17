import { BsArrowRightShort } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const data2 = ["Fərid", "Şadmanlı", "Fikrət", "Fərid", "Şadmanlı", "Fikrət"];
const HeroSection = ({ jobTags }) => {
  const [data, setData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [more, setMore] = useState(false);
  useEffect(() => {
    setData(jobTags);
    setFilteredJobs(jobTags);
  }, [jobTags]);
  const handleSearch = (filter) => {
    setSearch("");
    setData(jobTags);
    let x = data.filter((f) => f.name.toLowerCase().includes(filter));
    setFilteredJobs(x);
  };

  return (
    <section className="bg-[#e5e5e561] font-montserrat">
      <div className="max-w-6xl py-10 sm:py-20 mx-auto relative">
        <div className="absolute xl:inline-block hidden right-[-5rem] top-20">
          <Image
            height={500}
            width={400}
            src="/img/girl_boy.svg"
            alt="girl_and_boy_sitting"
            objectFit="contain"
          />
        </div>
        <section className="text-center sm:text-left">
          <p className="font-bold text-secondary">Ağıllı axtarış</p>
          <h1 className="sm:text-6xl text-4xl mt-4 sm:mt-6 text-primary font-extrabold">
            İstənilən növ xidmət
          </h1>
          <h1 className="sm:text-6xl text-4xl mt-2 font-extrabold text-secondary">
            Taskioda!
          </h1>
        </section>
        <div className="mt-10 text-center inline-block">
          <div className="inline-flex space-x-6 h-12">
            <input
              onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
              type="text"
              value={search}
              name="search"
              placeholder="Axtar..."
              className="border-2 sm:w-[520px] w-[250px]  placeholder-primary placeholder:italic rounded-full bg-white shadow-sm px-6  outline-none"
            />
            <div
              onClick={() => handleSearch(search)}
              className="flex group items-center px-1 rounded-full bg-secondary space-x-2">
              <div className="bg-white rounded-full p-2">
                <BsArrowRightShort className="text-secondary hover:-rotate-90 transition-all ease-in-out duration-150 text-2xl" />
              </div>
              <button className="text-white font-medium pr-4">Axtar</button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="font-montserrat font-bold">
              <div className="grid px-6 sm:px-0 sm:grid-cols-3 grid-cols-2 mt-6 gap-2">
                {filteredJobs.map((job) => (
                  <div
                    className="rounded-full shadow-sm hover:text-white hover:bg-primary transition-all duration-100 ease-out text-center p-2 bg-slate-50"
                    key={job.id}>
                    {job.name}
                  </div>
                ))}
              </div>
              {more && (
                <div className="grid sm:grid-cols-3 grid-cols-2 mt-6 gap-2">
                  {data2.map((e, index) => (
                    <div
                      className="rounded-full hover:text-white hover:bg-primary transition-all duration-100 ease-out text-center py-2 px-3 bg-slate-50"
                      key={index}>
                      {e}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setMore(!more)}
              className="underline text-secondary w-24 self-center mt-6 sm:mt-0 sm:self-end">
              {more ? "Daha az" : "Daha çox"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
