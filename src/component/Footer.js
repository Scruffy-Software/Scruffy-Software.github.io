const Footer = () => {
  const date = new Date();
  return ( <div className="py-5 px-3 flex justify-between bg-dark-75">
    <span className="font-body text-white">&copy; {date.getFullYear()} Scruffy Software</span>
    <a href="mailto:dan@scruffysoftware.com" className="font-body underline text-white">dan@scruffysoftware.com</a>
  </div> );
}
 
export default Footer;