const Hero = () => {
  return (
    <section className="flex flex-col text-center h-screen bg-graph">
      <div className="border-4 border-orange flex-1 flex items-center m-2 flex-col justify-center px-2">
        <img src="/img/about.svg" className="w-16 sm:w-24 max-w-full mx-auto" alt="Scruffy Software" />
        <h1 className="text-4xl font-logo text-orange mb-4">
          Scruffy Software
        </h1>
        <p className=" w-96 mx-auto max-w-full font-body">
          Scruffy Software is a Minnesota-based single member LLC that develops
          custom software and web applications.
        </p>
      </div>
    </section>
  );
}
 
export default Hero;