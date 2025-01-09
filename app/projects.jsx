'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

import Carousel from './carousel'

import projects from './projects.json'

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  function openProject(project) {
    setOpen(true);
    setSelectedProject(project);
  }

  return (
    <div>
      <div className="text-black gap-8 p-10 flex flex-wrap justify-center">
        {projects.map(project => {
          return (<div onClick={() => openProject(project)} key={project.name} className="p-4 rounded-xl bg-white border-4 content-between grid border-slate-800 w-96 animated hover:drop-shadow-xl active:bg-gray-300 hover:-translate-y-0.5 cursor-pointer">
            <h1 className="text-3xl font-extrabold">{project.name}</h1>
            <h2 className="text-1xl font-semibold">{project.description.substring(0, 100)}...</h2>
            <div className='flex flex-wrap gap-x-2 gap-y-1 mt-4'>
              {project.tags.map(tag => {
                return (<p key={tag} className="text-sm font-bold text-blue-500 bg-blue-200 rounded-full py-1 px-3">{tag}</p>)
              })}
            </div>
          </div>)
        })}
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className='rounded-lg'>
                  {selectedProject.images &&
                    <Carousel slides={selectedProject.images} />
                  }
                </div>
                <div className="pt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h1 className="text-3xl font-semibold leading-6 text-gray-900">
                    {selectedProject.name}
                  </h1>
                  <div className="mt-2 flex gap-2">
                    {selectedProject.link &&
                      <a className="animated text-md text-blue-500 underline hover:text-blue-300 active:text-white" href={selectedProject.link} target="_blank">
                        Website
                      </a>
                    }
                    {selectedProject.github &&
                      <a className="animated text-md text-blue-500 underline hover:text-blue-300 active:text-white" href={selectedProject.github} target="_blank">
                        Github
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" /></svg> */}
                        {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                      </a>
                    }
                  </div>
                  <div className="mt-2">
                    <p className="text-md text-gray-700">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="animated mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-200 active:bg-gray-400"
                >
                  close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
