"use client";

import React from "react";
import { JOB_MATCH } from "./static";
import JobMatchCard from "./JobMatchCard";
import {useForm} from "react-hook-form";
import {IJobSearch} from "@/lib/types";
import {useJobSearch} from "@/lib/hooks";
import Spinner from "@/components/ui/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {addJob, selectJobs} from "@/store/slices/jobSearch";

const JobMatches = () => {
  const JOBS = useSelector(selectJobs)

  const dispatch = useDispatch();
  const {mutate, isPending }= useJobSearch()

  const {
    handleSubmit,
      formState:{errors},
      register,
      reset,
  } = useForm<IJobSearch>({
    mode:'onBlur'
  })

  const onSubmit = (data:IJobSearch) => {
    mutate(data,{
      onSuccess:(data: any) => {
        dispatch(addJob(data))
        reset()

      }
    })
  }
  // const [value, setValue] = React.useState<number>(50);
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-slate-950">
      {/* filters */}
      <div className="col-span-1">
        <div className="grid-style">
          <h2 className="text-gray-700 heading dark-text-white">Filter Jobs</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* job title */}
            <div className="my-3">
              <label className="block text-sm heading text-gray-700 dark:text-gray-300 mb-1">
                Job Title
              </label>
              <input
                type="text"
                  {...register('job_title',{
                    required:'job title is required',
                    minLength:{value: 3, message:'job title must be at least 3 characters long'}
                  })}
                placeholder="e.g full stack developer"
                className="w-full text-sm px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue dark:bg-slate-800 dark:text-white"
              />
              {errors.job_title && <p className={'text-sm text-red-400 mt-2 font-light'}>{errors.job_title.message}</p>}
            </div>

            {/* location */}
            <div className="my-3">
              <label className="block text-sm heading text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <input
                type="text"
                {...register('location',{
                  required: 'location is required',
                  minLength : {value:3, message:'location must be at least 3 characters long'}
                })}
                placeholder="e.g New York"
                className="input-style"
              />
              {errors.location && <p className={'text-sm text-red-400 mt-2 font-light'}>{errors.location.message}</p>}

            </div>

            {/* remote only */}
            {/*<div className="my-3">*/}
            {/*  <label className="block text-sm heading text-gray-700 dark:text-gray-300 mb-1">*/}
            {/*    Remote Only*/}
            {/*  </label>*/}
            {/*  <div className="flex items-center space-x-2">*/}
            {/*    <input*/}
            {/*      type="checkbox"*/}
            {/*      id="remoteOnly"*/}
            {/*      className="h-4 w-4 bg-brand-blue"*/}
            {/*    />*/}
            {/*    <label*/}
            {/*      className="text-sm text-gray-700 dark:text-gray-300"*/}
            {/*      htmlFor="remoteOnly"*/}
            {/*    >*/}
            {/*      Show Remote Jobs Only Only*/}
            {/*    </label>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/* date posted */}
            {/*/!* location *!/*/}
            {/*<div className="my-3">*/}
            {/*  <label className="block text-sm heading text-gray-700 dark:text-gray-300 mb-1">*/}
            {/*    Location*/}
            {/*  </label>*/}
            {/*  <select className="input-style">*/}
            {/*    <option value={"all"}>Any time</option>*/}
            {/*    <option value={"all"}>Past 24 hours</option>*/}
            {/*    <option value={"all"}>Past Week</option>*/}
            {/*    <option value={"all"}>Past Month</option>*/}
            {/*  </select>*/}
            {/*</div>*/}

            {/* range input */}
            {/*<div className="">*/}
            {/*  <label className="text-sm block font-medium text-gray-700">*/}
            {/*    Match Score*/}
            {/*  </label>*/}
            {/*  <div className="flex items-center gap-2">*/}
            {/*    <input*/}
            {/*      type="range"*/}
            {/*      min="0"*/}
            {/*      max="100"*/}
            {/*      value={value}*/}
            {/*      onChange={(e) => setValue(Number(e.target.value))}*/}
            {/*      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-brand-blue"*/}
            {/*    />*/}
            {/*    <span className="font-bold text-brand-blue">{value}%</span>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <button type={'submit'} className="input-btn-style">{isPending? <Spinner size={'lg'} className={'bg-accent'}/> : 'Apply Filters' }</button>
            <button onClick={()=>reset()} className="w-full text-center text-gray-700 hover:bg-gray-200 cursor-pointer border border-gray-400 rounded-md p-2 text-sm mt-3">
              Reset Filters
            </button>
          </form>
        </div>
      </div>
      {/* job listings */}
      <div className="col-span-2">
        <div className="grid-style">
          {/* header with a filter by the side */}
          <div className="flex-between">
            <h1 className="heading text-base text-gray-700 dark:text-white">
              12 Matching Jobs
            </h1>
            <section className="flex space-x-2  items-center">
              <p className="text-sm text-gray-500">Sort by:</p>
              <select className="text-sm border focus:ring-brand-blue outline-none focus:border-brand-blue border-gray-600 rounded-md p-2">
                <option value={"all"}>Match Score</option>
                <option value={"all"}>Date Posted</option>
                <option value={"all"}>Salary</option>
              </select>
            </section>
          </div>

          {/* job matches */}
          <ul className="grid grid-cols-1 mt-3 gap-4">
            {JOB_MATCH.map((item, idx) => (
              <JobMatchCard key={idx} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobMatches;
