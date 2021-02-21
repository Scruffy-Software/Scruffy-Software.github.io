const Work = () => {
  return (
    <section className="px-3 py-20 flex flex-col items-center">
      <img
        src="img/coadvocate_logo.png"
        alt="CoAdvocate"
        className="mb-3 max-w-full w-48"
      />
      <p className=" w-96 mx-auto max-w-full text-center font-body font-thin">
        CoAdvocate is an application used to manage statehouse lobbying
        campaigns available on iOS and Android devices. While usually work is
        done for clients, this is Scruffy's first in-house product.
      </p>
      <div className="flex justify-center py-3 mt-3">
        <a href="https://coadvocate.com" target="_blank" rel="noreferrer" className="bg-orange text-white px-8 py-2 rounded-lg font-body font-light">Check It Out</a>
      </div>
    </section>
  );
}
 
export default Work;