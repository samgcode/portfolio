import Projects from "./projects";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white text-center py-12">
        <h1 className="mx-auto text-6xl">Hi, I'm Sam</h1>
        <h2 className="mx-auto text-3xl max-w-[48rem] mt-4">I do a lot of projects to learn new things, and you can check out some of them here!</h2>
      </div>
      <Projects />
    </>
  );
}
